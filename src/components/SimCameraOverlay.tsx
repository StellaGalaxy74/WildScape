import { motion } from "motion/react";
import { Maximize, Target, Focus } from "lucide-react";

export function SimCameraOverlay() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Reticle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-30">
        <Target size={300} strokeWidth={0.5} className="text-emerald-500 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-64 h-64 border border-emerald-500/20 rounded-full" />
        <Focus size={48} strokeWidth={1} className="absolute text-emerald-400" />
      </div>

      {/* Camera Corners */}
      <div className="absolute top-8 left-8 border-t-2 border-l-2 border-white/30 w-16 h-16" />
      <div className="absolute top-8 right-8 border-t-2 border-r-2 border-white/30 w-16 h-16" />
      <div className="absolute bottom-8 left-8 border-b-2 border-l-2 border-white/30 w-16 h-16" />
      <div className="absolute bottom-8 right-8 border-b-2 border-r-2 border-white/30 w-16 h-16" />

      {/* Screen Metadata */}
      <div className="absolute bottom-12 right-12 text-right">
        <div className="text-white/30 font-mono text-xs tracking-widest leading-relaxed">
          <p>LENS: 400MM F/2.8 IS III USM</p>
          <p>AF STATUS: LOCKED</p>
          <p>EXP: MANUAL</p>
          <p>ISO: 1600</p>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-12">
        <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold tracking-widest text-sm">
           <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
           RECORDING
        </div>
        <div className="text-white/30 font-mono text-xs tracking-widest leading-relaxed">
          <p>BUFFER: 98%</p>
          <p>DB: CONNECTED</p>
          <p>UPLINK: 4.2 GBPS</p>
        </div>
      </div>
    </div>
  );
}
