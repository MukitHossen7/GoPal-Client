import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ITraveler } from "@/types/traveler.interface";

import { MapPin, Star, Verified } from "lucide-react";

interface TravelerCardProps {
  traveler: ITraveler;
  onClick: () => void;
}

export default function TravelerCard({ traveler, onClick }: TravelerCardProps) {
  return (
    <Card
      onClick={onClick}
      className="group relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer border-muted h-full flex flex-col"
    >
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="relative">
          <Avatar className="h-16 w-16 border-2 border-background shadow-sm">
            <AvatarImage
              src={traveler?.profileImage as string}
              alt={traveler?.name}
              className="object-cover"
            />
            <AvatarFallback>{traveler?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          {traveler?.isVerifiedTraveler && (
            <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5 text-blue-500">
              <Verified className="w-5 h-5 fill-blue-100" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg leading-none group-hover:text-primary transition-colors">
                {traveler.name}
              </h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" /> {traveler?.currentLocation}
              </p>
            </div>
            {traveler?.averageRating > 0 && (
              <div className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-md text-xs font-medium">
                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                <span>{traveler?.averageRating.toFixed(1)} </span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {traveler?.bio}
        </p>

        <div className="flex flex-wrap gap-2">
          {traveler?.travelInterests?.slice(0, 3).map((interest, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs font-normal"
            >
              {interest}
            </Badge>
          ))}
          {traveler?.travelInterests?.length > 3 && (
            <span className="text-xs text-muted-foreground self-center">
              +{traveler?.travelInterests?.length - 3} more
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-4 text-xs text-muted-foreground">
        Click to view full profile & contact details
      </CardFooter>
    </Card>
  );
}
