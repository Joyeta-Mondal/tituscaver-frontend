import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Escrow has been excellent through a difficult payment situation. A perfect team. Great team, professional, courteous and always ready to help when needed.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "/professional-man-avatar.png",
  },
  {
    text: "Escrow has made payment through their different payment options. A perfect team. Great team, professional, courteous and always ready to help when needed.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "/business-woman-avatar.png",
  },
  {
    text: "Escrow has been excellent through the different payment options. A perfect team. Great team, professional, courteous and always ready to help when needed.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "/professional-avatar.png",
  },
  {
    text: "Escrow has been excellent through a difficult payment situation. A perfect team. Great team, professional, courteous and always ready to help when needed.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "/business-executive-avatar.png",
  },
  {
    text: "Escrow has made payment through their different payment options. A perfect team. Great team, professional, courteous and always ready to help when needed.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "/team-leader-avatar.jpg",
  },
];

export default function ClientsReview() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Our Testimonials
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Clients Says
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-gray-200 transition-shadow duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="mt-1 h-8 w-8 flex-shrink-0 text-blue-500" />
                  <div className="flex-1">
                    <p className="mb-4 leading-relaxed text-gray-700">{testimonial.text}</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="rounded-full bg-blue-500 px-8 py-3 text-white hover:bg-blue-600">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
