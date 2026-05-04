"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border w-[108px] h-[36px]" />
    );
  }

  const themes = [
    { id: "light", icon: Sun, label: "Light" },
    { id: "dark", icon: Moon, label: "Dark" },
    { id: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="relative flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border shadow-inner backdrop-blur-sm">
      {themes.map(({ id, icon: Icon, label }) => {
        const isActive = theme === id;
        return (
          <button
            key={id}
            onClick={() => setTheme(id)}
            className={cn(
              "relative flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 z-10",
              isActive 
                ? "text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}
            title={`Switch to ${label} mode`}
          >
            <Icon size={16} strokeWidth={2.5} />
            
            {isActive && (
              <motion.div
                layoutId="active-theme"
                className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
