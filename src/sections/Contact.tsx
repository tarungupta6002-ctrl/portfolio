"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import grainImage from "@/assets/images/grain.jpg";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

type Status = "idle" | "sending" | "sent" | "error";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ContactItem = {
  icon: React.ElementType;
  label: string;
  href: string | null;
};

export const ContactSection = () => {
  const { personal } = portfolioData;

  const contactItems: ContactItem[] = [
    {
      icon: Mail,
      label: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: personal.phone,
      href: `tel:${personal.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: MapPin,
      label: `${personal.location} (Open to Global Remote)`,
      href: null,
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      portfolioData.personal.web3formsKey;

    // If access key is configured, send via Web3Forms API
    if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Message from ${formData.name}`,
            from_name: "Portfolio Contact Form",
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus("sent");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 6000);
          return;
        } else {
          setStatus("error");
          setErrorMessage(
            data.message || "Failed to deliver. Please send directly via Gmail below."
          );
        }
      } catch {
        setStatus("error");
        setErrorMessage("Network issue. Please send directly via Gmail below.");
      }
    } else {
      // Direct mailto fallback if no access key configured yet
      const subject = encodeURIComponent(
        `Portfolio Message from ${formData.name || "Visitor"}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    `Portfolio Message from ${formData.name || "Visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20 px-5">
      <div className="container mx-auto lg:max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 relative">
          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none z-0"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />

          {/* ── LEFT: Contact info ── */}
          <div className="bg-gray-950 p-10 lg:p-14 relative z-10 flex flex-col justify-between">
            <div>
              {/* Label */}
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-emerald-300 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                Contact
              </p>

              {/* Heading */}
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-14">
                GET IN
                <br />
                TOUCH
              </h2>

              {/* Contact items with dividers */}
              <ul className="space-y-0">
                {contactItems.map(({ icon: Icon, label, href }, i) => (
                  <li
                    key={i}
                    className="border-t border-white/10 last:border-b last:border-white/10"
                  >
                    {href ? (
                      <a
                        href={href}
                        className="flex items-center gap-4 py-5 group"
                      >
                        <Icon className="size-4 text-emerald-300 shrink-0" />
                        <span className="text-white/60 text-sm group-hover:text-white transition-colors duration-200">
                          {label}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-5">
                        <Icon className="size-4 text-emerald-300 shrink-0" />
                        <span className="text-white/60 text-sm">{label}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/40">
              ⚡ Available for full-time roles & freelance opportunities. Direct
              responses within 24 hours.
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="bg-gray-900 p-10 lg:p-14 relative z-10 border-t lg:border-t-0 lg:border-l border-white/10">
            <h3 className="text-white font-semibold text-lg mb-2">
              Send Message
            </h3>
            <p className="text-white/40 text-xs mb-7">
              Messages are delivered directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-emerald-400/60 focus:bg-gray-800/80 transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  required
                  className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-emerald-400/60 focus:bg-gray-800/80 transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type Your Message..."
                  rows={5}
                  required
                  className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-emerald-400/60 focus:bg-gray-800/80 transition-all duration-200 resize-none"
                />
              </div>

              {/* Feedback status alerts */}
              {status === "sent" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>
                    Message delivered to Tarun's inbox! I'll get back to you shortly.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="size-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                  <div className="pt-1">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/30 font-medium transition-all duration-200"
                    >
                      <span>Open Pre-filled Email</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-1 cursor-pointer shadow-lg shadow-emerald-500/10"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Sending to Tarun's inbox...</span>
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle2 className="size-4" />
                    <span>Message Sent! ✓</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="size-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
