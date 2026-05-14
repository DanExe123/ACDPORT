import { useState, useEffect } from "react";
import { teamMembers } from "./Constants";
import TeamCard from "./Teamcard";
import Dots from "./Dots";

export default function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  /* Auto-advance every 5 s with fade transition */
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % teamMembers.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function goTo(i) {
    if (i === activeIndex) return;
    setVisible(false);
    setTimeout(() => {
      setActiveIndex(i);
      setVisible(true);
    }, 400);
  }

  return (
    <div className="flex flex-col items-center">
      {/* Card */}
      <div className="w-full max-w-sm">
        <TeamCard member={teamMembers[activeIndex]} visible={visible} />
      </div>

      {/* Dot indicators */}
      <Dots total={teamMembers.length} active={activeIndex} onSelect={goTo} />

      {/* Name strip */}
      <div className="flex gap-6 mt-4 justify-center">
        {teamMembers.map((m, i) => (
          <button
            key={m.name}
            onClick={() => goTo(i)}
            className="text-xs uppercase tracking-widest transition-all duration-300"
            style={{
              color: i === activeIndex ? "#00aaff" : "rgba(90,122,154,0.6)",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            {m.name.split(" ")[0]}
          </button>
        ))}
      </div>
    </div>
  );
}
