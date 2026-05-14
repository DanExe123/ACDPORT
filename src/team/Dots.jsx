export default function Dots({ total, active, onSelect }) {
  return (
    <div className="flex gap-2 justify-center mt-6">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className="rounded-full transition-all duration-300"
          style={{
            width: i === active ? 24 : 8,
            height: 8,
            background: i === active ? "#00aaff" : "rgba(0,170,255,0.25)",
          }}
        />
      ))}
    </div>
  );
}
