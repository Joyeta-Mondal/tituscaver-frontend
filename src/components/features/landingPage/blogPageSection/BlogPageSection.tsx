import GetStartedButton from "@/components/reusable/GetStartedButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredPosts = [
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

const sidebarNews = [
  {
    id: 1,
    title: "How Escrow Protects Both Buyers and Sellers",
    date: "July 15, 2024",
    image: "/images/landingPage/BlogSection/escrow.png",
  },
  {
    id: 2,
    title: "The Power of Real-Time Delivery Tracking",
    date: "July 15, 2024",
    image: "/images/landingPage/BlogSection/escrow.png",
  },
  {
    id: 3,
    title: "Building a Trust-Based Marketplace: A Deeper Look",
    date: "June 15, 2024",
    image: "/images/landingPage/BlogSection/escrow.png",
  },
];

const services = [
  "Online Escrow Services",
  "Fast - Easy Payment Tracking",
  "Professional Dispute Resolution",
  "Marketplace Integration",
  "Professional Online Network",
  "24/7 Customer Support",
];

const tags = ["Business", "Business", "Business", "Business", "Business", "Business", "Business"];

export default function BlogPageSection() {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Featured Blog Posts */}
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="h-64 w-full object-cover sm:h-80"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h2 className="mb-4 text-lg font-bold text-balance text-gray-900 sm:text-xl">
                      {post.title}
                    </h2>
                    <p className="mb-6 leading-relaxed text-gray-600">{post.excerpt}</p>

                    <GetStartedButton
                      text="Read More"
                      href="#"
                      showArrow={true}
                      borderClass="border-[#0051C3]"
                      bgClass="bg-[#2F80ED] hover:bg-[#245cc1]"
                      className="text-sm sm:text-base"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600 underline underline-offset-4">
                  Search here
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Input placeholder="Search..." className="pr-10" />
                  <Button
                    size="sm"
                    className="absolute top-1 right-1 h-8 w-8 bg-blue-600 p-0 hover:bg-blue-700"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600 underline underline-offset-4">
                  Main Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2 last:border-b-0">
                      <div className="cursor-pointer text-sm text-gray-700 transition-colors hover:text-blue-600">
                        {service}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Latest News & Blog */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600 underline underline-offset-4">
                  Latest News & Blog
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sidebarNews.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={80}
                      height={120}
                      className="flex-shrink-0 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="cursor-pointer text-sm leading-tight font-medium text-balance transition-colors hover:text-blue-600">
                        <Link href={`/blogs/${item.id}`}>
                          {item.title}
                        </Link>
                      </h4>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600 underline underline-offset-4">
                  Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-blue-100 hover:text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex gap-2">
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 p-4 text-lg text-white shadow-lg sm:p-6 md:p-6 lg:p-8">
              1
            </button>
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-1 p-4 text-lg text-black  shadow-lg">
              2
            </button>
            <button className="bg-bg-white flex h-16 w-16 items-center justify-center rounded-full p-1 text-lg font-bold text-black shadow-lg">
              3
            </button>
            <button className="bg-bg-white flex h-16 w-16 items-center justify-center rounded-full p-1 text-lg font-bold text-black shadow-lg">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
