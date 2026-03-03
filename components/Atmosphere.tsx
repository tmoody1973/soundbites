export function Atmosphere() {
  return (
    <>
      {/* Radial gradient atmosphere */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 120% 60% at 50% 100%, rgba(212,168,83,0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 80% 40% at 30% 80%, rgba(194,118,46,0.06) 0%, transparent 60%)",
            "linear-gradient(180deg, #1A1612 0%, #1E1914 100%)",
          ].join(", "),
        }}
      />
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
    </>
  );
}
