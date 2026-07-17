import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.naviroute.in"),
  title: "Elite Stays by Navi Route | Goa Hotel Directory",
  description: "Explore our handpicked collection of luxury resorts, heritage boutique manors, and private beach villas in North and South Goa. Exclusive partner discounts available.",
  openGraph: {
    title: "Elite Stays by Navi Route | Goa Hotel Directory",
    description: "Explore our handpicked collection of luxury resorts, heritage boutique manors, and private beach villas in North and South Goa.",
    type: "website",
  }
};

export default function GoaHotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
