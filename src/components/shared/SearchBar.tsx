"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, Users } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white/10 p-4 shadow-2xl backdrop-blur-md md:flex-row md:items-center md:gap-2 md:p-2">
      <div className="flex flex-1 items-center gap-2 rounded-lg bg-white px-3 py-2">
        <MapPin className="text-gray-500" size={20} />
        <Input
          type="text"
          placeholder="Where to?"
          className="border-none bg-transparent p-0 text-gray-900 placeholder:text-gray-500 focus-visible:ring-0"
        />
      </div>

      <div className="flex flex-1 items-center gap-2 rounded-lg bg-white px-3 py-2">
        <Calendar className="text-gray-500" size={20} />
        <Input
          type="date"
          className="border-none bg-transparent p-0 text-gray-900 focus-visible:ring-0"
        />
      </div>

      <div className="flex flex-1 items-center gap-2 rounded-lg bg-white px-3 py-2">
        <Users className="text-gray-500" size={20} />
        <Select>
          <SelectTrigger className="border-none bg-transparent p-0 focus:ring-0 shadow-none text-gray-900">
            <SelectValue placeholder="Travel Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="solo">Solo Adventure</SelectItem>
            <SelectItem value="group">Group Trip</SelectItem>
            <SelectItem value="family">Couple/Family</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        size="lg"
        className="h-12 w-full rounded-lg bg-primary text-white hover:bg-blue-700 md:w-auto md:px-8"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
