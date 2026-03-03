import { Atmosphere } from "@/components/Atmosphere";

export default function Home() {
  return (
    <main className="h-dvh relative overflow-hidden">
      <Atmosphere />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="font-serif text-gold text-6xl font-black">
          Morning Sunrise
        </h1>
      </div>
    </main>
  );
}
