"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, User, LogOut, Map, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { IUserInfo } from "@/types/user.interface";
import { logoutUser } from "@/services/auth/logoutUser";

const PublicNavbar = ({
  accessToken,
  authData,
}: {
  accessToken: string;
  authData: IUserInfo;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const handleLogout = async () => {
    await logoutUser();
  };
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Travelers", path: "/explore-travelers" },
    { name: "Travel Buddy", path: "/travel-plans" },
    { name: "Memberships", path: "/membership" },
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 1. Logo Section */}
          <Link href="/" className="flex-shrink-0">
            <Logo variant="full" />
          </Link>

          {/* 2. Desktop Navigation (Changed md:flex to lg:flex) */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. Right Side (Auth & Actions) (Changed md:flex to lg:flex) */}
          <div className="hidden lg:flex items-center space-x-4">
            {accessToken && authData.data?.email ? (
              <>
                {/* Create Plan Button (For Users) */}
                {authData?.data?.user?.role === "TRAVELER" && (
                  <Link href="/dashboard/my-travel-plans">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      + Create Plan
                    </Button>
                  </Link>
                )}

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 focus:outline-none"
                  >
                    <div className="relative h-9 w-9 overflow-hidden rounded-full border border-primary/20 ring-2 ring-transparent hover:ring-primary/20 transition-all">
                      <Image
                        src={
                          authData?.data?.profileImage ||
                          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
                        }
                        alt="User"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-3 w-56 rounded-xl border bg-card text-card-foreground shadow-lg animate-in fade-in zoom-in-95">
                      <div className="flex flex-col space-y-1 p-3 border-b">
                        <p className="text-sm font-medium leading-none">
                          {authData?.data?.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {authData?.data?.email}
                        </p>
                      </div>
                      <div className="p-2">
                        {authData?.data?.user?.role === "ADMIN" ? (
                          <Link
                            href="/admin/dashboard"
                            className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent transition-colors"
                          >
                            <Settings className="h-4 w-4" /> Admin Dashboard
                          </Link>
                        ) : (
                          <>
                            <Link
                              href="/dashboard"
                              className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent transition-colors"
                            >
                              <Map className="h-4 w-4" /> My Dashboard
                            </Link>
                            <Link
                              href={`/my-profile`}
                              className="flex items-center  gap-2 rounded-md p-2 text-sm  hover:bg-accent transition-colors"
                            >
                              <User className="h-4 w-4" /> My Profile
                            </Link>
                            <Link
                              href="/my-plans"
                              className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent transition-colors"
                            >
                              <Calendar className="h-4 w-4" /> My Plans
                            </Link>
                          </>
                        )}
                        <div className="border-t my-1"></div>
                        <button
                          onClick={handleLogout}
                          className="flex w-full items-center gap-2 rounded-md p-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                        >
                          <LogOut className="h-4 w-4" /> Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // Logged Out State
              <div className="flex gap-2">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 cursor-pointer"
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="rounded-full px-6 cursor-pointer">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* 4. Mobile/Tablet Menu Button (Changed md:hidden to lg:hidden) */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* 5. Mobile/Tablet Navigation Menu (Changed md:hidden to lg:hidden) */}
        {menuOpen && (
          <div className="lg:hidden py-3 border-t  animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 text-base font-medium rounded-md hover:bg-accent ${
                  isActive(link.path)
                    ? "text-primary bg-accent/50"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t pt-3 px-4 space-y-2">
              {accessToken && authData?.data?.email ? (
                <>
                  {authData?.data?.user?.role === "ADMIN" ? (
                    <Link
                      href="/admin/dashboard"
                      className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent transition-colors"
                    >
                      <Settings className="h-4 w-4" /> Admin Dashboard
                    </Link>
                  ) : (
                    <>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent transition-colors"
                      >
                        <Map className="h-4 w-4" /> My Dashboard
                      </Link>
                      <Link
                        href={`/my-profile`}
                        className="flex items-center  gap-2 rounded-md p-2 text-sm  hover:bg-accent transition-colors"
                      >
                        <User className="h-4 w-4" /> My Profile
                      </Link>
                      <Link
                        href="/my-plans"
                        className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent transition-colors"
                      >
                        <Calendar className="h-4 w-4" /> My Plans
                      </Link>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left text-sm font-medium text-destructive"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/login" onClick={() => setMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="rounded-full px-6 cursor-pointer w-full"
                    >
                      Log in
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setMenuOpen(false)}>
                    <Button className="rounded-full px-6 cursor-pointer w-full">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PublicNavbar;
