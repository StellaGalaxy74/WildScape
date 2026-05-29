/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { BackgroundSim } from "./components/BackgroundSim";
import { Header } from "./components/Header";
import { TrackingPanel } from "./components/TrackingPanel";
import { EnvironmentPanel } from "./components/EnvironmentPanel";
import { SimCameraOverlay } from "./components/SimCameraOverlay";
import forestBg from "./assets/images/forest_bg_1780067441452.png";
import type { AnimalState, EnvironmentState } from "./types";

import wolfBg from "./assets/images/animal_wolf_1780067474865.png";
import bearBg from "./assets/images/animal_bear_1780067490962.png";
import eagleBg from "./assets/images/animal_eagle_1780067512366.png";

const INITIAL_ANIMALS: AnimalState[] = [
  {
    id: "WLF-901",
    species: "Timber Wolf",
    status: "HUNTING",
    health: 98,
    heartRate: 110,
    speed: 24.5,
    image: wolfBg,
    coords: { x: 45.2, y: 12.1 },
  },
  {
    id: "URS-402",
    species: "Brown Bear",
    status: "RESTING",
    health: 85,
    heartRate: 45,
    speed: 0.0,
    image: bearBg,
    coords: { x: 23.4, y: 64.8 },
  },
  {
    id: "AQL-011",
    species: "Golden Eagle",
    status: "HUNTING",
    health: 100,
    heartRate: 180,
    speed: 85.2,
    image: eagleBg,
    coords: { x: 89.2, y: 44.5 },
  },
];

const INITIAL_ENV: EnvironmentState = {
  temperature: 14.5,
  humidity: 82,
  windSpeed: 12.4,
  weather: "FOG",
  biodiversityScore: 94,
};

export default function App() {
  const [animals, setAnimals] = useState<AnimalState[]>(INITIAL_ANIMALS);
  const [env, setEnv] = useState<EnvironmentState>(INITIAL_ENV);
  const [activeAnimalId, setActiveAnimalId] = useState<string>("WLF-901");

  // Simulation loop for slight data changes
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimals((prev) =>
        prev.map((animal) => ({
          ...animal,
          heartRate: animal.heartRate + (Math.random() * 4 - 2),
          speed: Math.max(0, animal.speed + (Math.random() * 2 - 1)),
        }))
      );
      setEnv((prev) => ({
        ...prev,
        temperature: prev.temperature + (Math.random() * 0.2 - 0.1),
        windSpeed: Math.max(0, prev.windSpeed + (Math.random() * 2 - 1)),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-slate-100 font-mono select-none">
      {/* Background Simulation Layer */}
      <BackgroundSim 
        imageSrc={forestBg} 
        activeAnimal={animals.find(a => a.id === activeAnimalId)} 
      />

      {/* Core UI Overlays */}
      <SimCameraOverlay />
      
      <div className="absolute inset-0 z-10 flex flex-col p-6 pointer-events-none">
        <Header env={env} />
        
        <div className="flex-1 flex justify-between items-start mt-6 w-full max-w-[1600px] mx-auto">
          <TrackingPanel 
            animals={animals}
            activeId={activeAnimalId}
            onSelect={(id) => setActiveAnimalId(id)}
          />
          <EnvironmentPanel env={env} />
        </div>
      </div>
    </div>
  );
}
