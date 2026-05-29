import { motion } from "motion/react";
import type { AnimalState } from "../types";

interface BackgroundSimProps {
  imageSrc: string;
  activeAnimal?: AnimalState;
}

export function BackgroundSim({ imageSrc, activeAnimal }: BackgroundSimProps) {
  return (
    <div className="absolute inset-0 z-0">
      <motion.img
        src={imageSrc}
        alt="Forest Ecosystem"
        className="object-cover w-full h-full opacity-80"
        referrerPolicy="no-referrer"
        animate={{
          scale: [1.02, 1.05, 1.02],
          x: [0, -10, 0],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Heavy vignette and atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
      
      {/* Noise texture overlay for camera feel (CSS based) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
