export default function StatPill({ stat, color, isLast }) {
  return (
    <div
      className={[
        "flex flex-col items-center gap-0.5 sm:gap-1",
        "py-3 px-2 xs:py-4 xs:px-3 sm:py-5 sm:px-4",
        "border-r border-b sm:border-b-0 border-slate-800",
      ].join(" ")}
      style={{
        borderRightColor: isLast ? "transparent" : undefined,
        minWidth: 0,
        flex: "1 1 0",
      }}
    >
      <span
        className="font-bold leading-none truncate"
        style={{
          color,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(1.25rem, 4vw, 2.5rem)",
        }}
      >
        {stat.value}
        {stat.suffix}
      </span>
      <span
        className="uppercase tracking-widest text-center text-slate-500 mt-0.5 sm:mt-1 leading-tight"
        style={{
          fontSize: "clamp(0.55rem, 1.5vw, 0.75rem)",
          whiteSpace: "normal",
          wordBreak: "break-word",
        }}
      >
        {stat.label}
      </span>
    </div>
  );
}
