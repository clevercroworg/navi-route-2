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
  type: "Luxury Resort" | "Heritage & Boutique" | "Modern Premium" | "Private Villa";
  brand: "Taj (IHCL)" | "Brij Hotels" | "SeleQtions" | "amã Stays & Trails" | "Ginger" | "Others";
  tag: string;
  visitUrl?: string;
}

export const hotelsData: Hotel[] = [
  {
    id: "taj-cidade-de-goa-heritage",
    name: "Taj Cidade de Goa Heritage, Goa",
    location: "Vainguinim Beach, Goa, 403004, India",
    subRegion: "Vainguinim Beach",
    startingRate: 7999,
    description: "Experience Goa's heritage at Taj Cidade de Goa, where Portuguese architecture, historic charm, and authentic Goan culture blend for a unique coastal getaway.",
    phone: "+91 83266 59234",
    email: "reservations.tcdgheritage@tajhotels.com",
    highlights: [
      "Oceanic Views",
      "Portuguese Colonial Charm",
      "Seafood Gastronomic Delights",
      "Heritage Spa Experience"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.07 AM.jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM.jpeg"
    ],
    region: "Central Goa",
    type: "Heritage & Boutique",
    brand: "Taj (IHCL)",
    tag: "Historic Portuguese Charm",
    visitUrl: "https://www.tajhotels.com/en-in/taj/taj-cidade-de-goa-heritage/"
  },
  {
    id: "taj-cidade-de-goa-horizon",
    name: "Taj Cidade de Goa Horizon, Goa",
    location: "Vainguinim Plateau, Dona Paula, Goa, 403004, India",
    subRegion: "Dona Paula",
    startingRate: 10000,
    description: "Elevate your coastal experience at Taj Cidade de Goa Horizon, where modern design meets beachfront bliss, offering panoramic views, seaside wellness, and exceptional hospitality.",
    phone: "+91 8322454545",
    email: "reservations.tcdghorizon@tajhotels.com",
    highlights: [
      "Seaside Tropical Paradise",
      "Modern Beachfront Luxury",
      "Goan Culinary Treats",
      "Coastal Wellness Spa"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (2).jpeg"
    ],
    region: "Central Goa",
    type: "Modern Premium",
    brand: "Taj (IHCL)",
    tag: "Panoramic Ocean Views",
    visitUrl: "https://www.tajhotels.com/en-in/taj/taj-cidade-de-goa-horizon/"
  },
  {
    id: "taj-exotica-resort-spa",
    name: "Taj Exotica Resort & Spa, Goa",
    location: "Calwaddo, Benaulim, Salcete, Benaulim, Goa, 403716, India",
    subRegion: "Benaulim",
    startingRate: 16200,
    description: "Discover a tropical haven in Goa, where this beachfront resort blends Goan-Portuguese architecture with lush gardens, serene spas, and panoramic ocean views.",
    phone: "+91 83266 83333",
    email: "exotica.goa@tajhotels.com",
    highlights: [
      "Tropical Beachfront Luxury",
      "Portuguese-Style Elegance",
      "Seafood Culinary Treats",
      "Holistic Spa Retreat"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (3).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM.jpeg"
    ],
    region: "South Goa",
    type: "Luxury Resort",
    brand: "Taj (IHCL)",
    tag: "Ultimate Beachfront Luxury",
    visitUrl: "https://www.tajhotels.com/en-in/taj/taj-exotica-goa/"
  },
  {
    id: "taj-fort-aguada-resort-spa",
    name: "Taj Fort Aguada Resort & Spa, Goa",
    location: "Sinquerim, Candolim, Bardez, Candolim, Goa, 403515, India",
    subRegion: "Candolim",
    startingRate: 11700,
    description: "Experience the charm of Goa's coastline at this iconic resort, offering serene beaches, luxurious spa treatments, and a blend of modern comforts with colonial heritage.",
    phone: "+91 83266 45858",
    email: "fortaguada.goa@tajhotels.com",
    highlights: [
      "Sea Fortress Views",
      "Rustic Portuguese Charm",
      "Exotic Goan Dishes",
      "Seaside Wellness Haven"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (2).jpeg"
    ],
    region: "North Goa",
    type: "Luxury Resort",
    brand: "Taj (IHCL)",
    tag: "Historic Coastal Fortress",
    visitUrl: "https://www.tajhotels.com/en-in/taj/taj-fort-aguada-goa/"
  },
  {
    id: "taj-holiday-village-resort-spa",
    name: "Taj Holiday Village Resort & Spa, Goa",
    location: "Sinquerim, Candolim, Goa, 403515, India",
    subRegion: "Candolim",
    startingRate: 13500,
    description: "Embrace the essence of a Goan village at Taj Holiday Village Resort & Spa, Goa, where lush gardens, private cottages, and vibrant dining options create an unforgettable family getaway.",
    phone: "+91 83266 45858",
    email: "holidayvillage.goa@tajhotels.com",
    highlights: [
      "Sandy Beachside Bliss",
      "Tropical Village Feel",
      "Goan-Portuguese Gastronomy",
      "Recreational Spa Delights"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (3).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM.jpeg"
    ],
    region: "North Goa",
    type: "Luxury Resort",
    brand: "Taj (IHCL)",
    tag: "Traditional Goan Cottages",
    visitUrl: "https://www.tajhotels.com/en-in/taj/taj-holiday-village-goa/"
  },
  {
    id: "brij-casa-susegad",
    name: "Brij Casa Susegad, Goa",
    location: "Orgao, Loutolim, Loutolim, Goa, 403718, India",
    subRegion: "Loutolim",
    startingRate: 14000,
    description: "Brij Casa Susegad is a serene Goan retreat in Loutolim's forested heart. This seven-room Portuguese villa embodies the unhurried susegad spirit with lush greenery and heritage service.",
    phone: "+91 80690 57710",
    email: "reservations@brijhotels.com",
    highlights: [
      "An Indo-Portuguese Villa",
      "Quintessential Unhurried Goan Style",
      "Surrounded by Lush Greenery",
      "Boutique Heritage Stay"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM.jpeg"
    ],
    region: "South Goa",
    type: "Heritage & Boutique",
    brand: "Brij Hotels",
    tag: "Indo-Portuguese Villa",
    visitUrl: "https://www.brijhotels.com/brij-casa-susegad-goa/"
  },
  {
    id: "brij-paraiso",
    name: "Brij Paraiso, North Goa",
    location: "House No. 7, 69 - A, Police Station Road, Calangute, Saligao, Goa, 403511, India",
    subRegion: "Saligao",
    startingRate: 9500,
    description: "Brij Paraiso in Saligao is a serene Goan retreat, tucked amid forested calm yet close to the region's vibrant energy. Savor local Goan delicacies in an Indo-Portuguese villa setting.",
    phone: "+91 80690 57710",
    email: "reservations@brijhotels.com",
    highlights: [
      "Proximity to Calangute Beach",
      "Indo-Portuguese Villa",
      "Savor Local Goan Delicacies",
      "Quiet Garden Sanctuary"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (2).jpeg"
    ],
    region: "North Goa",
    type: "Heritage & Boutique",
    brand: "Brij Hotels",
    tag: "Tranquil Forest Sanctuary",
    visitUrl: "https://www.brijhotels.com/"
  },
  {
    id: "la-estoria-goa",
    name: "La Estoria, Goa - IHCL SeleQtions",
    location: "Bamonvaddo, Candolim, Goa, 403515, India",
    subRegion: "Candolim",
    startingRate: 4800,
    description: "Goa, a coastal paradise, offers stunning beaches, vibrant culture, and rich heritage. La Estoria, Goa- IHCL SeleQtions, blends Portuguese design and boutique comfort.",
    phone: "+91 83266 50000",
    email: "book.laestoria@seleqtionshotels.com",
    highlights: [
      "Vibrant Local Culture",
      "Portuguese Inspired Interiors",
      "SeleQtions Signature Dining",
      "Close to Beaches"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (3).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM.jpeg"
    ],
    region: "North Goa",
    type: "Heritage & Boutique",
    brand: "SeleQtions",
    tag: "Charming Boutique Vibe",
    visitUrl: "https://www.seleqtionshotels.com/en-in/la-estoria-goa/"
  },
  {
    id: "the-yellow-house-goa",
    name: "The Yellow House, Goa - IHCL SeleQtions",
    location: "House 1241, Gaonwadi, Anjuna, Goa, 403509, India",
    subRegion: "Anjuna",
    startingRate: 5599,
    description: "Explore The Yellow House, Anjuna, an IHCL SeleQtions hotel. A blend of vibrant elegance and coastal charm, it offers storied stays on Goa's sun-kissed shores.",
    phone: "+91 79726 25389",
    email: "book.yellowhouse@seleqtionshotels.com",
    highlights: [
      "Vibrant Anjuna Coastal Vibe",
      "Storied Heritage Manor House",
      "Yellow House Fine Dining",
      "Bespoke Cultural Concierge"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM.jpeg"
    ],
    region: "North Goa",
    type: "Heritage & Boutique",
    brand: "SeleQtions",
    tag: "Storied Heritage Manor",
    visitUrl: "https://www.seleqtionshotels.com/en-in/the-yellow-house-goa/"
  },
  {
    id: "gateway-goa-palolem",
    name: "Gateway Goa Palolem",
    location: "31 - I/A, Tarir, Palolem,, Canacona, Goa, 403702, India",
    subRegion: "Palolem",
    startingRate: 4400,
    description: "Gateway Goa, Palolem is your gateway to the carefree charm of South Goa. Escape to a coastal paradise where golden beaches meet lush landscapes and vibrant culture.",
    phone: "+91 83235 08900",
    email: "book.gatewaypalolem@gateway-hotels.com",
    highlights: [
      "Pristine Palolem Beaches",
      "Verdant Greenery and River Views",
      "Goan Coastal Cuisine",
      "Serene Backwater Cruises"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.07 AM.jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM.jpeg"
    ],
    region: "South Goa",
    type: "Luxury Resort",
    brand: "Others",
    tag: "South Goan Backwaters",
    visitUrl: "https://www.gateway-hotels.com/"
  },
  {
    id: "vivanta-goa-miramar",
    name: "Vivanta Goa, Miramar",
    location: "Near Audi showroom, Dr. Jack de Sequeira road, Caranzalem, Panaji, Goa, 403002, India",
    subRegion: "Miramar, Panaji",
    startingRate: 5599,
    description: "Stay close to the Arabian shoreline at Vivanta Goa, Miramar, where every moment feels like a holiday. This stylish city resort offers clean, modern designs and seaside relaxation.",
    phone: "+91 8323500700",
    email: "bookvivanta.miramar@tajhotels.com",
    highlights: [
      "Miramar Shoreline Proximity",
      "Arabian Sea Breezes",
      "Elegant Rooftop Pool",
      "Vivanta Signature Hospitality"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (2).jpeg"
    ],
    region: "Central Goa",
    type: "Modern Premium",
    brand: "Taj (IHCL)",
    tag: "Sun-Kissed Shoreline",
    visitUrl: "https://www.tajhotels.com/en-in/vivanta/vivanta-goa-miramar/"
  },
  {
    id: "vivanta-goa-panaji",
    name: "Vivanta Goa, Panaji",
    location: "OFF DB Bandodkar Road, Panaji, Goa, 403001, India",
    subRegion: "Panaji City",
    startingRate: 6640,
    description: "Feel Goa's electric pulse at Vivanta Panaji, where city life and laid-back coastal vibes blend seamlessly. Perfect for corporate travellers and vacationers seeking urban connectivity.",
    phone: "+91 8326633636",
    email: "bookvivanta.panaji@tajhotels.com",
    highlights: [
      "Heart of Panaji City",
      "Laid-Back Coastal Vibe",
      "Fine Dining & Vibrant Bars",
      "Exceptional Business Facilities"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (2).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (1).jpeg"
    ],
    region: "Central Goa",
    type: "Modern Premium",
    brand: "Taj (IHCL)",
    tag: "Urban Coastal Energy",
    visitUrl: "https://www.tajhotels.com/en-in/vivanta/vivanta-goa-panaji/"
  },
  {
    id: "ginger-goa-candolim",
    name: "Ginger Goa, Candolim",
    location: "195/23-A/B, Candolim Main Road, Near Lawande Super Market, Anna Waddo, Candolim, Saligao, North Goa, Goa, 403516, India",
    subRegion: "Candolim",
    startingRate: 3059,
    description: "Welcome to Ginger Goa Candolim, a Lean Luxe hotel just minutes from Candolim and Moterio Beach. Enjoy 262 stylish rooms, high-speed Wi-Fi, and a lively vibe.",
    phone: "+91 83269 12600",
    email: "reservations@gingerhotels.com",
    highlights: [
      "Lean Luxe Experience",
      "Minutes from Candolim Beach",
      "High Speed Complimentary Wi-Fi",
      "Modern Stylish Rooms"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (3).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM.jpeg"
    ],
    region: "North Goa",
    type: "Modern Premium",
    brand: "Ginger",
    tag: "Lean Luxe Coastal Stay",
    visitUrl: "https://www.gingerhotels.com/ginger-goa-candolim"
  },
  {
    id: "ginger-goa-dona-paula",
    name: "Ginger Goa, Dona Paula",
    location: "Plot No. 12 & 13,, Dona Paula, Goa, 403004, India",
    subRegion: "Dona Paula",
    startingRate: 3167,
    description: "Immerse yourself in the relaxing ambiance of Dona Paula, Goa, with Ginger, ensuring a comfortable and well-appointed stay in this coastal paradise.",
    phone: "+91 83224 67000",
    email: "reservations@gingerhotels.com",
    highlights: [
      "Dona Paula Vantage Point",
      "Lean Luxe Comforts",
      "Coastal Vibe Location",
      "Well-Appointed Smart Rooms"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM.jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (3).jpeg"
    ],
    region: "Central Goa",
    type: "Modern Premium",
    brand: "Ginger",
    tag: "Relaxing Vantage Point",
    visitUrl: "https://www.gingerhotels.com/ginger-goa-dona-paula"
  },
  {
    id: "ginger-goa-madgaon",
    name: "Ginger Goa, Madgaon",
    location: "Opposite Madgaon Junction Railway Station, Aquem, Margao, Goa, 403601, India",
    subRegion: "Margao / Madgaon",
    startingRate: 2287,
    description: "Enjoy the laid-back charm of Madgaon, Goa, with Ginger, ensuring a comfortable and well-appointed stay in South Goa close to railway transit links.",
    phone: "+91 83227 29333",
    email: "reservations@gingerhotels.com",
    highlights: [
      "Opposite Madgaon Station",
      "Transit-Friendly Location",
      "Comfortable Smart Rooms",
      "Lean Luxe Dining"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (2).jpeg"
    ],
    region: "South Goa",
    type: "Modern Premium",
    brand: "Ginger",
    tag: "Laid-Back Transit Spot",
    visitUrl: "https://www.gingerhotels.com/ginger-goa-margao"
  },
  {
    id: "ginger-goa-panjim",
    name: "Ginger Goa, Panjim",
    location: "SGO Complex, EDC, Pato, Near Passport Office, Panaji, Goa, 403001, India",
    subRegion: "Panaji City",
    startingRate: 3519,
    description: "Ginger Goa, Panjim is a lean luxe hotel in Panjim, Goa, offering a smart, comfortable stay with 135 contemporary rooms. Perfectly located in the city center.",
    phone: "+91 83266 43333",
    email: "reservations@gingerhotels.com",
    highlights: [
      "Lean Luxe Business Hotel",
      "Near Panaji Passport Office",
      "Contemporary Smart Rooms",
      "Excellent Connectivity"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (2).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (1).jpeg"
    ],
    region: "Central Goa",
    type: "Modern Premium",
    brand: "Ginger",
    tag: "City-Center Ease",
    visitUrl: "https://www.gingerhotels.com/ginger-goa-panjim"
  },
  {
    id: "70-vale-goa-ama-stays-trails",
    name: "70 Vale, Goa - amã Stays & Trails",
    location: "70 Vale, Near El Shaddai Bus Stop, Assagao, Goa, 403507, India",
    subRegion: "Assagao",
    startingRate: 24000,
    description: "Experience understated elegance at 70 Vale Goa, an amã Stays & Trails villa in Goa. This spacious 4-bedroom villa offers high wooden ceilings and a large swimming pool.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Spacious 4-Bedroom Villa",
      "High Wooden Ceilings",
      "Private Swimming Pool",
      "amã Signature Concierge Service"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (3).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM.jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Elegant Private Estate",
    visitUrl: "https://www.amastaysandtrails.com/en-in/villas/70-vale-goa/"
  },
  {
    id: "aguada-villas-goa-ama-stays-trails",
    name: "Aguada Villas, Goa - amã Stays & Trails",
    location: "Opposite Taj Fort Aguada, Beach Sinquerim, Candolim, Goa, 403515, India",
    subRegion: "Candolim",
    startingRate: 32000,
    description: "Experience modern luxury and stunning sea views at Aguada Sea Villa in Goa. This private villa provides an ideal setting for relaxation, exploration, and intimate family stays.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Stunning Sea Views",
      "Opposite Taj Fort Aguada",
      "Private Garden & Plunge Pool",
      "Luxury Village Vibe Villa"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM.jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (3).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Bespoke Sea-View Haven",
    visitUrl: "https://www.amastaysandtrails.com/en-in/villas/aguada-villas-goa/"
  },
  {
    id: "ambalama-villas-goa-ama-stays-trails",
    name: "Ambalama Villas, Goa - amã Stays & Trails",
    location: "Sonesta Inns pvt Ltd, Ambalama Villa, H.No 614/13, Badem, Assagao, Bardez, Assagao, Goa, 403507, India",
    subRegion: "Assagao",
    startingRate: 28000,
    description: "Ambalama is a spacious, tropical-modern retreat among villas in Assagao, Goa. With 3 distinct villas and 13 bedrooms, it offers a private pool, lush landscaping, and exceptional service.",
    phone: "+91 90498 46476",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Spacious Tropical-Modern Retreat",
      "3 Villas with 13 Bedrooms",
      "Private Lagoon Pool",
      "Lush Landscaped Grounds"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM.jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Spacious Tropical Oasis",
    visitUrl: "https://www.amastaysandtrails.com/en-in/villas/ambalama-villas-goa/"
  },
  {
    id: "assa-360-goa-ama-stays-trails",
    name: "Assa 360, Goa - amã Stays & Trails",
    location: "H N 1457/3, Survey number 550/1, Aguada Siolim Road, KB General Store, Vagator, Anjuna, North Goa, Assagao, Goa, 403509, India",
    subRegion: "Assagao / Vagator",
    startingRate: 26000,
    description: "AssA 360 is a stunning luxury villa in Goa, perfectly positioned between the serene, forested landscapes of Assagaon and the vibrant energy of Anjuna beach.",
    phone: "+91 96377 56761",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Perfect Assagaon-Anjuna Spot",
      "Stunning Architectural Design",
      "Lush Forested Backdrop",
      "Private Pool & Outdoor Deck"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM.jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM (1).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Modern Architectural Gem",
    visitUrl: "https://www.amastaysandtrails.com/en-in/villas/assa-360-goa/"
  },
  {
    id: "braganza-house-goa-ama-stays-trails",
    name: "Braganza House, Goa - amã Stays & Trails",
    location: "BRAGANZA House, H.no-519 (50A/5), Vaddy, Candolim, Goa, 403515, India",
    subRegion: "Candolim",
    startingRate: 35000,
    description: "Discover the serene charm of Braganza House Goa, where contemporary style meets Portuguese artistry. This homestay in Goa features four calm bedrooms and custom artistry.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Four Calm Bedrooms",
      "Contemporary Style",
      "Portuguese Artistry",
      "Lush Garden Settings"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM.jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM (1).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Contemporary Portuguese Art",
    visitUrl: "https://www.amastaysandtrails.com/en-in/villas/braganza-house-goa/"
  },
  {
    id: "calma-villa-ambalama-goa-ama-stays-trails",
    name: "Calma Villa, Ambalama, Goa - amã Stays & Trails",
    location: "Sonesta Inns pvt Ltd, Ambalama Villa, H.No 614/13, Badem, Assagao, Bardez, Assagao, Goa, 403507, India",
    subRegion: "Assagao",
    startingRate: 29500,
    description: "Calma Villa is a serene private pool villa in Goa located in Assagao, offering elegant interiors, tropical surroundings, and warm hospitality.",
    phone: "+91 90498 46476",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Private Swimming Pool",
      "Elegant Villa Interiors",
      "Tropical Surroundings",
      "Warm amã Hospitality"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (3).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM.jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Private Lagoon Retreat",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "cardozo-house-goa-ama-stays-trails",
    name: "Cardozo House, Goa - amã Stays & Trails",
    location: "House number 312, 28/4 bammon Vaddo, Candolim Bardez district, Panaji, Goa, 403515, India",
    subRegion: "Candolim",
    startingRate: 22500,
    description: "Cardozo House offers an exclusive blend of luxury and tranquility at this villa in Goa. Located near cultural landmarks and vibrant nightlife.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Exclusive Luxury & Tranquility",
      "Near Cultural Landmarks",
      "Minutes to Vibrant Nightlife",
      "Portuguese Architectural Style"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM.jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Vibrant Nightlife Escape",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "casa-aroma-assagao-goa-ama-stays-trails",
    name: "Casa Aroma, Assagao, Goa - amã Stays & Trails",
    location: "Ground floor, 463 Assagao anjuna, Calangute, Assagao, North Goa, Goa, 403509, India",
    subRegion: "Assagao",
    startingRate: 27000,
    description: "Casa Aroma in Assagao offers four en-suite suites, a private pool and lush gardens, and versatile dining spaces to gather or unwind. Ideal for families.",
    phone: "+91 90498 46476",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Four En-Suite Suites",
      "Private Pool",
      "Lush Landscaped Gardens",
      "Versatile Dining & Lounge"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM.jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (1).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Lush Cashew Sanctuary",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "chikoo-villa-goa-ama-stays-trails",
    name: "Chikoo Villa, Goa - amã Stays & Trails",
    location: "Casa Brance, Plot no.97/9, near Anjuna Post office/Tembi football ground, Anjuna, Bardez, Goa, 403001, India",
    subRegion: "Anjuna",
    startingRate: 31000,
    description: "Unwind at Chikoo Villa Goa in Anjuna, which combines century-old Portuguese charm with modern comforts. This villa features five bedrooms.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Century-Old Portuguese Charm",
      "Modern Comforts",
      "Five Large Bedrooms",
      "Near Anjuna Post Office"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM.jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Portuguese Charm Manor",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "eden-farms-goa-ama-stays-trails",
    name: "Eden Farms, Goa - amã Stays & Trails",
    location: "Survey No. 121/1-B, 122/1-B, 124/59-A, Ambaulim, Taluka Quepem, Goa, 403703, India",
    subRegion: "Quepem",
    startingRate: 18500,
    description: "Find tranquility at Eden Farms Cottages, offering luxurious private cottages in Goa. These amã Stays & Trails villas blend elegant comfort with a rural, scenic farm setting.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Tranquil Farm Setting",
      "Luxurious Private Cottages",
      "Elegant Comfort Blend",
      "Serene Swimming Pool"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (3).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM.jpeg"
    ],
    region: "South Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Rustic Scenic Tranquility",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "hacienda-de-bastora-goa-ama-stays-trails",
    name: "Hacienda De Bastora, Goa - amã Stays & Trails",
    location: "Survey No. 133/1-D & 133/1-B, House No. 29/29C, 29/30C & 29/31C, Xell Bastora Rd, Goa, 403507, India",
    subRegion: "Bastora",
    startingRate: 34000,
    description: "Retreat to Hacienda De Bastora, featuring five king-sized bedrooms with Wabi Sabi and Bauhinia suites. This villa offers a tranquil lagoon-like pool.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Five King-Sized Bedrooms",
      "Wabi Sabi & Bauhinia Suites",
      "Tranquil Lagoon-Like Pool",
      "Rustic Artistic Design"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (2).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (3).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Artistic Lagoon Sanctuary",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "imperial-villa-goa-ama-stays-trails",
    name: "Imperial Villa, Goa - amã Stays & Trails",
    location: "H. No. 431, Imperial Villa, St. Joaquim Road, Gogol, Margao, Goa, 403601, India",
    subRegion: "Margao",
    startingRate: 38000,
    description: "Imperial Villa is a 7-bedroom luxury villa in Goa set across serene environs of Gogol, Margao. With spacious lounges, a pool, spa rooms, and private estate services.",
    phone: "+91 96455 77291",
    email: "book@amastaysandtrails.com",
    highlights: [
      "7-Bedroom Estate",
      "Serene Gogol Environs",
      "Spacious Lounges & Pool",
      "In-House Spa Rooms"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.09 AM.jpeg"
    ],
    region: "South Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Spacious Margao Estate",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "mudita-estate-goa-ama-stays-trails",
    name: "Mudita Estate, Goa - amã Stays & Trails",
    location: "House No. 169/1, Mudita Estate, Bandekar Wada, Near Hanuman Mandir, Morjim, Goa, 403512, India",
    subRegion: "Morjim",
    startingRate: 30000,
    description: "Escape to Mudita Estate, a luxurious villa and homestay in Goa, where nature meets indulgence. Nestled amidst tropical landscapes and turquoise waters.",
    phone: "+91 90498 46476",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Morjim Beach Access",
      "Lush Tropical Landscapes",
      "Turquoise Plunge Pool",
      "Nature Meets Indulgence"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (3).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (2).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Morjim Beach Hideaway",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "palatium-villa-candolim-goa-ama-stays-trails",
    name: "Palatium Villa, Candolim, Goa - amã Stays & Trails",
    location: "1412, Villa 1, Villa 2, Villa 3, Survey No. 74/5, situated at Orda, Candolim, Bardez, North Goa, 403516, India",
    subRegion: "Candolim",
    startingRate: 36000,
    description: "Discover the charm of Palatium Villa, a cluster of 3 villas in Goa offering the perfect blend of coastal elegance and homely comfort with private swimming pools.",
    phone: "+91 90498 46476",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Cluster of 3 Private Villas",
      "Coastal Elegance",
      "Homely Comfort Blend",
      "Private Courtyard & Pool"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (2).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.08 AM (3).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Coastal Elegance Villa",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "palmeira-de-saligao-goa-ama-stays-trails",
    name: "Palmeira De Saligao, Goa - amã Stays & Trails",
    location: "Saligao, Goa, 403511, India",
    subRegion: "Saligao",
    startingRate: 28000,
    description: "Step into the past with modern comforts at Palmeira De Saligao. This four-bedroom villa accommodates up to eight adults, maintaining historical charm.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Step Into The Past",
      "Four Bedrooms for 8 Adults",
      "Historical Charm & Gardens",
      "Modern Premium Comforts"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM.jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Step into Heritage",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "palmeira-de-socorro-goa-ama-stays-trails",
    name: "Palmeira De Socorro, Goa - amã Stays & Trails",
    location: "Salvador Do Mundo, Aradi Socorro, Goa, 403203, India",
    subRegion: "Socorro",
    startingRate: 25000,
    description: "Experience luxury and tranquility at Palmeira De Socorro in North Goa. Surrounded by a lush cashew plantation, this 3-bedroom villa is a private oasis.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Cashew Plantation Surroundings",
      "3-Bedroom Luxury Estate",
      "Tranquil Oasis Vibe",
      "In-Villa Private Chef"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM.jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM (1).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Cashew Grove Sanctuary",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "shant-villa-ambalama-goa-ama-stays-trails",
    name: "Shant Villa, Ambalama, Goa - amã Stays & Trails",
    location: "Sonesta Inns pvt Ltd, Ambalama Villa, H.No 614/13, Badem, Assagao, Bardez, Assagao, Goa, 403507, India",
    subRegion: "Assagao",
    startingRate: 27500,
    description: "Experience serene luxury at Shant Villa, Ambalama Goa, a beautiful private pool villa in Assagao surrounded by lush plantations and tropical gardens.",
    phone: "+91 90498 46476",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Serene Luxury Setting",
      "Private Pool in Assagao",
      "Lush Plantation Views",
      "Elegant Modern Decor"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (3).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.12 AM.jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Lush Plantation Retreat",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "tenang-villa-ambalama-goa-ama-stays-trails",
    name: "Tenang Villa, Ambalama, Goa - amã Stays & Trails",
    location: "Sonesta Inns pvt Ltd, Ambalama Villa, H.No 614/13, Badem, Assagao, Bardez, Assagao, Goa, 403507, India",
    subRegion: "Assagao",
    startingRate: 30000,
    description: "Nestled in Assagao, Tenang Villa, Ambalama, Goa is a serene private pool villa in Goa featuring elegant Tropical Modernist Design, and lush views.",
    phone: "+91 90498 46476",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Tropical Modernist Design",
      "Lush Green Surroundings",
      "Serene Private Pool",
      "Modern Luxury Facilities"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (2).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (3).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Tropical Modernist Gem",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "the-lamp-house-goa-ama-stays-trails",
    name: "The Lamp House, Goa - amã Stays & Trails",
    location: "House No. 187/3 & 187/4, Survey No. 33/4 Utorda Village, Salcete, South Goa, Goa, 403713, India",
    subRegion: "Utorda Village",
    startingRate: 33000,
    description: "Discover The Lamp House, a serene 4-bedroom villa in South Goa. Nestled near pristine beaches, it offers a private jacuzzi, lush gardens, and quiet elegance.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Private Outdoor Jacuzzi",
      "Near Pristine Beaches",
      "Lush Manicured Gardens",
      "4-Bedroom Serene Hideaway"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (2).jpeg"
    ],
    region: "South Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Jacuzzi Garden Retreat",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "villa-dornate-goa-ama-stays-trails",
    name: "Villa D'Ornate, Goa - amã Stays & Trails",
    location: "589/1 Anath Shree Krupa Vagator Beach Road, Vagator, Anjuna, Goa, 403509, India",
    subRegion: "Vagator",
    startingRate: 36000,
    description: "Villa D'Ornate is a grand 6-bedroom colonial luxury villa in Vagator, near Vagator Beach. Blending Portuguese heritage architecture with modern pools.",
    phone: "+91 90498 46476",
    email: "book@amastaysandtrails.com",
    highlights: [
      "6-Bedroom Colonial Estate",
      "Near Vagator Beach",
      "Portuguese Heritage Style",
      "Private Luxury Pool"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM.jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM (1).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Colonial Luxury Manor",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "villa-eterna-goa-ama-stays-trails",
    name: "Villa Eterna, Goa - amã Stays & Trails",
    location: "Novo Portugal, Moira, Goa, Goa, 403507, India",
    subRegion: "Moira",
    startingRate: 34000,
    description: "Enjoy a tranquil retreat at Villa Eterna in Goa, featuring modern amenities in a serene environment. This villa is perfect for historical relaxation.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "Novo Portugal Vibe",
      "Modern Luxury Amenities",
      "Serene Private Courtyard",
      "Tranquil Moira Retreat"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM (1).jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.11 AM.jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Tranquil Courtyard Oasis",
    visitUrl: "https://www.amastaysandtrails.com/"
  },
  {
    id: "villa-siolim-goa-ama-stays-trails",
    name: "Villa Siolim, Goa - amã Stays & Trails",
    location: "Villa Siolim, Porta Vaddo, Off the Siolim-Chopdem, Bridge Road Siolim Bardez, Goa, 403507, India",
    subRegion: "Siolim",
    startingRate: 38000,
    description: "Stay at Villa Siolim Goa, where historical elegance meets modern luxury. This villa features five serene bedrooms for ten guests, private pools, and a verandah.",
    phone: "+91 80618 73747",
    email: "book@amastaysandtrails.com",
    highlights: [
      "5 Serene Bedrooms for 10",
      "Historical Elegance Meets Luxury",
      "Private Pool & Verandah",
      "Porta Vaddo Siolim Spot"
    ],
    images: [
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM.jpeg",
      "/images/hotels/WhatsApp Image 2026-07-14 at 10.01.10 AM (1).jpeg"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "amã Stays & Trails",
    tag: "Historical Verandah Estate",
    visitUrl: "https://www.amastaysandtrails.com/"
  }
];
