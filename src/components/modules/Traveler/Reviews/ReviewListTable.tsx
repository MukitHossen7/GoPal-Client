"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, Edit, Trash, Star, MapPin } from "lucide-react";
import { toast } from "sonner";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { deleteReview, updateReview } from "@/services/review/review.service";

// Type Definition
type Review = {
  id: string;
  rating: number;
  comment: string;
  travelPlan: {
    id: string;
    title: string;
    destination: string;
    startDate: string;
    endDate: string;
  };
  createdAt: string;
};

export default function ReviewListTable({
  initialReviews,
}: {
  initialReviews: Review[];
}) {
  const router = useRouter();

  // NOTE: We are NOT using local state for 'reviews'.
  // We rely directly on 'initialReviews' from the server.

  // State for Modals
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  // State for Edit Form
  const [editRating, setEditRating] = useState(0);
  const [editComment, setEditComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle Edit Click
  const handleEditClick = (review: Review) => {
    setSelectedReview(review);
    setEditRating(review.rating);
    setEditComment(review.comment);
    setIsEditOpen(true);
  };

  // Handle Delete Click
  const handleDeleteClick = (review: Review) => {
    setSelectedReview(review);
    setIsDeleteOpen(true);
  };

  // Submit Update
  const handleUpdate = async () => {
    if (!selectedReview) return;
    setIsLoading(true);

    try {
      const res = await updateReview(selectedReview.id, {
        rating: editRating,
        comment: editComment,
      });

      if (res.success) {
        toast.success("Review updated successfully!");
        setIsEditOpen(false);

        // This triggers a re-fetch of the server component
        // and updates 'initialReviews' prop automatically.
        router.refresh();
      } else {
        toast.error(res.message || "Failed to update review");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // Confirm Delete
  const handleDelete = async () => {
    if (!selectedReview) return;
    setIsLoading(true);

    try {
      const res = await deleteReview(selectedReview.id);
      if (res.success) {
        toast.success("Review deleted successfully!");
        setIsDeleteOpen(false);

        // Triggers server re-fetch to update the list
        router.refresh();
      } else {
        toast.error(res.message || "Failed to delete review");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper for Star Rating Display
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1 text-amber-500">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-current" : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="rounded-md border bg-background overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Trip Details</TableHead>
              <TableHead>Review</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence mode="popLayout">
              {initialReviews.map((review, index) => (
                <motion.tr
                  key={review.id}
                  layout // This helps animate layout changes when items are removed
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  {/* Trip Details Column */}
                  <TableCell className="max-w-[250px]">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-primary">
                        {review.travelPlan.title}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground gap-1">
                        <MapPin className="w-3 h-3" />
                        {review.travelPlan.destination}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(review.createdAt), "dd MMM, yyyy")}
                      </span>
                    </div>
                  </TableCell>

                  {/* Comment Column */}
                  <TableCell className="max-w-[300px]">
                    <p
                      className="truncate text-sm text-gray-700 dark:text-gray-300"
                      title={review.comment}
                    >
                      {review.comment}
                    </p>
                  </TableCell>

                  {/* Rating Column */}
                  <TableCell>{renderStars(review.rating)}</TableCell>

                  {/* Actions Column */}
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => handleEditClick(review)}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeleteClick(review)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </motion.tr>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </div>

      {/* --- Edit Modal --- */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Review</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="rating">Rating</Label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="p-1 hover:bg-transparent"
                    onClick={() => setEditRating(star)}
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= editRating
                          ? "fill-amber-500 text-amber-500"
                          : "text-gray-300"
                      }`}
                    />
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="comment">Comment</Label>
              <Textarea
                id="comment"
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
                className="col-span-3 min-h-[100px]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button onClick={handleUpdate} disabled={isLoading}>
              {isLoading ? "Updating..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* --- Delete Confirmation Dialog --- */}
      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              review for{" "}
              <span className="font-semibold text-foreground">
                {selectedReview?.travelPlan.title}
              </span>
              .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive hover:bg-destructive/90"
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
