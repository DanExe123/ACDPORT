import { useState, useEffect } from "react";
import { NAV_ITEMS } from "./Constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-blur { backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
        .mobile-menu { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
        .mobile-menu.open { max-height: 400px; }
      `}</style>

      <header
        className="nav-blur fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,17,30,0.92)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(30,58,95,0.5)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center">
          {/* Label – left */}
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-px" style={{ background: "#00aaff" }} />
            <span
              className="text-xs uppercase tracking-widest font-medium"
              style={{ color: "#00aaff" }}
            >
              Our Team
            </span>
          </div>

          {/* Nav – center (desktop only) */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                className="group relative text-xs uppercase tracking-widest text-slate-500 transition-colors duration-300 hover:text-sky-400 flex items-center h-6"
              >
                {item}
                <span
                  className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-300 group-hover:w-full"
                  style={{ background: "#00aaff" }}
                />
              </button>
            ))}
          </nav>

          {/* Spacer – right (desktop only) */}
          <div className="flex-1 hidden md:block" />

          {/* Hamburger – mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 ml-auto"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: "24px",
                background: "#00aaff",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: "16px",
                background: "#00aaff",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: "24px",
                background: "#00aaff",
                transform: menuOpen
                  ? "translateY(-6px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`mobile-menu md:hidden ${menuOpen ? "open" : ""}`}
          style={{
            background: "rgba(8,17,30,0.97)",
            borderTop: "1px solid rgba(30,58,95,0.4)",
          }}
        >
          <nav className="flex flex-col px-6 py-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => setMenuOpen(false)}
                className="text-left text-xs uppercase tracking-widest text-slate-400 hover:text-sky-400 transition-colors duration-200 py-3 border-b"
                style={{ borderColor: "rgba(30,58,95,0.35)" }}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
