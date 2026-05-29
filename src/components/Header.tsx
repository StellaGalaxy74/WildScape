import { CloudFog, MapPin, Activity } from "lucide-react";
import type { EnvironmentState } from "../types";

export function Header({ env }: { env: EnvironmentState }) {
  // Use a simulated live time
  const timeString = new Date().toISOString().split("T")[1].substring(0, 12);

  return (
    <header className="w-full flex items-center justify-between pointer-events-auto backdrop-blur-md bg-black/40 border border-white/10 rounded-lg p-4 shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
        <h1 className="text-xl font-bold tracking-[0.2em] text-emerald-500">
          WILDSCAPE
          <span className="text-white/50 text-sm ml-2 font-normal">
            // ECOSYSTEM GENESIS
          </span>
        </h1>
      </div>

      <div className="flex items-center gap-8 text-sm">
        <div className="flex flex-col items-end">
          <span className="text-white/40 text-xs tracking-widest">COORDINATES</span>
          <span className="font-mono text-emerald-400 flex items-center gap-1">
            <MapPin size={14} /> 48.7766° N, 121.8153° W
          </span>
        </div>
        
        <div className="flex flex-col items-end">
          <span className="text-white/40 text-xs tracking-widest">ATMOSPHERE</span>
          <span className="font-mono text-blue-400 flex items-center gap-1">
            <CloudFog size={14} /> {env.weather} / {env.temperature.toFixed(1)}°C
          </span>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-white/40 text-xs tracking-widest">SYS. TIME [UTC]</span>
          <span className="font-mono flex items-center gap-1 text-white">
            <Activity size={14} className="text-emerald-500" /> {timeString}
          </span>
        </div>
      </div>
    </header>
  );
}
