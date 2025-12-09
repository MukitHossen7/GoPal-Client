"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Calendar as CalendarIcon, MapPin, Users, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";

// Manual Type Definition to avoid import errors
type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

export default function HomeSearchBar() {
  const router = useRouter();

  // States
  const [destination, setDestination] = React.useState("");
  const [date, setDate] = React.useState<DateRange | undefined>();
  const [travelType, setTravelType] = React.useState<string>("");

  // Search Handler
  const handleSearch = () => {
    const params = new URLSearchParams();

    if (destination) {
      params.set("searchTerm", destination);
    }
    if (travelType) {
      params.set("travelType", travelType);
    }
    // Date formatting for backend (ISO String)
    if (date?.from) {
      params.set("startDate", format(date.from, "yyyy-MM-dd"));
    }
    if (date?.to) {
      params.set("endDate", format(date.to, "yyyy-MM-dd"));
    }

    // Redirect to Explore Page with Query Params
    router.push(`/explore?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Search Container with Glassmorphism */}
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
        {/* 1. Destination Input */}
        <div className="relative w-full lg:flex-1 group">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors">
            <MapPin className="h-5 w-5" />
          </div>
          <Input
            type="text"
            placeholder="Where do you want to go?"
            className="pl-10 h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-blue-400 focus-visible:border-blue-400 transition-all"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        {/* 2. Date Range Picker (Shadcn Calendar) */}
        <div className="w-full lg:w-[300px]">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full h-12 justify-start text-left font-normal bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white focus-visible:ring-1 focus-visible:ring-blue-400 transition-all",
                  !date && "text-gray-400"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                disabled={(date) =>
                  date < new Date(new Date().setHours(0, 0, 0, 0))
                } // Disable past dates
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* 3. Travel Type Select */}
        <div className="w-full lg:w-[200px]">
          <Select onValueChange={setTravelType}>
            <SelectTrigger className="h-12 bg-white/5 border-white/10 text-white hover:bg-white/10 focus:ring-1 focus:ring-blue-400 transition-all">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="h-4 w-4" />
                <SelectValue placeholder="Travel Type" className="text-white" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="SOLO">Solo Adventure</SelectItem>
              <SelectItem value="FAMILY">Family Trip</SelectItem>
              <SelectItem value="FRIENDS">Friends Trip</SelectItem>
              <SelectItem value="COUPLE">Couple Getaway</SelectItem>
              <SelectItem value="GROUP">Group Tour</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 4. Search Button */}
        <Button
          onClick={handleSearch}
          className="w-full lg:w-auto h-12 px-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-lg shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </div>
    </div>
  );
}
