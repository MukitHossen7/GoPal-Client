import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

// Mock Data (Replace with API later)
const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://i.ibb.co/xt4jqfzv/istockphoto-675172642-612x612.jpg",
    travelers: 120,
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://i.ibb.co/1fKWgKh2/istockphoto-635758088-612x612.jpg",
    travelers: 85,
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image:
      "https://i.ibb.co/tMy2nNv1/67b7b12ace55b1bf141eb8f3-638e6beeed8f00344dc59789-japademy-kyoto-kinkakuji-temple-one.jpg",
    travelers: 200,
  },
  {
    id: 4,
    name: "Santorini, Greece",
    image: "https://i.ibb.co/ZRmXc3y1/istockphoto-1145450965-612x612.jpg",
    travelers: 95,
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Trending Destinations
            </h2>
            <p className="mt-2 text-muted-foreground">
              Places travelers are heading to right now
            </p>
          </div>
          <Link
            href="/travel-plans"
            className="hidden text-primary hover:underline md:block"
          >
            View all destinations →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-200">
                    <MapPin size={14} />
                    <span>{dest.travelers} Travelers active</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
