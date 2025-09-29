import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import type React from "react";

const PhoneIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MailIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const MapPinIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  bgColor: string;
  iconColor: string;
}

const contactData: ContactInfo[] = [
  {
    icon: <PhoneIcon />,
    title: "Phone number",
    details: ["+01 489 000 811", "+00 842 00 14 69"],
    bgColor: "bg-blue-600",
    iconColor: "text-white",
  },
  {
    icon: <MailIcon />,
    title: "Email address",
    details: ["Info@Gmail.Com", "Info@Gmail.Com"],
    bgColor: "bg-gray-600",
    iconColor: "text-white",
  },
  {
    icon: <MapPinIcon />,
    title: "LOCATION",
    details: ["Lorem Ipsum is simply dummy", "text of the printing"],
    bgColor: "bg-gray-600",
    iconColor: "text-white",
  },
];

export default function MapSection() {
  return (
    <section className="mx-auto bg-white py-16">
      {/* Contact Info Cards */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactData.map((contact, index) => (
            <Card key={index} className="border-0 text-center shadow-lg">
              <CardContent className="p-8">
                {/* Icon Circle */}
                <div
                  className={`h-16 w-16 ${contact.bgColor} mx-auto mb-4 flex items-center justify-center rounded-full`}
                >
                  <div className={contact.iconColor}>{contact.icon}</div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-gray-800">{contact.title}</h3>

                {/* Contact Details */}
                <div className="space-y-1">
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* World Map */}
      <div className="w-full">
        <div className="relative h-[400px] w-full overflow-hidden shadow-lg md:h-[500px]">
          <Image
            src="/images/landingPage/contactPage/map.png"
            alt="World map showing global presence with focus on North America"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
