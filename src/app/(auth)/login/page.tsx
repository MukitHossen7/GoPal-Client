import LoginFormComponent from "@/components/modules/Authentication/LoginFormComponent";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login - GoPal",
  description: "Login to find your travel buddy",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect: string }>;
}) {
  const params = (await searchParams) || {};

  return (
    <div className="min-h-screen w-full flex bg-background">
      <div className="hidden lg:flex w-1/2 relative bg-gray-900 text-white flex-col justify-between p-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
            alt="Travel Friends Meetup"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Brand Name */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold tracking-wide">GoPal</h3>
        </div>

        {/* Quote for Login: Memories & Return */}
        <div className="relative z-10 max-w-lg">
          <blockquote className="space-y-2">
            <p className="text-lg font-medium leading-relaxed">
              &ldquo;Travel brings power and love back into your life. Log in to
              see where your friends are heading next.&rdquo;
            </p>
            <footer className="text-sm font-semibold text-gray-300">
              — Rumi (Adapted)
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        {/* Background Decoration (Optional Subtle Blob) */}
        <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-teal-100/40 rounded-full blur-3xl opacity-50 dark:bg-teal-900/20" />

        {/* The Login Form Component */}
        <div className="w-full max-w-md">
          <LoginFormComponent redirect={params.redirect} />
        </div>
      </div>
    </div>
  );
}
