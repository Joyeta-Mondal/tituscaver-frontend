import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    price: "$19",
    period: "/month",
    description: "For small businesses and organizations",
    features: ["Basic transactions", "Phone and email support", "Basic analytics"],
    popular: false,
  },
  {
    name: "Premium Plan",
    price: "$39",
    period: "/month",
    description: "The most popular option for growing businesses",
    features: ["General tracking", "Basic insurance", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise Plan",
    price: "$79",
    period: "/month",
    description: "For large scale operations and advanced functionality",
    features: ["Advanced reporting", "Full integration", "Dedicated support"],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Pricing Table
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Choose your Best Offer
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "scale-105 border-blue-500 shadow-lg"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                  <span className="rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="pb-4 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="h-8 w-8 rounded bg-white/20 backdrop-blur-sm"></div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="mt-2 text-gray-600">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="pb-6 text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-gray-600">{plan.period}</span>
                </div>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "border-2 border-blue-500 bg-white text-blue-500 hover:bg-blue-50"
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
