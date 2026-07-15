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
  type: "Luxury Resort" | "Heritage & Boutique" | "Modern Premium" | "Private Villa" | "Standard";
  brand: "Taj (IHCL)" | "Brij Hotels" | "SeleQtions" | "amã Stays & Trails" | "Ginger" | "Others";
  tag: string;
  visitUrl?: string;
  gallery?: string[];
  googleRating?: string;
}

export const hotelsData: Hotel[] = [
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
    type: "Standard",
    brand: "Others",
    tag: "Palm-lined Mandrem Escape",
    googleRating: "4.2",
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
  },
  {
    id: "bensinn",
    name: "BensInn",
    location: "House # 205 Ashwem, Ashwem Mandrem, Beach Road, Ashwem Beach, near Calisto Super Market, Pernem, Goa 403527",
    subRegion: "Ashwem",
    startingRate: 3600,
    description: "Bens Inn in Mandrem provides premium guest house accommodation with a garden, a bar, a restaurant, and a shared lounge. Enjoy rooms equipped with air conditioning, desks, and private balconies near Ashwem Beach.",
    phone: "+91 83222 77205",
    email: "reservations.bensinn@nautiroute.com",
    highlights: [
      "Queen Premium Deluxe with Balcony",
      "Steps away from Ashwem Beach",
      "Cozy Garden & Shared Lounge Area",
      "Concierge, Tour Desk & Room Service"
    ],
    images: [
      "/images/hotels/BensInn/Bensinn_imag_8.avif",
      "/images/hotels/BensInn/Bensinn_imag_5.avif"
    ],
    region: "North Goa",
    type: "Standard",
    brand: "Others",
    tag: "Garden & Balcony Retreat",
    googleRating: "4.6",
    gallery: [
      "/images/hotels/BensInn/Bensinn_imag_1.avif",
      "/images/hotels/BensInn/Bensinn_imag_2.avif",
      "/images/hotels/BensInn/Bensinn_imag_3.avif",
      "/images/hotels/BensInn/Bensinn_imag_4.avif",
      "/images/hotels/BensInn/Bensinn_imag_5.avif",
      "/images/hotels/BensInn/Bensinn_imag_8.avif",
      "/images/hotels/BensInn/Bensinn_imag_9.avif",
      "/images/hotels/BensInn/Bensinn_imag_10.avif",
      "/images/hotels/BensInn/Bensinn_imag_11.avif",
      "/images/hotels/BensInn/Bensinn_imag_12.avif",
      "/images/hotels/BensInn/Bensinn_imag_13.avif",
      "/images/hotels/BensInn/Bensinn_imag_14.avif",
      "/images/hotels/BensInn/Bensinn_imag_148.avif",
      "/images/hotels/BensInn/Bensinn_imag_15.avif"
    ]
  },
  {
    id: "riva-boutique-apartments",
    name: "Riva Boutique Apartments",
    location: "Mandrem Beach, Mandrem, North Goa, 403527, India",
    subRegion: "Mandrem",
    startingRate: 3800,
    description: "Set on Mandrem Beach, Riva Boutique Apartments offers North Goa’s most breathtaking waterfront escape, blending upscale boutique service with custom self-catering kitchenette conveniences.",
    phone: "+91 83222 77309",
    email: "reservations.riva@nautiroute.com",
    highlights: [
      "Deluxe Rooms with Kitchenette",
      "Stunning Dual-Waterfront Views",
      "Located Directly on Mandrem Beach",
      "Access to Riva Resort Amenities"
    ],
    images: [
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image1.webp",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image2.webp"
    ],
    region: "North Goa",
    type: "Standard",
    brand: "Others",
    tag: "Waterfront Boutique Stays",
    googleRating: "4.1",
    gallery: [
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image1.webp",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image2.webp",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image3.jpg",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image4.webp",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image6.webp",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image7.jpg",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image8.jpg",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image9.jpg",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image10.jpg",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image11.jpg",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image12.webp",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image13.jpg",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image14.webp",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image15.jpg",
      "/images/hotels/Riva_Boutique_Apartments/Riva_Boutique_Apartments_image16.webp"
    ]
  },
  {
    id: "fabhotel-palm-inn-resort",
    name: "FabHotel Palm Inn Resort",
    location: "Survey No: 120/2-X, Village Morjim, Tembwada, Pernem, Morjim, Goa 403512, India",
    subRegion: "Morjim",
    startingRate: 3400,
    description: "Located a short walk from Morjim Beach, FabHotel Palm Inn Resort offers comfortable 3-star accommodations featuring an indoor swimming pool, private balconies, and a peaceful garden area.",
    phone: "+91 83222 77401",
    email: "reservations.palminn@nautiroute.com",
    highlights: [
      "Deluxe Rooms with Balcony",
      "Indoor Swimming Pool",
      "6-Min Walk to Morjim Beach",
      "Free On-site Private Parking"
    ],
    images: [
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image1.jpg",
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image2.jpg"
    ],
    region: "North Goa",
    type: "Standard",
    brand: "Others",
    tag: "Morjim Poolside Comfort",
    googleRating: "4.2",
    gallery: [
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image1.jpg",
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image2.jpg",
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image3.jpg",
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image4.jpg",
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image5.jpg",
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image6.jpg",
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image7.jpg",
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image8.jpg",
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image9.jpg",
      "/images/hotels/FabHotel_Palm Inn_Resort/FabHotel_Palm_Inn_Resort_image10.jpg"
    ]
  },
  {
    id: "palolem-guest-house",
    name: "Palolem Guest House",
    location: "Ourem, Palolem, Canacona, South Goa, 403702, India",
    subRegion: "Palolem",
    startingRate: 3200,
    description: "Just a short walk from the scenic shores of Palolem Beach, Palolem Guest House offers a tranquil, home-away-from-home stay in South Goa. Relax in its well-maintained tropical gardens and enjoy dining at the popular Avocado Garden restaurant.",
    phone: "+91 83226 43021",
    email: "reservations.palolemgh@nautiroute.com",
    highlights: [
      "Standard Double Room with Fan",
      "3-Min Walk to Palolem Beach",
      "Renowned Avocado Garden Restaurant",
      "Bike/Car Rental & Travel Assistance"
    ],
    images: [
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image1.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image2.jpg"
    ],
    region: "South Goa",
    type: "Standard",
    brand: "Others",
    tag: "Palolem Garden Retreat",
    googleRating: "4.2",
    gallery: [
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image1.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image2.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image3.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image4.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image5.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image6.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image7.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image8.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image9.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image10.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image11.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image12.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image13.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image14.jpg",
      "/images/hotels/Palolem_Guest_House/Palolem_Guest_House_image15.jpg"
    ]
  }
];

// Dynamically generate the 15 gallery image paths for each hotel (if not already explicitly defined)
hotelsData.forEach((hotel) => {
  if (!hotel.gallery) {
    hotel.gallery = Array.from({ length: 15 }, (_, i) => `/images/hotels/${hotel.id}/${i + 1}.jpg`);
  }
});
