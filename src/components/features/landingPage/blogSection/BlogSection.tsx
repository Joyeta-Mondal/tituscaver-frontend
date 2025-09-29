import GetStartedButton from "@/components/reusable/GetStartedButton";
import { Calendar } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "How Escrow Protects Both Buyers and Sellers",
    excerpt:
      "Learn how escrow services create a secure environment for online transactions, protecting both parties from fraud and disputes.",
    date: "September 26, 2025",
    image: "/images/landingPage/BlogSection/escrow.png",
    category: "Security",
  },
  {
    id: 2,
    title: "The Power of Real-Time Delivery Tracking",
    excerpt:
      "Discover how advanced tracking systems improve customer satisfaction and build trust in your delivery process.",
    date: "September 26, 2025",
    image: "/images/landingPage/BlogSection/laptop.png",
    category: "Technology",
  },
  {
    id: 3,
    title: "Building a Trust-Based Marketplace: A Deeper Look",
    excerpt:
      "Essential strategies for creating and growing a trustworthy online marketplace that customers can rely on.",
    date: "September 26, 2025",
    image: "/images/landingPage/BlogSection/delivery.png",
    category: "Business",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <p className="mb-2 text-sm font-medium tracking-wide text-gray-500 uppercase">
            News & Blogs
          </p>
          <h2 className="text-3xl font-bold text-blue-600 sm:text-4xl lg:text-5xl">
            Latest News & Blog
          </h2>
        </div>

        {/* Blog Posts Grid - Asymmetrical 3-blog layout */}
        <div className="mb-8 grid h-full grid-cols-1 gap-6 sm:mb-12 lg:grid-cols-3 lg:gap-8">
          {/* Left Column - All blog posts on mobile, first two on larger screens */}
          <section className="col-span-2">
            <div className="grid grid-cols-1 gap-6 lg:gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className={`group flex flex-col overflow-hidden rounded-2xl bg-[#EFEFEF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row ${
                    post.id === 2 ? "sm:flex-row-reverse" : ""
                  } ${post.id === 3 ? "lg:hidden" : ""}`}
                >
                  {/* Image */}
                  <div className="relative w-full overflow-hidden sm:w-1/2">
                    <Image
                      width={400}
                      height={300}
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center bg-[#EFEFEF] p-4 sm:w-1/2 sm:p-6">
                    {/* Date */}
                    <div className="mb-3 flex items-center text-sm text-black">
                      <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                      {post.date}
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-lg leading-tight font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600 sm:text-xl">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {post.excerpt}
                    </p>

                    <GetStartedButton
                      text="Read More"
                      href="#"
                      showArrow={true}
                      borderClass="border-[#0051C3]"
                      bgClass="bg-[#2F80ED] hover:bg-[#245cc1]"
                      className="w-[200px] text-sm sm:text-base"
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Right Column - One larger featured card, hidden on mobile and tablet */}
          <div className="hidden lg:row-span-2 lg:block">
            <article className="group h-[585px] overflow-hidden rounded-2xl bg-[#EFEFEF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={blogPosts[2].image || "/placeholder.svg"}
                  alt={blogPosts[2].title}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-56 lg:h-52"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="h-fit px-6 sm:px-8 sm:pt-6">
                {/* Date */}
                <div className="mb-4 flex items-center text-sm text-gray-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  {blogPosts[2].date}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl leading-tight font-bold text-balance text-gray-900 transition-colors duration-200 group-hover:text-blue-600 sm:text-3xl lg:text-2xl">
                  {blogPosts[2].title}
                </h3>

                {/* Excerpt */}
                <p className="sm:text-md mb-6 line-clamp-4 text-base leading-relaxed text-pretty text-gray-600">
                  {blogPosts[2].excerpt}
                </p>

                <GetStartedButton
                  text="Read More"
                  href="#"
                  showArrow={true}
                  borderClass="border-[#0051C3]"
                  bgClass="bg-[#2F80ED] hover:bg-[#245cc1]"
                  className="text-sm sm:text-base"
                />
              </div>
            </article>
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center">
          <GetStartedButton
            text="Read More"
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
