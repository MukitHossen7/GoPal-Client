"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialBlogPosts = [
  {
    id: 1,
    title: "Our Begin Now What Your Will Bean Forest This Our Agency.",
    date: "Nov 10, 2023",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "Exploring the Romance of the Eiffel Tower at Sunset.",
    date: "Dec 05, 2023",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=800&auto=format&fit=crop",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Hidden Gems You Must Visit in Your Next Trip.",
    date: "Jan 12, 2024",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop",
    link: "/blog/3",
  },
  {
    id: 4,
    title: "Budget Travel: How to See the World on a Shoestring.",
    date: "Feb 20, 2024",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=800&auto=format&fit=crop",
    link: "/blog/4",
  },
  {
    id: 5,
    title: "The Ultimate Guide to Backpacking Through Asia.",
    date: "Mar 15, 2024",
    readTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=800&auto=format&fit=crop",
    link: "/blog/5",
  },
];

const LatestBlogs = () => {
  const [posts, setPosts] = useState(initialBlogPosts);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setPosts((prevPosts) => {
          const newPosts = [...prevPosts];
          const first = newPosts.shift();
          if (first) newPosts.push(first);
          return newPosts;
        });
        setIsAnimating(false);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 ">
        {/* Section Title with Professional Flair */}
        <div className="mb-10">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
              Journal & News
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Latest{" "}
              <span className="text-primary/80 italic font-serif">Blogs</span>
            </h2>
          </div>
        </div>

        {/* 50/50 Professional Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT SIDE: Big Featured Card */}
          <div
            className={`relative transition-all duration-1000 ease-in-out ${
              isAnimating
                ? "opacity-40 -translate-x-8 blur-sm"
                : "opacity-100 translate-x-0 blur-0"
            }`}
          >
            <div className="group sticky top-24 h-full min-h-[500px] md:min-h-[600px] flex flex-col rounded-2xl overflow-hidden bg-card border border-border">
              <div className="relative h-full w-full overflow-hidden flex-grow">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Meta Info on Image */}
                <div className="absolute top-8 left-8 flex gap-3">
                  <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase">
                    New Post
                  </span>
                </div>

                {/* Text Content Area */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {posts[0].date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {posts[0].readTime}
                    </span>
                  </div>
                  <h3 className="text-white text-2xl lg:text-3xl font-bold leading-tight mb-8">
                    {posts[0].title}
                  </h3>
                  <Link href={posts[0].link}>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-2xl font-bold shadow-lg shadow-primary/25 group/btn">
                      Read Full Article
                      <ExternalLink
                        size={18}
                        className="ml-2 group-hover/btn:rotate-45 transition-transform"
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: List of Sub-posts */}
          <div className="flex flex-col justify-between gap-6">
            {posts.slice(1, 4).map((post, index) => (
              <div
                key={post.id}
                className={`transition-all duration-1000 ease-in-out ${
                  isAnimating
                    ? "opacity-30 translate-y-10 blur-[2px]"
                    : "opacity-100 translate-y-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center group cursor-pointer">
                  {/* Thumbnail */}
                  <div className="relative h-48 w-full md:w-52 flex-shrink-0 rounded-2xl overflow-hidden border border-border group-hover:shadow-xl transition-all shadow-none">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Small Content Area */}
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center gap-3 text-xs font-semibold text-primary uppercase tracking-tighter">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span className="text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="text-xl font-medium leading-tight text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <Link href={post.link}>
                      <button className="flex items-center gap-2 text-sm font-black text-primary border-b-2 border-transparent hover:border-primary transition-all py-1">
                        Read Story <ArrowRight size={14} />
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Thin line between items */}
                {index < 2 && <div className="mt-6 h-px bg-border/50" />}
              </div>
            ))}

            {/* Newsletter or Extra Action */}
            <div className="mt-1 p-4 md:p-8 rounded-2xl bg-secondary border border-border flex items-center justify-between">
              <div className="block">
                <p className="font-bold text-lg">Never miss an adventure</p>
                <p className="text-sm text-muted-foreground">
                  Subscribe to our weekly travel newsletter
                </p>
              </div>
              <Link href="/membership">
                <Button
                  variant="outline"
                  className="rounded-xl border-primary text-primary font-bold px-6"
                >
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
