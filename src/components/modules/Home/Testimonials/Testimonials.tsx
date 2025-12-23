/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllReviews } from "@/services/review/review.service";
import { Marquee } from "../HomeReviews";
import { ReviewCard } from "./ReviewCard";

const Testimonials = async () => {
  const { data: reviews } = await getAllReviews("limit=100");

  // If no reviews, display a fallback or null
  if (!reviews || reviews.length === 0) return null;

  const firstRow = reviews?.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews?.slice(Math.ceil(reviews.length / 2));

  return (
    <section className="relative py-20 bg-muted/20 overflow-hidden">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Wall of Love
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Voices of Our <span className="text-primary">Global Community</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            See how GoPal is transforming solo travels into lifelong
            friendships. Real stories from real travelers around the world.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-background/50 backdrop-blur-sm border-none border-border shadow-none shadow-primary/5">
          {/* First Marquee Row (Right to Left) */}
          <Marquee pauseOnHover className="[--duration:50s] gap-6">
            {firstRow?.map((review: any) => (
              <ReviewCard
                key={review.id}
                img={review.traveler.profileImage}
                name={review.traveler.name}
                destination={review.travelPlan.destination}
                comment={review.comment}
                rating={review.rating}
              />
            ))}
          </Marquee>

          {/* Second Marquee Row (Left to Right - Reverse) */}
          <Marquee reverse pauseOnHover className="[--duration:50s] mt-6 gap-6">
            {secondRow?.map((review: any) => (
              <ReviewCard
                key={review.id}
                img={review.traveler.profileImage}
                name={review.traveler.name}
                destination={review.travelPlan.destination}
                comment={review.comment}
                rating={review.rating}
              />
            ))}
          </Marquee>

          {/* Premium Gradient Overlays for smooth edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
