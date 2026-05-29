import { motion } from "motion/react";
import type { AnimalState } from "../types";
import { cn } from "../lib/utils";
import { Activity, HeartPulse, Zap } from "lucide-react";

interface TrackingPanelProps {
  animals: AnimalState[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function TrackingPanel({ animals, activeId, onSelect }: TrackingPanelProps) {
  return (
    <div className="w-[380px] flex flex-col gap-4 pointer-events-auto">
      <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-lg p-5 shadow-2xl relative overflow-hidden">
        {/* Holographic accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
        
        <h2 className="text-emerald-400 text-xs tracking-[0.2em] mb-4 flex items-center gap-2">
          <Zap size={14} /> LIVE BIOMETRICS
        </h2>

        <div className="flex flex-col gap-3">
          {animals.map((animal) => {
            const isActive = animal.id === activeId;
            return (
              <motion.div
                key={animal.id}
                layoutId={`animal-${animal.id}`}
                onClick={() => onSelect(animal.id)}
                className={cn(
                  "relative flex items-center gap-4 p-3 rounded-md cursor-pointer transition-colors border",
                  isActive 
                    ? "bg-white/10 border-emerald-500/50" 
                    : "bg-black/40 border-white/5 hover:bg-white/5"
                )}
              >
                <img 
                  src={animal.image} 
                  alt={animal.species}
                  className="w-16 h-16 object-cover rounded-md border border-white/20"
                  referrerPolicy="no-referrer"
                />
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm tracking-widest">{animal.species.toUpperCase()}</span>
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-sm tracking-wider",
                      animal.status === 'HUNTING' ? "bg-red-500/20 text-red-400" :
                      animal.status === 'RESTING' ? "bg-blue-500/20 text-blue-400" :
                      "bg-emerald-500/20 text-emerald-400"
                    )}>
                      {animal.status}
                    </span>
                  </div>
                  
                  <div className="text-[10px] text-white/50 tracking-widest mb-2 font-mono">
                    ID: {animal.id}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div className="flex items-center gap-1 text-emerald-400">
                      <HeartPulse size={12} className={animal.status === 'HUNTING' ? "animate-pulse text-red-400" : ""} />
                      {Math.round(animal.heartRate)} BPM
                    </div>
                    <div className="flex items-center gap-1 text-blue-400">
                      <Activity size={12} />
                      {animal.speed.toFixed(1)} KM/H
                    </div>
                  </div>
                </div>

                {/* Tracking Reticle Top Right */}
                {isActive && (
                  <div className="absolute top-2 right-2 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[8px] text-emerald-500 tracking-widest font-mono">TRACKING</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Active subject deep dive */}
      <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-lg p-5 shadow-2xl">
         <h2 className="text-white/40 text-xs tracking-[0.2em] mb-4">SUBJECT KINEMATICS</h2>
         <div className="h-24 w-full flex items-end gap-1 pb-2">
            {[...Array(24)].map((_, i) => (
              <motion.div 
                key={i}
                className="flex-1 bg-emerald-500/20"
                animate={{
                  height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
         </div>
      </div>
    </div>
  );
}
