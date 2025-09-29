export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  details: string;
  date: string;
  image: string;
  category: string;
  author: string;
  tags?: string[];
}

// Additional interface for sidebar news items (simplified version of BlogPost)
export interface SidebarNewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

// Blog post data used for detailed views
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Escrow Protects Both Buyers and Sellers",
    excerpt:
      "Learn how escrow services create a secure environment for online transactions, protecting both parties from fraud and disputes.",
    description:
      "Escrow services act as a neutral third party to protect both buyers and sellers in online transactions.",
    details: `Online transactions have become an integral part of our daily lives, from purchasing goods on e-commerce platforms to engaging in freelance services. However, with the convenience of digital transactions comes the risk of fraud and disputes. This is where escrow services play a crucial role in ensuring secure transactions.

Escrow is a financial arrangement where a neutral third party holds and regulates payment of funds required for two parties involved in a given transaction. It helps build trust between buyers and sellers by acting as a mediator.

How Escrow Works:
1. Agreement: Both parties agree to use an escrow service for their transaction
2. Deposit: The buyer deposits the payment to the escrow account
3. Verification: The seller fulfills their obligation (ships goods, completes service)
4. Confirmation: The buyer confirms receipt and satisfaction
5. Release: The escrow service releases funds to the seller`,
    date: "September 26, 2025",
    image: "/images/landingPage/BlogSection/escrow.png",
    category: "Security",
    author: "Titus Caver Team",
    tags: ["Security", "Escrow", "Online Transactions", "Fraud Protection"],
  },
  {
    id: 2,
    title: "The Power of Real-Time Delivery Tracking",
    excerpt:
      "Discover how advanced tracking systems improve customer satisfaction and build trust in your delivery process.",
    description:
      "Real-time delivery tracking has become a critical feature that can make or break a business's reputation.",
    details: `In today's fast-paced world, customers expect transparency and instant updates about their purchases. Real-time delivery tracking has become a critical feature that can make or break a business's reputation.
`,
    date: "September 26, 2025",
    image: "/images/landingPage/BlogSection/laptop.png",
    category: "Technology",
    author: "Titus Caver Team",
    tags: ["Technology", "Delivery", "Tracking", "Logistics"],
  },
  {
    id: 3,
    title: "Building a Trust-Based Marketplace: A Deeper Look",
    excerpt:
      "Essential strategies for creating and growing a trustworthy online marketplace that customers can rely on.",
    description:
      "Trust is the foundation of any successful marketplace and requires consistent effort to maintain.",
    details: `Trust is the foundation of any successful marketplace. Without it, buyers and sellers have no reason to engage, and the platform will fail to gain traction.

The Trust Equation:
Trust in marketplaces is built on four key components:
1. Reliability: Consistent performance over time
2. Integrity: Honesty and ethical behavior
3. Competence: Ability to deliver on promises
4. Empathy: Understanding and caring about user needs
`,
    date: "September 26, 2025",
    image: "/images/landingPage/BlogSection/delivery.png",
    category: "Business",
    author: "Titus Caver Team",
    tags: ["Business", "Marketplace", "Trust", "Strategy"],
  },
];

// Simplified blog data for sidebar news section (matching BlogPageSection component)
export const sidebarNews: SidebarNewsItem[] = [
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

// Services data (matching BlogPageSection component)
export const services = [
  "Online Escrow Services",
  "Fast - Easy Payment Tracking",
  "Professional Dispute Resolution",
  "Marketplace Integration",
  "Professional Online Network",
  "24/7 Customer Support",
];

// Tags data (matching BlogPageSection component)
export const tags = [
  "Business",
  "Business",
  "Business",
  "Business",
  "Business",
  "Business",
  "Business",
];
