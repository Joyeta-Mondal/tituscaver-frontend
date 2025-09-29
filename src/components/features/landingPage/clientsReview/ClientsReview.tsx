import GetStartedButton from "@/components/reusable/GetStartedButton";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

interface ClientsReviewProps {
  pageType?: "landing" | "about";
}

const testimonials = [
  {
    text: "Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "/professional-man-avatar.png",
  },
  {
    text: "Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "/business-woman-avatar.png",
  },
  {
    text: "Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "/professional-avatar.png",
  },
  {
    text: "Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "/business-executive-avatar.png",
  },
  {
    text: "Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "/team-leader-avatar.jpg",
  },
];

export default function ClientsReview({ pageType = "landing" }: ClientsReviewProps) {
  // Determine number of testimonials to show based on page type
  const testimonialsToShow =
    pageType === "about"
      ? testimonials.slice(0, 3) // Show 3 for about page
      : testimonials; // Show all 5 for landing page

  // Calculate grid columns based on number of testimonials
  const gridColsClass =
    pageType === "about" ? "md:grid-cols-1 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="bg-[#F8F9FA] px-12 py-16 md:px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-gray-900"></div>
            <span className="text-sm font-medium tracking-wide text-black uppercase">
              Our Testimonial
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-blue-500 md:text-4xl lg:text-5xl">
            What Our Clients Says
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className={`mb-12 grid grid-cols-1 gap-6 ${gridColsClass}`}>
          {testimonialsToShow.map((testimonial, index) => (
            <Card
              key={index}
              className="border-gray-200 transition-shadow duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="mb-4 leading-relaxed text-gray-700">{testimonial.text}</p>
                    <div className="flex items-center gap-3">
                      <Image
                        width={48}
                        height={48}
                        src="/images/landingPage/Testimonials/client.png"
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />

                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                      <Quote className="mt-1 ml-auto h-8 w-8 flex-shrink-0 text-blue-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <GetStartedButton
            text="See More"
            href="#"
            showArrow={true}
            borderClass="border-[#0051C3]"
            bgClass="bg-[#2F80ED] hover:bg-[#245cc1]"
            className="text-sm sm:text-base"
          />
        </div>
      </div>
    </section>
  );
}
