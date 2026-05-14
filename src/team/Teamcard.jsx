import SocialIcon from "./Socialicon";

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function TeamCard({ member, visible }) {
  return (
    <div
      className="flex flex-col items-center gap-6 p-10 rounded-xl border transition-all duration-700 ease-in-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(24px) scale(0.97)",
        background: "rgba(14,31,53,0.7)",
        borderColor: "rgba(0,170,255,0.12)",
        boxShadow: visible ? "0 0 40px rgba(0,170,255,0.07)" : "none",
        pointerEvents: visible ? "auto" : "none",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Avatar */}
      <div
        className="relative w-24 h-24 rounded-full overflow-hidden shrink-0"
        style={{ outline: "2px solid rgba(0,170,255,0.25)" }}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-3xl font-bold"
            style={{ background: "#0e1f35", color: "#00aaff" }}
          >
            {initials(member.name)}
          </div>
        )}
      </div>

      {/* Name & role */}
      <div className="text-center">
        <p
          className="text-lg font-bold uppercase text-slate-100"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          {member.name}
        </p>
        <p
          className="text-xs uppercase tracking-widest font-medium mt-1"
          style={{ color: "#00aaff" }}
        >
          {member.role}
        </p>
      </div>

      {/* Divider */}
      <div className="w-8 h-px" style={{ background: "rgba(0,170,255,0.4)" }} />

      {/* Socials */}
      <div className="flex gap-3">
        {Object.entries(member.social).map(([type, href]) => (
          <a
            key={type}
            href={href}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            style={{ color: "#00aaff", background: "rgba(0,170,255,0.08)" }}
          >
            <SocialIcon type={type} />
          </a>
        ))}
      </div>
    </div>
  );
}
