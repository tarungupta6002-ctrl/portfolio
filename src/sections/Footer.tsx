"use client";

import { portfolioData } from "@/data/portfolioData";

export const Footer = () => {
  const { socials } = portfolioData;

  const socialLinks = [
    {
      title: "LinkedIn",
      href: socials.linkedin,
      color: "#0A66C2",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
          <path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z" />
        </svg>
      ),
    },
    {
      title: "X / Twitter",
      href: socials.twitter,
      color: "#000000",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-5 h-5 fill-current">
          <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
        </svg>
      ),
    },
    {
      title: "GitHub",
      href: socials.github,
      color: "#ffffff",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.008-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .social-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.5);
          transition: color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        .social-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--brand-color);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }
        .social-link:hover::before {
          opacity: 0.18;
        }
        .social-link:hover {
          color: var(--brand-color);
          border-color: var(--brand-color);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px -4px var(--brand-color-shadow);
        }
        .social-link svg {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <footer className="relative overflow-x-hidden p max-w-5xl mx-auto container py-16 pt-12 lg:py-24 lg:pt-20 px-5">
        {/* glow */}
        <div
          style={{
            maskImage: "radial-gradient(50% 50% at bottom center, black, transparent)",
            WebkitMaskImage: "radial-gradient(50% 50% at bottom center, black, transparent)",
          }}
          className="absolute h-40 w-full max-w-5xl bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/20 pointer-events-none"
        />

        <div>
          <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* copyright */}
            <p className="text-white/40 text-sm tracking-wide">
              &copy; 2026. All rights reserved.
            </p>

            {/* socials */}
            <ul className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.title}
                    className="social-link"
                    style={{
                      "--brand-color": item.color,
                      "--brand-color-shadow": item.color + "55",
                    } as React.CSSProperties}
                    title={item.title}
                  >
                    {item.svg}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => {
            const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, opts: { duration: number }) => void } }).lenis;
            if (lenis) {
              lenis.scrollTo(0, { duration: 1.2 });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white/50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-emerald-400/20 hover:border-emerald-400/50 hover:text-emerald-400 hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(52,211,153,0.4)] cursor-pointer"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </footer>
    </>
  );
};
