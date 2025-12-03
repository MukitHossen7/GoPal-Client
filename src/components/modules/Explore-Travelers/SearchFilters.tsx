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
import { useDebounced } from "@/hooks/useDebounced";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// npm install use-debounce (Optional, or custom hook)

const SearchFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Local state for immediate input feedback
  const [search, setSearch] = useState(searchParams.get("searchTerm") || "");
  const [interest, setInterest] = useState(searchParams.get("interest") || "");

  // Debounce search to avoid too many requests
  const [debouncedSearch] = useDebounced(search, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedSearch) {
      params.set("searchTerm", debouncedSearch);
    } else {
      params.delete("searchTerm");
    }

    if (interest && interest !== "all") {
      params.set("interest", interest);
    } else {
      params.delete("interest");
    }

    router.push(`/explore-travelers?${params.toString()}`);
  }, [debouncedSearch, interest, router, searchParams]);

  return (
    <div className="mb-10 rounded-xl border bg-card p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name or location..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={14} />
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <Select value={interest} onValueChange={setInterest}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Interests</SelectItem>
              <SelectItem value="Hiking">Hiking</SelectItem>
              <SelectItem value="Art Galleries">Art Galleries</SelectItem>
              <SelectItem value="Photography">Photography</SelectItem>
              <SelectItem value="Safari">Safari</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
