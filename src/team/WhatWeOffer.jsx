import { useRef, useEffect, useState } from "react";

/* ── Tech logos as inline SVG-style text badges (no external images needed) ── */
const TECH_STACK = [
  { name: "Shopify", color: "#96bf48" },
  { name: "WordPress", color: "#21759b" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "React JS", color: "#61DAFB" },
  { name: "Node JS", color: "#68A063" },
  { name: "PHP", color: "#8892BE" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Expo", color: "#ffffff" },
  { name: "Figma", color: "#F24E1E" },
];

const SERVICES = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Website Maintenance",
    description:
      "We keep your site healthy, secure, and up-to-date. Regular updates, performance monitoring, content edits, and uptime checks — so you never have to worry about things breaking.",
    accent: "#00aaff",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Bug Fixes & Debugging",
    description:
      "Got something broken? We dig deep into your codebase to identify and resolve bugs — whether it's a UI glitch, a broken API, a logic error, or a performance bottleneck.",
    accent: "#D4537E",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Develop from Scratch",
    description:
      "Have an idea but nothing built yet? We architect and build your web or mobile app from the ground up — clean code, scalable structure, and a product you're proud to ship.",
    accent: "#1D9E75",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Figma to Functional Code",
    description:
      "Hand us your Figma file and we'll turn every frame, component, and interaction into pixel-perfect, production-ready code — React, React Native, or plain HTML/CSS.",
    accent: "#F24E1E",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Business Portfolio Sites",
    description:
      "First impressions matter. We design and build professional portfolio and company sites that showcase your brand, your work, and your story — built to impress clients and employers alike.",
    accent: "#BA7517",
  },
];

/* ── Marquee strip ── */
function Marquee() {
  // Duplicate for seamless loop
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div
      className="relative w-full overflow-hidden py-6"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div
        className="flex gap-10 w-max"
        style={{
          animation: "marquee 28s linear infinite",
        }}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 rounded-full border shrink-0 select-none"
            style={{
              borderColor: `${tech.color}30`,
              background: `${tech.color}08`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{
                background: tech.color,
                boxShadow: `0 0 6px ${tech.color}`,
              }}
            />
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{
                color: `${tech.color}cc`,
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ── Service card with hover reveal ── */
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-4 p-7 rounded-xl border cursor-default overflow-hidden transition-all duration-500"
      style={{
        borderColor: hovered ? `${service.accent}40` : "rgba(30,58,95,0.6)",
        background: hovered ? `${service.accent}0a` : "rgba(14,31,53,0.5)",
        boxShadow: hovered ? `0 0 32px ${service.accent}15` : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${
          index * 0.1
        }s, border-color 0.4s, background 0.4s, box-shadow 0.4s`,
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 h-px transition-all duration-500"
        style={{
          width: hovered ? "100%" : "0%",
          background: `linear-gradient(to right, ${service.accent}, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300"
        style={{
          color: service.accent,
          background: `${service.accent}15`,
        }}
      >
        {service.icon}
      </div>

      {/* Text */}
      <div>
        <h3
          className="text-lg font-bold uppercase tracking-wide text-slate-100 mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {service.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Bottom corner glow */}
      <div
        className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none transition-opacity duration-500 rounded-tl-full"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at bottom right, ${service.accent}20, transparent 70%)`,
        }}
      />
    </div>
  );
}

/* ── Main section ── */
export default function WhatWeOffer() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setTitleVisible(true);
      },
      { threshold: 0.2 }
    );
    if (titleRef.current) obs.observe(titleRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section
        className="relative overflow-hidden min-h-screen py-24 px-6"
        style={{ background: "#060e1a", fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right,#0e1f3522 1px,transparent 1px),linear-gradient(to bottom,#0e1f3522 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow top-right */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            top: -80,
            right: -80,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(0,170,255,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-screen-xl mx-auto">
          {/* Section header */}
          <div
            ref={titleRef}
            className="flex flex-col items-center text-center mb-6 transition-all duration-700"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "#00aaff" }} />
              <span
                className="text-xs uppercase tracking-widest font-medium"
                style={{ color: "#00aaff" }}
              >
                What We Offer
              </span>
              <div className="w-8 h-px" style={{ background: "#00aaff" }} />
            </div>

            <h2
              className="text-6xl font-bold uppercase leading-none text-slate-100"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our
            </h2>
            <h2
              className="text-6xl font-bold uppercase leading-none mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: "#00aaff",
              }}
            >
              Services
            </h2>
            <p className="text-sm text-slate-500 max-w-lg leading-relaxed">
              From idea to deployment — we build, fix, and maintain digital
              products that work. Here's what we bring to the table.
            </p>
          </div>

          {/* Marquee */}
          <div
            className="mb-16 transition-all duration-700 delay-200"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <Marquee />
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 flex flex-col items-center gap-4 transition-all duration-700"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "0.5s",
            }}
          >
            <p className="text-sm text-slate-500 tracking-wide">
              Have a project in mind? Let's talk.
            </p>
            <button
              className="px-12 py-4 text-sm uppercase font-semibold tracking-widest transition-opacity hover:opacity-80"
              style={{ background: "#00aaff", color: "#060e1a" }}
            >
              Connect with us →
            </button>
          </div>

          {/* Bottom rule */}
          <div
            className="mt-16 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(0,170,255,0.27), #1e3a5f, transparent)",
            }}
          />
        </div>
      </section>
    </>
  );
}
