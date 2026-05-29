import type { EnvironmentState } from "../types";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import minimapBg from "../assets/images/wildscape_minimap_1780067458519.png";
import { Radar } from "lucide-react";

interface EnvironmentPanelProps {
  env: EnvironmentState;
}

// Mock historical data for the chart
const mockData = Array.from({ length: 20 }).map((_, i) => ({
  time: `${i}:00`,
  score: 80 + Math.random() * 20,
}));

export function EnvironmentPanel({ env }: EnvironmentPanelProps) {
  return (
    <div className="w-[380px] flex flex-col gap-4 pointer-events-auto">
      {/* Holographic Minimap */}
      <div className="backdrop-blur-md bg-black/40 border border-emerald-500/20 rounded-lg p-2 shadow-2xl relative overflow-hidden group">
        <div className="relative w-full aspect-square rounded overflow-hidden border border-white/5">
          <img 
            src={minimapBg} 
            alt="Thermal Radar Minimap" 
            className="w-full h-full object-cover opacity-80 mix-blend-screen mix-blend-lighten"
            referrerPolicy="no-referrer"
          />
          {/* Radar Sweep Effect */}
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(16,185,129,0.3)_360deg)] opacity-50 animate-[spin_4s_linear_infinite]" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <Radar size={16} className="text-emerald-400" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 bg-black/50 px-2 py-1 rounded">THERMAL RADAR</span>
          </div>
        </div>
      </div>

      {/* Data Visualization */}
      <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-lg p-5 shadow-2xl">
        <h2 className="text-emerald-400 text-xs tracking-[0.2em] mb-4">BIODIVERSITY TREND</h2>
        
        <div className="flex justify-between items-end mb-4 font-mono">
           <div>
             <div className="text-4xl font-bold text-white">{env.biodiversityScore.toFixed(1)}</div>
             <div className="text-[10px] text-white/40 tracking-widest mt-1">CURRENT INDEX SCORE</div>
           </div>
           <div className="text-right">
             <div className="text-lg text-emerald-400">+2.4%</div>
             <div className="text-[10px] text-white/40 tracking-widest mt-1">SIM TREND</div>
           </div>
        </div>

        <div className="h-32 w-full mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', fontFamily: 'monospace' }}
              />
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke="#10b981" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorScore)" 
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
