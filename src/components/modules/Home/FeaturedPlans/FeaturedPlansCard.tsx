/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TravelPlanCard = ({ plan }: { plan: any }) => {
  const bgImage =
    plan.imageUrl ||
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Link href={`/travel-plans/${plan.id}`}>
        <Card className="group relative overflow-hidden rounded-xl border-none shadow-none h-[420px] flex flex-col">
          {/* Image Section with Overlay */}
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={bgImage}
              alt={plan.destination}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge className="bg-primary/90 hover:bg-primary backdrop-blur-sm shadow-sm">
                {plan.travelType}
              </Badge>
            </div>

            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full text-xs font-bold text-black flex items-center gap-1 shadow-sm">
              ★ {plan?.traveler?.averageRating.toFixed(1)}
            </div>

            {/* Destination & Title on Image */}
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <div className="flex items-center gap-1 text-xs text-gray-200 mb-1">
                <MapPin size={12} /> {plan.destination}
              </div>
              <h3 className="font-bold text-lg leading-tight line-clamp-2">
                {plan.title}
              </h3>
            </div>
          </div>

          {/* Content Section */}
          <CardContent className="flex-1 p-4 pt-4 space-y-3 bg-card">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar size={14} className="text-primary" />
                {new Date(plan.startDate).toLocaleDateString()}
              </div>
              <div className="font-medium text-foreground">
                {plan.budgetRange}
              </div>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {plan.description}
            </p>
          </CardContent>

          {/* Footer: Traveler Info & CTA */}
          <CardFooter className="p-4 pt-0 flex items-center justify-between border-t bg-card/50 mt-auto">
            <div className="flex items-center gap-2 mt-3">
              <div className="relative h-8 w-8 rounded-full overflow-hidden border border-gray-300">
                <Image
                  src={plan.traveler.profileImage || "/placeholder-user.jpg"}
                  alt={plan.traveler.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Hosted by</span>
                <span className="text-sm font-semibold leading-none">
                  {plan.traveler.name.split(" ")[0]}
                </span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default TravelPlanCard;
