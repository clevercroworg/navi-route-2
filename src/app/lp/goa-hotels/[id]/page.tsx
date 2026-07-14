import React from "react";
import { redirect } from "next/navigation";
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

export default async function HotelDetailPage({ params }: PageProps) {
  const { id } = await params;
  const hotel = hotelsData.find((h) => h.id === id);

  if (!hotel) {
    redirect("/lp/goa-hotels");
  }

  return <HotelDetailClient hotel={hotel} />;
}
