export interface AnimalState {
  id: string;
  species: string;
  status: "HUNTING" | "RESTING" | "MIGRATING" | "FORAGING";
  health: number;
  heartRate: number;
  speed: number;
  image: string;
  coords: { x: number; y: number };
}

export interface EnvironmentState {
  temperature: number;
  humidity: number;
  windSpeed: number;
  weather: "CLEAR" | "RAIN" | "FOG" | "STORM";
  biodiversityScore: number;
}
