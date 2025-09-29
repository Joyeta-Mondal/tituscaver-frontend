import { CheckCircle, CreditCard, ShoppingCart, Truck } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Place Order",
      description: "Buyer funds go into escrow, a safe holding account.",
    },
    {
      icon: Truck,
      title: "Seller Ships",
      description: "Product is shipped to verified address or shipping service.",
    },
    {
      icon: CheckCircle,
      title: "Confirm Delivery",
      description: "Buyer confirms receipt of product as described.",
    },
    {
      icon: CreditCard,
      title: "Payment Released",
      description: "Seller receives payment securely and instantly.",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-gray-900"></div>
            <span className="text-sm font-medium tracking-wide text-black uppercase">
              How It Works
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-blue-500 md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We make the process smooth, secure, and stress-free.
          </p>
        </div>

        {/* Steps */}
        <section className="relative">
          <div className="z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative z-10">
                  {/* Step Card */}
                  <div className="rounded-xl p-6 text-center transition-shadow duration-300 hover:shadow-lg">
                    {/* Icon */}
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 md:h-24 md:w-24">
                      <IconComponent className="md:32 h-12 w-12 text-blue-600 md:h-32" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                  </div>

                  {/* Connecting Line (hidden on mobile, shown on larger screens) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 -right-2 hidden h-0.5 w-4 lg:block">
                      <div className="h-full w-full border-t-2 border-dashed border-gray-300"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <Image
            alt="how it works"
            src="/images/landingPage/aboutUs/howItWorks.png"
            width={1100}
            height={860}
            className="absolute top-10 left-28 z-0 h-20 opacity-0 md:opacity-100 md:block"
          />
        </section>
      </div>
    </section>
  );
}
