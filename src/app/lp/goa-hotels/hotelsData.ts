import hotelsJson from "./hotelsData.json";

export interface Hotel {
  id: string;
  name: string;
  location: string;
  subRegion: string;
  startingRate: number;
  description: string;
  phone: string;
  email: string;
  highlights: string[];
  images: string[];
  region: "North Goa" | "South Goa" | "Central Goa";
  type: "Luxury Resort" | "Heritage & Boutique" | "Premium" | "Private Villa" | "Standard" | "Basic";
  brand: "Taj (IHCL)" | "Brij Hotels" | "SeleQtions" | "amã Stays & Trails" | "Ginger" | "Others";
  tag: string;
  visitUrl?: string;
  gallery?: string[];
  googleRating?: string;
}

export const hotelsData: Hotel[] = hotelsJson as Hotel[];
