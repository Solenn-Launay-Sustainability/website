"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", labelKey: "home" },
  { id: "why", labelKey: "why" },
  { id: "journey", labelKey: "journey" },
  { id: "topics", labelKey: "topics" },
  { id: "formats", labelKey: "formats" },
  { id: "scenario", labelKey: "scenario" },
  { id: "testimonials", labelKey: "testimonials" },
  { id: "contact", labelKey: "contact" },
] as const;

function Navbar() {
  const t = useTranslations("Navbar");
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (!element) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveSection(section.id);
            }
          }
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
    };
  }, []);

  function handleClick(id: string) {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-border/50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between md:justify-center">
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 transition-colors hover:bg-muted md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            {isMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={cn(
                    "relative rounded-md px-3 py-1.5 font-medium text-sm transition-colors",
                    activeSection === section.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  onClick={() => handleClick(section.id)}
                  type="button"
                >
                  {t(section.labelKey)}
                  {activeSection === section.id && (
                    <span className="absolute inset-x-1 -bottom-[calc(0.5rem+1px)] h-0.5 rounded-full bg-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="w-9 md:hidden" />
        </div>

        {isMenuOpen && (
          <div className="border-border/50 border-t py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    className={cn(
                      "w-full rounded-md px-3 py-2 text-left font-medium text-sm transition-colors",
                      activeSection === section.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                    onClick={() => handleClick(section.id)}
                    type="button"
                  >
                    {t(section.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export { Navbar };
