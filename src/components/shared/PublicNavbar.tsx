// "use client";

// import Link from "next/link";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import { useState } from "react";
// import { Logo } from "./Logo";

// const PublicNavbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   // const accessToken = "dummy_access_token"; // replace with actual token logic
//   const accessToken = null; // replace with actual token logic
//   // const handleLogout = async () => {
//   //   await logoutUser();
//   // };
//   return (
//     <nav className="bg-white/98 sticky top-0 z-50 backdrop-blur-2xl">
//       <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container flex flex-wrap items-center justify-between mx-auto py-2 lg:py-4">
//         {/* Logo */}

//         <Link href="/" className="hover:opacity-90 transition-opacity">
//           <Logo variant="full" />
//         </Link>

//         {/* Right side icons */}
//         <div className="flex items-center lg:order-2 space-x-2 lg:space-x-0 rtl:space-x-reverse">
//           {/* User Menu */}
//           <div className="flex items-center gap-2">
//             {accessToken ? (
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 type="button"
//                 className="flex text-sm bg-gray-800 rounded-full lg:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
//               >
//                 <span className="sr-only">Open user menu</span>
//                 <Image
//                   className="w-8 h-8 rounded-full"
//                   src={
//                     "https://flowbite.com/docs/images/people/profile-picture-3.jpg"
//                   }
//                   alt="user photo"
//                   width={32}
//                   height={32}
//                 />
//               </button>
//             ) : (
//               <Link href="/login">
//                 <Button>Login</Button>
//               </Link>
//             )}
//           </div>

//           {/* Dropdown */}
//           {dropdownOpen && (
//             <div className="absolute top-14 right-4 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
//               <div className="px-4 py-3">
//                 <span className="block text-sm text-gray-900 dark:text-white">
//                   {/* {user?.name} */}
//                   John Doe
//                 </span>
//                 <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
//                   {/* {user?.email} */}
//                   john@gmail.com
//                 </span>
//               </div>
//               <ul className="py-2">
//                 {/* admin dashboard */}
//                 {/* {accessToken &&
//                   authData?.email &&
//                   authData?.role === "ADMIN" && (
//                     <li>
//                       <Link
//                         href="/admin/dashboard"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                       >
//                         Dashboard
//                       </Link>
//                     </li>
//                   )} */}

//                 {/* doctor dashboard */}
//                 {/* {accessToken &&
//                   authData?.email &&
//                   authData?.role === "DOCTOR" && (
//                     <li>
//                       <Link
//                         href="/doctor/dashboard"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                       >
//                         Dashboard
//                       </Link>
//                     </li>
//                   )} */}
//                 {/* patient dashboard */}
//                 {/* {accessToken &&
//                   authData?.email &&
//                   authData?.role === "PATIENT" && (
//                     <li>
//                       <Link
//                         href="/dashboard"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                       >
//                         Dashboard
//                       </Link>
//                     </li>
//                   )} */}
//                 <li>
//                   <Link
//                     href="/dashboard"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Dashboard
//                   </Link>
//                 </li>
//                 <li>
//                   <button
//                     // onClick={handleLogout}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-left "
//                   >
//                     Sign out
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             type="button"
//             className="inline-flex items-center p-1 w-7 h-7 justify-center text-sm text-gray-800 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-4 h-4"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Navigation links */}
//         <div
//           className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
//             menuOpen ? "block" : "hidden"
//           }`}
//         >
//           <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <Link
//                 href="/about"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded-sm lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500"
//               >
//                 About
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default PublicNavbar;

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, User, LogOut, Map, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { IUserInfo } from "@/types/user.interface";

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Travelers", path: "/explore" },
    { name: "Travel Plans", path: "/travel-plans" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 1. Logo Section */}
          <Link href="/" className="flex-shrink-0">
            <Logo variant="full" />
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
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

          {/* 3. Right Side (Auth & Actions) */}
          <div className="hidden md:flex items-center space-x-4">
            {accessToken && authData.data?.email ? (
              <>
                {/* Create Plan Button (For Users) */}
                {authData?.data?.user?.role === "TRAVELER" && (
                  <Link href="/travel-plans/add">
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
                              href={`/profile/me`}
                              className="flex items-center  gap-2 rounded-md p-2 text-sm  hover:bg-accent transition-colors"
                            >
                              <User className="h-4 w-4" /> My Profile
                            </Link>
                            <Link
                              href="/travel-plans"
                              className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent transition-colors"
                            >
                              <Calendar className="h-4 w-4" /> My Plans
                            </Link>
                          </>
                        )}
                        <div className="border-t my-1"></div>
                        <button className="flex w-full items-center gap-2 rounded-md p-2 text-sm text-destructive hover:bg-destructive/10 transition-colors">
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
                  <Button variant="ghost">Log in</Button>
                </Link>
                <Link href="/register">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* 5. Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t  animate-in slide-in-from-top-5">
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
                        href={`/profile/me`}
                        className="flex items-center  gap-2 rounded-md p-2 text-sm  hover:bg-accent transition-colors"
                      >
                        <User className="h-4 w-4" /> My Profile
                      </Link>
                      <Link
                        href="/travel-plans"
                        className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent transition-colors"
                      >
                        <Calendar className="h-4 w-4" /> My Plans
                      </Link>
                    </>
                  )}
                  <button className="block w-full text-left text-sm font-medium text-destructive">
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/login" onClick={() => setMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setMenuOpen(false)}>
                    <Button className="w-full">Sign Up</Button>
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
