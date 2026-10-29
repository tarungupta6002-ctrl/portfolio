"use client";

import React from "react";

export default function CoolBeansButton({
  label = 'hover me',
  href = '#',
  onClick,
  className = "text-white/80 text-3xl border-white hover:text-black after:bg-white"
}: {
  label?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const lenis = (window as unknown as { lenis?: { scrollTo: (target: string, opts: { duration: number; offset: number }) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(href, { duration: 1.2, offset: -40 });
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{ fontFamily: "'Roboto', sans-serif", willChange: 'transform' }}
      className={`
        ${className}
        relative z-0 inline-block overflow-hidden no-underline
        rounded-xl border-2 
        px-6 py-2
        font-thin
        transition-[transform,border-color,color] duration-400 ease-in-out
        hover:scale-105 hover:border-transparent 
        after:absolute after:left-0 after:top-0
        after:block after:h-full after:w-full
        after:content-['']
        after:rounded-xl
        after:-z-10
        after:-translate-x-full after:rotate-10
        after:origin-top-left
        after:transition-transform after:duration-400 after:ease-out
        hover:after:translate-x-0 hover:after:rotate-0
      `}
    >
      {label}
    </a>
  );
}
