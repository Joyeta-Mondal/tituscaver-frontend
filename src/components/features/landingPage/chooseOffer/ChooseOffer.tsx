import GetStartedButton from "@/components/reusable/GetStartedButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    name: "Basic Plan",
    price: "$0",
    period: "/month",
    description: "For small businesses and organizations",
    features: ["Basic transactions", "Phone and email support", "Basic analytics"],
    popular: false,
    image: "/images/landingPage/ChooseOffer/basic.png",
  },
  {
    name: "Premium Plan",
    price: "$39",
    period: "/month",
    description: "The most popular option for growing businesses",
    features: ["General tracking", "Basic insurance", "Priority support"],
    popular: false,
    image: "/images/landingPage/ChooseOffer/premium.png",
  },
  {
    name: "Enterprise Plan",
    price: "$79",
    period: "/month",
    description: "For large scale operations and advanced functionality",
    features: ["Advanced reporting", "Full integration", "Dedicated support"],
    popular: false,
    image: "/images/landingPage/ChooseOffer/enterprise.png",
  },
];

export default function ChooseOffer() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-gray-900"></div>
            <span className="text-sm font-medium tracking-wide text-black uppercase">
              Pricing Table
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-blue-500 md:text-4xl lg:text-5xl">
            Choose your Best Offer
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "scale-105 border-blue-500 shadow-lg"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <CardHeader className="pb-4 text-center">
                <Image
                  src={plan.image}
                  alt="basic plan"
                  className="h-full w-full object-cover md:h-full md:w-full"
                  width={400}
                  height={400}
                />

                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-blue-900">{plan.price}</span>
                  <span className="ml-1 text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="text-md mx-auto mt-2 mb-4 w-2/3">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-6 text-center">
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="mx-auto mt-2 mb-4 flex w-2/3 items-center gap-3"
                    >
                      <Check className="h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex justify-center">
                <GetStartedButton
                  text="Get Started"
                  href="#"
                  showArrow={true}
                  borderClass="border-[#0051C3]"
                  bgClass="bg-[#2F80ED] hover:bg-[#245cc1]"
                  className="text-sm sm:text-base"
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
