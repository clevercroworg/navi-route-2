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
  type: "Luxury Resort" | "Heritage & Boutique" | "Modern Premium" | "Private Villa" | "Basic";
  brand: "Taj (IHCL)" | "Brij Hotels" | "SeleQtions" | "amã Stays & Trails" | "Ginger" | "Others";
  tag: string;
  visitUrl?: string;
  gallery?: string[];
}

export const hotelsData: Hotel[] = [
  {
    id: "resort-terra-paraiso",
    name: "Resort Terra Paraiso goa",
    location: "Gauravaddo, Calangute, North Goa, 403516, India",
    subRegion: "Calangute",
    startingRate: 5600,
    description: "Nestled steps away from the famous Calangute Beach, Resort Terra Paraiso is a boutique oasis featuring Portuguese villa-style architecture, red-earthen roofs, lush courtyard pools, and warm Goan hospitality.",
    phone: "+91 83222 76321",
    email: "reservations.terraparaiso@nautiroute.com",
    highlights: [
      "2-Min Walk to Calangute Beach",
      "Traditional Portuguese Villa Style",
      "Two Outdoor Courtyard Pools",
      "Poolside Blue Bistro Restaurant"
    ],
    images: [
      "/images/hotels/Resort Terra Paraiso goa.webp",
      "/images/hotels/Resort Terra Paraiso goa-2.webp"
    ],
    region: "North Goa",
    type: "Luxury Resort",
    brand: "Others",
    tag: "Earthen Portuguese Villas"
  },
  {
    id: "goa-crescent-resort",
    name: "Goa Crescent Resort",
    location: "Morjim Beach Road, Morjim, North Goa, 403512, India",
    subRegion: "Morjim",
    startingRate: 3900,
    description: "Perched gracefully on a hilltop, Goa Crescent Resort is a coastal haven that offers sweeping panoramic views of the Arabian Sea, modern poolside lounges, and easy access to Morjim's tranquil sands.",
    phone: "+91 83222 98451",
    email: "booking.crescent@nautiroute.com",
    highlights: [
      "Panoramic Hilltop Ocean Views",
      "Modern Sea-facing Suites",
      "Infinity-edge Swimming Pool",
      "Close to Morjim Turtle Beach"
    ],
    images: [
      "/images/hotels/Goa Crescent Resort.webp",
      "/images/hotels/Goa Crescent Resort-2.webp"
    ],
    region: "North Goa",
    type: "Modern Premium",
    brand: "Others",
    tag: "Hilltop Ocean Escape"
  },
  {
    id: "the-tamarind-hotel",
    name: "The Tamarind Hotel",
    location: "Anjuna-Mapusa Road, Anjuna, North Goa, 403509, India",
    subRegion: "Anjuna",
    startingRate: 4200,
    description: "Tucked away in the leafy lanes of Anjuna, The Tamarind Hotel is a classic stone-built heritage property with vintage Goan charm, private balconies, a chic courtyard pool, and a renowned bakery cafe.",
    phone: "+91 83266 73849",
    email: "stay.tamarind@nautiroute.com",
    highlights: [
      "Elegant Hand-cut Stone Facade",
      "Peaceful Courtyard Sanctuary",
      "Walk to Famous Anjuna Cafes",
      "In-house Gourmet Patisserie"
    ],
    images: [
      "/images/hotels/The Tamarind Hotel.webp",
      "/images/hotels/The Tamarind Hotel-2.webp"
    ],
    region: "North Goa",
    type: "Heritage & Boutique",
    brand: "Others",
    tag: "Stone-built Heritage Stay"
  },
  {
    id: "3102bce-a-vedic-resort-1",
    name: "3102bce AVedicResort",
    location: "Deul Wada, Vagator, North Goa, 403509, India",
    subRegion: "Vagator",
    startingRate: 4000,
    description: "Inspired by the prehistoric Vedic era, 3102bce AVedicResort is a unique designer retreat featuring archaeological style elements, open-air jacuzzis, yoga shalas, and a pristine rooftop pool overlooking Chapora.",
    phone: "+91 83266 91102",
    email: "vedic.experience@nautiroute.com",
    highlights: [
      "Vedic Era Theme & Design",
      "Open-air Balcony Jacuzzis",
      "Rooftop Infinity Bath Pool",
      "Daily Wellness & Yoga Classes"
    ],
    images: [
      "/images/hotels/3102bce AVedicResort.webp",
      "/images/hotels/3102bce AVedicResort-2.webp"
    ],
    region: "North Goa",
    type: "Heritage & Boutique",
    brand: "Others",
    tag: "Vedic Architecture & Wellness"
  },
  {
    id: "cmiiaent-resort-goa",
    name: "CMiiaent Resort Goa",
    location: "Coutinho Vaddo, Vagator, North Goa, 403509, India",
    subRegion: "Vagator",
    startingRate: 4700,
    description: "Located near Vagator's prime sunset points, CMiiaent Resort Goa is a stylish boutique escape providing contemporary rooms, private pool decks, a tropical bar, and easy access to coastal party hubs.",
    phone: "+91 83222 55943",
    email: "hello.clement@nautiroute.com",
    highlights: [
      "Prime Vagator Sunset Location",
      "Contemporary Tropical Vibe",
      "Private Balcony Deck Access",
      "Chic Lounge Bar & Bistro"
    ],
    images: [
      "/images/hotels/cmiiaent-resort-goa.jpg",
      "/images/hotels/cmiiaent-resort-goa-2.jpg"
    ],
    region: "North Goa",
    type: "Modern Premium",
    brand: "Others",
    tag: "Boutique Vagator Escape"
  },
  {
    id: "amaya-at-anamiva",
    name: "AMiiaYA AT ANAMIVA",
    location: "Gaonwadi, Anjuna, North Goa, 403509, India",
    subRegion: "Anjuna",
    startingRate: 6500,
    description: "Experience designer elegance at Amaya at Anamiva, an art-focused luxury boutique hotel in Anjuna. Enjoy custom-crafted rooms, premium art installations, a wellness spa, and an upscale pool cocktail lounge.",
    phone: "+91 83266 44589",
    email: "reservations.anamiva@nautiroute.com",
    highlights: [
      "Art-themed Curator Suites",
      "Upscale Swimming Pool Lounge",
      "Designer Mediterranean Decor",
      "Luxury Spa & Wellness Massages"
    ],
    images: [
      "/images/hotels/AMiiaYA AT ANAMIVA.jpg",
      "/images/hotels/AMiiaYA AT ANAMIVA-2.jpg"
    ],
    region: "North Goa",
    type: "Heritage & Boutique",
    brand: "Others",
    tag: "Designer Boutique Art Suites"
  },
  {
    id: "the-golden-crown-hotel-spa",
    name: "The Golden Crown Hotel & Spa",
    location: "Beach Road, Colva, South Goa, 403708, India",
    subRegion: "Colva",
    startingRate: 4500,
    description: "Surrounded by South Goa's tranquil paddy fields, The Golden Crown Hotel & Spa offers a peaceful 4-star experience with large rooms, a luxury ayurvedic spa, and a short walk to Colva Beach.",
    phone: "+91 83266 11223",
    email: "booking.goldencrown@nautiroute.com",
    highlights: [
      "Scenic Paddy Field Backdrops",
      "500 Meters from Colva Beach",
      "Ayurvedic Wellness Spa Center",
      "Spacious Family-friendly Suites"
    ],
    images: [
      "/images/hotels/The Golden Crown Hotel & Spa.webp",
      "/images/hotels/The Golden Crown Hotel & Spa-2.webp"
    ],
    region: "South Goa",
    type: "Modern Premium",
    brand: "Others",
    tag: "South Goan Oasis"
  },
  {
    id: "hibiscus-oasis-da-alohas",
    name: "Hibiscus Oasis by Da Alohas",
    location: "Candolim Beach Road, Candolim, North Goa, 403515, India",
    subRegion: "Candolim",
    startingRate: 4800,
    description: "Hibiscus Oasis by Da Alohas is a premium serviced retreat in Candolim, featuring luxury pool-facing suites, landscaped gardens, and modern amenities designed for long, relaxing stays near the beach.",
    phone: "+91 83222 77501",
    email: "hibiscus.alohas@nautiroute.com",
    highlights: [
      "Pool-facing Luxury Apartments",
      "Lush Landscaped Grounds",
      "Self-catering Kitchen Options",
      "Minutes to Candolim Nightlife"
    ],
    images: [
      "/images/hotels/Hibiscus Oasis by Da Alohas.avif",
      "/images/hotels/Hibiscus Oasis by Da Alohas-2.avif"
    ],
    region: "North Goa",
    type: "Modern Premium",
    brand: "Others",
    tag: "Poolside Serviced Retreat"
  },
  {
    id: "3102bce-a-vedic-resort-2",
    name: "3102bce - A Vedic Resort",
    location: "187/14, Deul Wada, Vagator, North Goa, 403509, India",
    subRegion: "Vagator",
    startingRate: 4000,
    description: "Unwind at 3102bce - A Vedic Resort in Vagator, North Goa. Explore a heritage property designed around the ancient Indus Valley civilization, featuring rustic wood detailing and therapeutic spa baths.",
    phone: "+91 83266 91103",
    email: "experience.vedic@nautiroute.com",
    highlights: [
      "Indus Valley Themed Rooms",
      "Terracotta & Wood Architecture",
      "Istaka Poolside Dining Bar",
      "Short Walk to Sunset Point"
    ],
    images: [
      "/images/hotels/3102bce AVedicResort.webp",
      "/images/hotels/3102bce AVedicResort-2.webp"
    ],
    region: "North Goa",
    type: "Heritage & Boutique",
    brand: "Others",
    tag: "India's First Vedic Resort"
  },
  {
    id: "argo-by-trance",
    name: "Argo By Trance",
    location: "Airport Road, Dabolim, Central Goa, 403801, India",
    subRegion: "Dabolim",
    startingRate: 4600,
    description: "Conveniently located near Dabolim Airport, Argo By Trance is an adult-focused boutique hotel offering contemporary comfort, a year-round outdoor pool, a fitness center, and a chic cocktail bar.",
    phone: "+91 83266 12345",
    email: "reservations.argo@nautiroute.com",
    highlights: [
      "5-Min Drive to Dabolim Airport",
      "Adults-only Premium Rooms",
      "Chic Poolside Cocktail Lounge",
      "Full Fitness Center & Gym"
    ],
    images: [
      "/images/hotels/Argo By Trance.webp",
      "/images/hotels/Argo By Trance-2.webp"
    ],
    region: "Central Goa",
    type: "Modern Premium",
    brand: "Others",
    tag: "Contemporary Airport Luxury"
  },
  {
    id: "jacks-resort",
    name: "Jacks Resort",
    location: "Chapora Road, Vagator, North Goa, 403509, India",
    subRegion: "Vagator",
    startingRate: 3600,
    description: "Jacks Resort offers a quiet, budget-friendly tropical retreat in Vagator. Enjoy simple, clean rooms, a lush garden perimeter, a family pool, and walking proximity to Chapora Fort.",
    phone: "+91 83222 34950",
    email: "bookings.jacks@nautiroute.com",
    highlights: [
      "Quiet Tropical Garden Setting",
      "Walk to Historic Chapora Fort",
      "Clean Pool & Deck Area",
      "Authentic Local Dining Cafe"
    ],
    images: [
      "/images/hotels/Jacks Resort.jpg",
      "/images/hotels/Jacks Resort-2.jpg"
    ],
    region: "North Goa",
    type: "Heritage & Boutique",
    brand: "Others",
    tag: "Tropical Garden Sanctuary"
  },
  {
    id: "laguna-anjuna",
    name: "Laguna Anjuna-Vintage Goan country house style",
    location: "Soranto Vaddo, Anjuna, North Goa, 403509, India",
    subRegion: "Anjuna",
    startingRate: 4100,
    description: "Immerse yourself in vintage country house style at Laguna Anjuna. Featuring stone cottages, organic terracotta tiling, and a massive natural lagoon-style pool nestled under leafy palm canopies.",
    phone: "+91 83222 74321",
    email: "info.laguna@nautiroute.com",
    highlights: [
      "Vintage Stone Country Cottages",
      "Massive Lagoon-style Pool",
      "Pet-friendly Vacation Grounds",
      "Quiet Slow-paced Country Living"
    ],
    images: [
      "/images/hotels/Laguna Anjuna-Vintage Goan country house style.jpg",
      "/images/hotels/Laguna Anjuna-Vintage Goan country house style-2.jpg"
    ],
    region: "North Goa",
    type: "Heritage & Boutique",
    brand: "Others",
    tag: "Vintage Goan Country House"
  },
  {
    id: "mateus-boutique-hotel",
    name: "Mateus Boutique Hotel",
    location: "31 January Road, Fontainhas, Panaji, Goa, 403001, India",
    subRegion: "Panaji",
    startingRate: 5000,
    description: "Located in Panaji's vibrant Latin Quarter (Fontainhas), Mateus Boutique Hotel is a restored 19th-century colonial mansion blending Portuguese heritage decor with modern air-conditioned luxury.",
    phone: "+91 83266 54321",
    email: "reservations.mateus@nautiroute.com",
    highlights: [
      "Restored 19th-Century Mansion",
      "Fontainhas Heritage Quarter",
      "Original Colonial Furniture",
      "Minutes to Mandovi River Cruise"
    ],
    images: [
      "/images/hotels/Mateus Boutique Hotel.webp",
      "/images/hotels/Mateus Boutique Hotel-2.webp"
    ],
    region: "Central Goa",
    type: "Heritage & Boutique",
    brand: "Others",
    tag: "Colonial Mansion Stay"
  },
  {
    id: "swim-up-by-whiteflower",
    name: "Swim Up By Whiteflower",
    location: "Coutinho Vaddo, Vagator, North Goa, 403509, India",
    subRegion: "Vagator",
    startingRate: 6000,
    description: "Designed for premium privacy, Swim Up By Whiteflower features signature rooms with direct swim-up balcony pools, custom interiors, and an on-site artisan bakery for a truly exclusive getaway.",
    phone: "+91 83266 89901",
    email: "swimup.whiteflower@nautiroute.com",
    highlights: [
      "Direct Swim-up Pool Rooms",
      "Exclusive High-privacy Villa Feel",
      "In-house Artisan Tea Bakery",
      "Contemporary Minimalist Decor"
    ],
    images: [
      "/images/hotels/Swim Up By Whiteflower.webp",
      "/images/hotels/Swim Up By Whiteflower-2.webp"
    ],
    region: "North Goa",
    type: "Private Villa",
    brand: "Others",
    tag: "Exclusive Swim-up Balconies"
  },
  {
    id: "stone-wood-beach-resort",
    name: "Stone Wood Beach Resort and Club, Vagator Beach",
    location: "Ozran Beach Road, Vagator, North Goa, 403509, India",
    subRegion: "Vagator",
    startingRate: 5200,
    description: "Overlooking the vibrant shores of Small Vagator, Stone Wood Beach Resort is a premium party hotel featuring direct beach access, poolside DJ decks, and contemporary wooden cottages.",
    phone: "+91 91120 01711",
    email: "reservations.stonewood@nautiroute.com",
    highlights: [
      "Overlooking Small Vagator Beach",
      "Lively Poolside Music & Dj Decks",
      "Rustic Luxury Wooden Cottages",
      "Direct Path Access to Ozran Beach"
    ],
    images: [
      "/images/hotels/Stone Wood Beach Resort and Club, Vagator Beach.webp",
      "/images/hotels/Stone Wood Beach Resort and Club, Vagator Beach-2.webp"
    ],
    region: "North Goa",
    type: "Luxury Resort",
    brand: "Others",
    tag: "Beachfront Party Resort"
  },
  {
    id: "mia-bella-beach-cottages",
    name: "Miia Bella Beach Cottage Resort Baga",
    location: "Baga Beach Road, Baga, North Goa, 403516, India",
    subRegion: "Baga",
    startingRate: 4300,
    description: "Steps from Baga Beach, Mia Bella Beach Cottage Resort features beachfront cottages, private garden patios, and instant access to Baga's famous water sports and dining nightlife.",
    phone: "+91 83222 66701",
    email: "bookings.miabella@nautiroute.com",
    highlights: [
      "Right Beside Baga Sandy Shore",
      "Private Cottage Garden Patios",
      "Walk to Famous Tito's Lane",
      "Poolside Sunset Cocktail Bar"
    ],
    images: [
      "/images/hotels/Miia Bella Beach Cottage Resort Baga.webp",
      "/images/hotels/Miia Bella Beach Cottage Resort Baga-2.webp"
    ],
    region: "North Goa",
    type: "Modern Premium",
    brand: "Others",
    tag: "Beachside Cottage Escape"
  },
  {
    id: "hotel-the-north39-1",
    name: "Hotel The North39 1",
    location: "NORTH39 186, B JUNESWADA, Mandrem, GOA, Goa 403527",
    subRegion: "Mandrem",
    startingRate: 3500,
    description: "At the North 39 Hotel, experience the best of North Goa in a beautiful palm tree-lined sanctuary near serene beaches, offering packages perfect for families or couples seeking a romantic getaway.",
    phone: "+91 83222 99939",
    email: "reservations.thenorth39@nautiroute.com",
    highlights: [
      "Deluxe Rooms with Private Kitchenette",
      "Set in a Lush Palm-lined Sanctuary",
      "Short Walk to Serene Mandrem Beach",
      "Perfect for Families & Couples"
    ],
    images: [
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_1.webp",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_2.webp"
    ],
    region: "North Goa",
    type: "Basic",
    brand: "Others",
    tag: "Palm-lined Mandrem Escape",
    gallery: [
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_1.webp",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_2.webp",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_4.webp",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_5.webp",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_6.webp",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_7.webp",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_8.webp",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_9.jpg",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_10.webp",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_11.webp",
      "/images/hotels/Hotel_The_North39_8/Hotel_The_North39_12.webp"
    ]
  }
];

// Dynamically generate the 15 gallery image paths for each hotel (if not already explicitly defined)
hotelsData.forEach((hotel) => {
  if (!hotel.gallery) {
    hotel.gallery = Array.from({ length: 15 }, (_, i) => `/images/hotels/${hotel.id}/${i + 1}.jpg`);
  }
});

