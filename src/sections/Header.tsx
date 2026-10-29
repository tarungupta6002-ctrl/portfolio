"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import CoolBeansButton from "@/components/CoolBeansButton";

const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "Projects",
    href: "#projects",
  },
  { label: "About", href: "#about" },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const Header = () => {
  const [activeItem, setActiveItem] =
    useState(0);

  const [hoveredItem, setHoveredItem] =
    useState<number | null>(null);

  const [showNavbar, setShowNavbar] =
    useState(true);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [indicatorStyle, setIndicatorStyle] =
    useState({
      left: 0,
      width: 0,
    });

  const navRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const itemRefs = useRef<
    (HTMLAnchorElement | null)[]
  >([]);

  const lastScrollY = useRef(0);

  const moveIndicator = (
    index: number
  ) => {
    const item =
      itemRefs.current[index];

    const nav =
      navRef.current;

    if (!item || !nav) return;

    const navRect =
      nav.getBoundingClientRect();

    const itemRect =
      item.getBoundingClientRect();

    setIndicatorStyle({
      left:
        itemRect.left -
        navRect.left,
      width: itemRect.width,
    });
  };

  // Initial indicator
  useEffect(() => {
    moveIndicator(activeItem);
  }, []);

  // Resize safety
  useEffect(() => {
    const handleResize = () => {
      moveIndicator(activeItem);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, [activeItem]);

  // Scroll logic & active section detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.scrollY;

      // Shrink navbar state
      setIsScrolled(
        currentScrollY > 50
      );

      // Always visible at top
      if (currentScrollY < 50) {
        setShowNavbar(true);
      }
      // Hide on scroll down
      else if (
        currentScrollY >
        lastScrollY.current
      ) {
        setShowNavbar(false);
      }
      // Show on scroll up
      else {
        setShowNavbar(true);
      }

      lastScrollY.current =
        currentScrollY;

      // Detect active section on scroll
      const sections = [
        { id: "home", index: 0 },
        { id: "projects", index: 1 },
        { id: "about", index: 2 },
        { id: "contact", index: 3 },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260) {
            setActiveItem((prev) => {
              if (prev !== sections[i].index) {
                moveIndicator(sections[i].index);
                return sections[i].index;
              }
              return prev;
            });
            break;
          }
        }
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const handleMouseEnter = (
    index: number
  ) => {
    setHoveredItem(index);
    moveIndicator(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    moveIndicator(activeItem);
  };

  const handleClick = (
    index: number,
    href?: string
  ) => {
    setActiveItem(index);
    moveIndicator(index);
    if (href && href.startsWith("#")) {
      const lenis = (window as unknown as { lenis?: { scrollTo: (target: string, opts: { duration: number; offset: number }) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(href, { duration: 1.2, offset: -40 });
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <motion.header
      animate={{
        y: showNavbar
          ? 0
          : -120,
        opacity:
          showNavbar ? 1 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <motion.div
        animate={{
          width: isScrolled
            ? "fit-content"
            : "100%",
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="mx-auto flex items-center justify-center sm:justify-between max-w-6xl"
      >
        {/* LEFT LOGO */}
        <motion.div 
          animate={{
            opacity:
              isScrolled
                ? 0
                : 1,
            x: isScrolled
              ? -40
              : 0,
            width:
              isScrolled
                ? 0
                : "auto",
          }}
          transition={{
            duration: 0.35,
          }}
          className="overflow-hidden hidden sm:block whitespace-nowrap"
        >
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center justify-center size-10 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm group-hover:border-emerald-400/50 transition-colors">
              <span className="font-calistoga text-lg font-bold tracking-wider text-white group-hover:text-emerald-400 transition-colors">
                TG
              </span>
            </div>
          </Link>
        </motion.div>

        {/* CENTER NAVBAR */}
        <motion.nav
          ref={navRef}
          onMouseLeave={
            handleMouseLeave
          }
          animate={{
            scale:
              isScrolled
                ? 0.94
                : 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="relative flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-md overflow-hidden"
        >
          {/* Moving indicator */}
          <motion.span
            className="absolute top-1 bottom-1 rounded-full bg-white"
            animate={{
              left:
                indicatorStyle.left,
              width:
                indicatorStyle.width,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />

          {navItems.map(
            (item, index) => {
              const isActive =
                activeItem ===
                index;

              const isHovered =
                hoveredItem ===
                index;

              return (
                <Link
                  key={
                    item.label
                  }
                  href={
                    item.href
                  }
                  ref={(el) => {
                    itemRefs.current[
                      index
                    ] = el;
                  }}
                  onMouseEnter={() =>
                    handleMouseEnter(
                      index
                    )
                  }
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      handleClick(index, item.href);
                    } else {
                      handleClick(index);
                    }
                  }}
                  className={`relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    isActive ||
                    isHovered
                      ? "text-black"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
          )}
        </motion.nav>

        {/* RIGHT BUTTON */}
        <motion.div
          animate={{
            opacity:
              isScrolled
                ? 0
                : 1,
            x: isScrolled
              ? 40
              : 0,
            width:
              isScrolled
                ? 0
                : "auto",
          }}
          transition={{
            duration: 0.35,
          }}
          className="overflow-hidden hidden sm:block whitespace-nowrap"
        >
          <CoolBeansButton href="#contact" label="Hire Me" className="text-white/80 text-[20px] border-white hover:text-black after:bg-white"/>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};
