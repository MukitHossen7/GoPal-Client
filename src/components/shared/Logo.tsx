"use client";
import { motion } from "framer-motion";

interface LogoProps {
  variant?: "icon" | "full" | "minimal";
  className?: string;
  showTagline?: boolean;
}

const LogoIcon = () => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative flex items-center justify-center w-12 h-12 shrink-0 group"
  >
    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    <svg
      viewBox="0 0 100 100"
      className="w-10 h-10 relative z-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        d="M85 50C85 69.33 69.33 85 50 85C30.67 85 15 69.33 15 50C15 30.67 30.67 15 50 15C65 15 78 24 83 37"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        className="text-primary"
      />

      <motion.path
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        d="M50 50H85"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        className="text-primary"
      />

      <motion.circle
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        cx="85"
        cy="50"
        r="8"
        fill="currentColor"
        className="text-foreground"
      />
    </svg>
  </motion.div>
);

export const Logo = ({
  variant = "full",
  className = "",
  showTagline = true,
}: LogoProps) => {
  if (variant === "full") {
    return (
      <div
        className={`flex items-center justify-start gap-1 cursor-pointer group select-none ${className}`}
      >
        <LogoIcon />
        <div className="flex flex-col -space-y-1.5 mt-0.5">
          <span className="text-3xl font-[700] tracking-tighter text-foreground leading-none mb-0.5">
            GO<span className="text-primary italic">PAL</span>
          </span>
          {showTagline && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground"
            >
              Adventure Buddy
            </motion.span>
          )}
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div
        className={`flex items-center gap-2 group cursor-pointer ${className}`}
      >
        <div className="w-2 h-8 bg-primary rounded-full transition-all group-hover:scale-y-110 shadow-[0_0_15px_rgba(var(--primary),0.3)]" />
        <span className="text-2xl font-black tracking-tighter text-foreground italic">
          GO<span className="text-primary">PAL</span>
        </span>
      </div>
    );
  }

  if (variant === "icon") {
    return <LogoIcon />;
  }

  return null;
};
