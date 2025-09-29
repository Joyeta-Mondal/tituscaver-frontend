"use client";

import ServiceDetails from "@/components/features/serviceDetails/Details.tsx/ServiceDetails";
import ServicesBanner from "@/components/features/Services/banner/ServicesBanner";

export default function ServicesDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServicesBanner />
      <ServiceDetails />
    </div>
  );
}
