import GetStartedButton from "@/components/reusable/GetStartedButton";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Expart() {
  const teamMembers = [
    {
      id: 1,
      name: "Marvin McKinney",
      title: "CEO & Senior Business Consultant",
      description:
        "Jane working in the hospitality industry for over 15 years, she has a wealth of experience in hotel of looking and coaching of teams and...",
      image: "/images/landingPage/Shared/maleExpart.png",
      socialLinks: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" },
        { platform: "facebook", url: "#" },
        { platform: "instagram", url: "#" },
      ],
    },
    {
      id: 2,
      name: "Marvin McKinney",
      title: "CEO & Senior Business Consultant",
      description:
        "With working in the hospitality industry for over 15 years, she has a wealth of experience in hotel of looking and coaching of teams and...",
      image: "/images/landingPage/Shared/femaleExpart.png",
      socialLinks: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" },
        { platform: "facebook", url: "#" },
        { platform: "instagram", url: "#" },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-gray-900"></div>
            <span className="text-sm font-medium tracking-wide text-black uppercase">Team</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-blue-500 md:text-4xl lg:text-5xl">
            Expert Team Members
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            in Today&apos;s Dynamic Business Environment, The Key To Success Strategies...
          </p>
        </div>

        {/* Team Members Container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex h-72 w-full flex-col items-center gap-6 rounded-lg border border-gray-200 sm:flex-row sm:items-start">
                  {/* Member Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative h-40 py-auto w-40 sm:h-28 sm:w-28 lg:h-60 lg:w-60"> 
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="rounded-full object-cover md:rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-1 px-1 py-4 text-center sm:text-left">
                    {/* Name with dotted line */}
                    <div className="mb-2 flex h-full w-full items-center justify-center gap-2 text-blue-600 sm:justify-start">
                      <h3 className="text-lg font-bold text-blue-600 sm:text-xl lg:text-2xl">
                        {member.name}
                      </h3>
                    </div>

                    {/* Title */}
                    <p className="my-3 text-sm font-semibold text-gray-400 sm:text-base">
                      {member.title}
                    </p>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {member.description}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 sm:justify-start">
                      {member.socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 transition-colors duration-200 hover:bg-blue-700"
                        >
                          {social.platform === "facebook" && (
                            <Facebook className="h-4 w-4 fill-white text-white" />
                          )}
                          {social.platform === "twitter" && (
                            <Twitter className="h-4 w-4 fill-white text-white" />
                          )}
                          {social.platform === "linkedin" && (
                            <Linkedin className="h-4 w-4 fill-white text-white" />
                          )}
                          {social.platform === "instagram" && (
                            <Instagram className="h-4 w-4 text-white" />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="mt-12 flex justify-center">
            <GetStartedButton text="Get Started" href="#" />
          </div>

          {/* Mobile Navigation Dots */}
          <div className="mt-8 flex justify-center gap-2 lg:hidden">
            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
