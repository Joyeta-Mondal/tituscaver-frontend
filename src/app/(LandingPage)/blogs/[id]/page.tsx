import { blogPosts, services, sidebarNews, tags } from "@/app/data/blogPosts";
import BlogBanner from "@/components/features/blog/banner/BlogBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, MessageCircle, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const postId = Number.parseInt(resolvedParams.id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  // Adding a default comments count since it's not in the BlogPost interface
  const commentsCount = 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogBanner title="Blog Details" />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              {/* Featured Image */}
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="h-64 w-full object-cover sm:h-80"
                />
                <div className="absolute top-4 left-4 rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white">
                  Solved
                </div>
              </div>

              <CardContent className="p-6">
                {/* Blog Header */}
                <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">{post.title}</h1>

                {/* Blog Content */}
                <div className="prose-a:text-blue-600 hover:prose-a:text-blue-800 mb-6 max-w-none text-gray-600">
                  {post.description}
                </div>

                <div className="mb-6 flex w-full items-center justify-between gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-xs font-medium text-gray-400">Authored by</span>
                      <span className="block font-medium">{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-xs font-medium text-gray-400">Date Released</span>
                      <span className="block font-medium">{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-xs font-medium text-gray-400">Comments</span>
                      <span className="block font-medium">{commentsCount} comments</span>
                    </div>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="prose-a:text-blue-600 hover:prose-a:text-blue-800 mb-6 max-w-none text-gray-600">
                  {post.details}
                </div>

                {/* Image */}
                <Image
                  src="/images/landingPage/FAQ/happy.png"
                  alt="Customer using TrustDeliver platform on multiple devices"
                  className="object-cover"
                  width={1440}
                  height={1440}
                  priority
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search Section */}
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

            {/* Main Services */}
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
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="flex-shrink-0 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="cursor-pointer text-sm leading-tight font-medium text-black transition-colors hover:text-blue-600">
                        <Link href={`/blogs/${item.id}`}>{item.title}</Link>
                      </h4>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tags */}
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
        </div>
      </div>
    </div>
  );
}
