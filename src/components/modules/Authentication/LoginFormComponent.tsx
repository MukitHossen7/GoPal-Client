"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { toast } from "sonner";
import { Loader2, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Logic / Utilities
import { loginUser } from "@/services/auth/loginUser";
import { getInputFieldError } from "@/utility/getInputFieldError";
import { Logo } from "@/components/shared/Logo";

const LoginFormComponent = ({ redirect }: { redirect?: string }) => {
  // Server Action Hook
  const [state, formAction, isPending] = useActionState(loginUser, null);
  // Local State for UI
  const [showPassword, setShowPassword] = useState(false);

  // Error Toast Handling
  useEffect(() => {
    if (state && !state.success && state.error) {
      toast.error("Login failed. Please check your credentials.");
    }
  }, [state]);

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-md mx-auto"
    >
      <Card className="border-none shadow-md bg-white/90 backdrop-blur-sm dark:bg-card/90 overflow-hidden">
        {/* Decorative Top Line */}
        <div className="h-2 w-full bg-gradient-to-r from-primary via-blue-400 to-primary" />

        <CardHeader className="space-y-1 text-center  items-center">
          <Link href="/">
            <Logo variant="icon" className="mb-2 mx-auto" />
          </Link>
          <CardTitle className="text-2xl font-bold text-foreground">
            Welcome Back
          </CardTitle>
          <CardDescription>
            Enter your credentials to continue your adventure
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form action={formAction} className="space-y-4">
            {/* Hidden Redirect Field */}
            {redirect && (
              <input type="hidden" name="redirect" value={redirect} />
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="traveler@gopal.com"
                  className="pl-9 bg-background/50 border-input focus:border-primary transition-all duration-300"
                  // required
                />
              </div>
              {getInputFieldError("email", state) && (
                <motion.span
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-destructive font-medium text-xs block"
                >
                  {getInputFieldError("email", state)}
                </motion.span>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forget-password"
                  className="text-xs text-primary hover:underline font-medium"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-9 pr-9 bg-background/50 border-input focus:border-primary transition-all duration-300"
                  // required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-muted-foreground hover:text-primary transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {getInputFieldError("password", state) && (
                <motion.span
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-destructive font-medium text-xs block"
                >
                  {getInputFieldError("password", state)}
                </motion.span>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full font-semibold shadow-md hover:shadow-lg transition-all"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  Login <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2 text-center bg-muted/30 p-6">
          <div className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Sign up for free
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LoginFormComponent;
