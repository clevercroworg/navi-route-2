import React from "react";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { hotelsData } from "../hotelsData";
import HotelDetailClient from "./HotelDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return hotelsData.map((hotel) => ({
    id: hotel.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const hotel = hotelsData.find((h) => h.id === id);

  if (!hotel) {
    return {
      title: "Hotel Details | Elite Stays",
    };
  }

  return {
    title: `${hotel.name} | Elite Stays by Navi Route`,
    description: `Book your luxury stay at ${hotel.name} located in ${hotel.location}. Starting from ₹ ${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(hotel.startingRate)} / night.`,
    openGraph: {
      title: `${hotel.name} | Elite Stays by Navi Route`,
      description: `Explore details, gallery, room views and exclusive discounts for ${hotel.name} in ${hotel.location}.`,
      type: "website",
      images: hotel.images && hotel.images.length > 0 ? [
        {
          url: hotel.images[0],
          width: 1200,
          height: 630,
          alt: hotel.name,
        }
      ] : [],
    }
  };
}

export default async function HotelDetailPage({ params }: PageProps) {
  const { id } = await params;
  const hotel = hotelsData.find((h) => h.id === id);

  if (!hotel) {
    redirect("/lp/goa-hotels");
  }

  return <HotelDetailClient hotel={hotel} />;
}
