/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, MessageSquarePlus, User } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { IReview } from "@/types/review.interface";
import { ReviewFormModal } from "./ReviewFormModal";

interface ReviewSectionProps {
  planId: string;
  reviews: IReview[];
  user: any;
}

export const ReviewSection = ({
  planId,
  reviews,
  user,
}: ReviewSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // এভারেজ রেটিং ক্যালকুলেশন
  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <div className="space-y-6 mt-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Reviews & Experiences
            <span className="text-sm font-normal text-muted-foreground bg-secondary px-2 py-1 rounded-full">
              {reviews.length}
            </span>
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(Number(avgRating))
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{avgRating} out of 5</span>
          </div>
        </div>

        {/* Add Review Button (লগইন করা এবং ওনার না হলে দেখাবে) */}
        {user && (
          <Button onClick={() => setIsModalOpen(true)} className="gap-2">
            <MessageSquarePlus className="w-4 h-4" />
            Write a Review
          </Button>
        )}
      </div>

      {/* Reviews Grid */}
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar>
                    <AvatarImage src={review.traveler.profileImage} />
                    <AvatarFallback>
                      <User />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">
                      {review.traveler.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(review.createdAt), "dd MMM, yyyy")}
                    </span>
                  </div>
                  <div className="ml-auto flex bg-yellow-50 px-2 py-1 rounded-md border border-yellow-100">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1 mt-0.5" />
                    <span className="text-xs font-bold text-yellow-700">
                      {review.rating}.0
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {review.comment}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted/30 rounded-lg border border-dashed">
          <p className="text-muted-foreground">
            No reviews yet. Be the first to share your experience!
          </p>
        </div>
      )}

      {/* Review Modal Form */}
      <ReviewFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planId={planId}
      />
    </div>
  );
};
