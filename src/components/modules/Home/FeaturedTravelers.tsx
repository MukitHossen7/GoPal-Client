import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

const travelers = [
  {
    id: 1,
    name: "Sarah J.",
    location: "New York, USA",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    tags: ["Hiking", "Foodie"],
  },
  {
    id: 2,
    name: "Ahmed K.",
    location: "Dhaka, BD",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    tags: ["Photography", "History"],
  },
  {
    id: 3,
    name: "Elena R.",
    location: "Madrid, Spain",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    tags: ["Beach", "Nightlife"],
  },
  {
    id: 4,
    name: "Mike T.",
    location: "Sydney, AU",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    tags: ["Adventure", "Solo"],
  },
];

const FeaturedTravelers = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Meet Top Travelers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Find companions with similar interests
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {travelers.map((user) => (
            <Card
              key={user.id}
              className="overflow-hidden border-none shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader className="flex flex-col items-center p-6 bg-muted/20">
                <Avatar className="h-24 w-24 border-4 border-white shadow-sm">
                  <AvatarImage src={user.image} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold">{user.name}</h3>
                  <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    <MapPin size={14} /> {user.location}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {user.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTravelers;
