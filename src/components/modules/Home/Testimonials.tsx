/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllReviews } from "@/services/review/review.service";
import { Marquee, ReviewCard } from "./HomeReviews";

const Testimonials = async () => {
  const { data: reviews } = await getAllReviews("limit=100");

  const firstRow = reviews?.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews?.slice(Math.ceil(reviews.length / 2));

  return (
    <section className="py-20 bg-muted/30">
      <div className="mb-10 text-center container mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Trusted by Adventurers
        </h2>
        <p className="mt-4 text-muted-foreground">
          Read success stories from our global community.
        </p>
      </div>

      <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background shadow-none">
        {/* First Marquee Row */}
        <Marquee pauseOnHover className="[--duration:40s]">
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

        {/* Second Marquee Row (Reverse) */}
        <Marquee reverse pauseOnHover className="[--duration:40s]">
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

        {/* Gradients for fade effect on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};

export default Testimonials;
