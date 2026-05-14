import { stats, STAT_COLORS } from "./Constants";
import Navbar from "./Navbar";
import StatPill from "./Statpill";
import TeamCarousel from "./Teamcarousel";

export default function OurTeam() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
      `}</style>

      <section
        className="relative overflow-hidden min-h-screen pt-28 pb-20 px-6"
        style={{ background: "#08111e", fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 z-0 opacity-60 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right,#0e1f35 1px,transparent 1px),linear-gradient(to bottom,#0e1f35 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            top: -120,
            left: -80,
            width: 420,
            height: 420,
            background:
              "radial-gradient(circle,rgba(0,170,255,0.09) 0%,transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto">
          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT */}
            <div data-aos="fade-right">
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-none text-slate-100"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Our
              </h2>
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-none mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "#00aaff",
                }}
              >
                Creative Team
              </h2>

              <p className="text-sm text-slate-500 leading-relaxed max-w-xl mb-4">
                We are a cross-disciplinary team of designers, strategists, and
                engineers united by a single purpose — building digital products
                that move people.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl mb-4">
                Each member brings deep craft expertise and a collaborative
                spirit, ensuring every project is executed with precision and
                delivered with pride.
              </p>

              {/* Origin story */}
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl mb-10">
                Born out of the{" "}
                <span className="text-slate-300 font-medium">
                  2022 pandemic
                </span>
                , our group of developers started freelancing when opportunities
                were scarce. Our earliest clients were students around{" "}
                <span className="text-slate-300 font-medium">Bacolod</span> —
                capstone projects and business portfolios for local
                entrepreneurs looking to build their presence online. Since
                then, we've grown into a trusted partner for businesses in the
                region, collaborating with other freelance companies here in
                Bacolod and working alongside virtual assistants on web app and
                mobile projects that go beyond borders.
              </p>

              {/* Stats */}
              <div
                className="flex w-full"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {stats.map((stat, i) => (
                  <StatPill
                    key={stat.label}
                    stat={stat}
                    color={STAT_COLORS[i]}
                    isLast={i === stats.length - 1}
                  />
                ))}
              </div>

              {/* CTA buttons */}
              <div
                className="mt-8 flex gap-4 flex-wrap"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button
                  className="px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm uppercase font-semibold tracking-widest transition-opacity hover:opacity-90"
                  style={{ background: "#00aaff", color: "#08111e" }}
                >
                  Meet the team
                </button>
                {/* <button className="px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:bg-slate-800 border border-slate-700 text-slate-400">
                  Connect us →
                </button> */}
              </div>
            </div>

            {/* RIGHT — carousel */}
            <div data-aos="fade-left" data-aos-delay="150">
              <TeamCarousel />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-20"
          style={{
            background: "linear-gradient(to bottom, transparent, #060e1a)",
          }}
        />
      </section>
    </>
  );
}
