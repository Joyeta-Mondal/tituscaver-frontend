import GetStartedButton from "@/components/reusable/GetStartedButton";
import Image from "next/image";

interface NewsItem {
  title: string;
  image: string;
  category: string;
}

interface ServiceItem {
  title: string;
  description: string;
}

interface EscrowTransactionFlowProps {
  newsItems?: NewsItem[];
  services?: ServiceItem[];
}

const defaultNewsItems: NewsItem[] = [
  {
    title: "Top 5 Challenges Facing B2B Buyers and Sellers",
    image: "/business-meeting-collaboration.png",
    category: "Business",
  },
  {
    title: "The State of Sale-This Country Banking Trends",
    image: "/banking-technology.png",
    category: "Banking",
  },
  {
    title: "Exploring Digital Spend Marketplace: A Comprehensive Guide",
    image: "/digital-marketplace.png",
    category: "Technology",
  },
];

const defaultServices: ServiceItem[] = [
  { title: "Online Escrow Services", description: "Secure online transactions" },
  { title: "Fast - Easy Payment Tracking", description: "Real-time payment monitoring" },
  { title: "Buyer Protection", description: "Complete buyer security" },
  { title: "Seller Protection", description: "Guaranteed seller payments" },
  { title: "International Transactions", description: "Global payment solutions" },
  { title: "API Integration", description: "Seamless system integration" },
];

export default function ServiceDetails({
  newsItems = defaultNewsItems,
  services = defaultServices,
}: EscrowTransactionFlowProps) {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Flow Diagram */}
              <Image
                src="/images/landingPage/ServiceDetails/flow.png"
                alt="Escrow Flow Diagram"
                width={800}
                height={500}
                className="mx-auto mt-6"
              />

              {/* Content Section */}
              <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">How It Works</h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p className="text-sm leading-relaxed sm:text-base">
                    Our buyer and seller agree on the transaction details, including the price, the
                    delivery, the return policy and the delivery date. The transaction is then
                    started and both parties are notified.
                  </p>

                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                      Shipping and Delivery
                    </h4>
                    <p className="text-sm leading-relaxed sm:text-base">
                      The Purchaser submits payment to be deposited into their account. As soon as
                      we verify the payment has been deposited, we notify the Seller who is then
                      required to send the merchandise to the Buyer or their agent.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                      Inspection and Acceptance
                    </h4>
                    <p className="text-sm leading-relaxed sm:text-base">
                      Upon receipt of the merchandise, the Purchaser has a predetermined period of
                      time to inspect the merchandise and the option to accept or reject it. If the
                      Purchaser accepts the merchandise, we release the funds to the Seller and the
                      transaction is complete.
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed sm:text-base">
                    Conversely, if the Purchaser rejects the merchandise, the merchandise should be
                    returned to the Seller in its original condition. Once we have confirmed that
                    the Seller has received the returned merchandise, we will refund the
                    Purchaser&apos;s money.
                  </p>
                </div>

                <div className="mt-8">
                  <GetStartedButton
                    text="Benefits for Everyone"
                    href="#"
                    showArrow={true}
                    borderClass="border-[#0051C3]"
                    bgClass="bg-[#2F80ED] hover:bg-[#245cc1]"
                    className="text-sm sm:text-base"
                  />
                </div>

                {/* Benefits Section */}
                <div className="mt-12">
                  <h3 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">Benefits</h3>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="rounded-lg bg-blue-50 p-6">
                      <h4 className="mb-4 text-lg font-semibold text-blue-600">For Buyers</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-sm sm:text-base">
                            Protection from fraud - Your money is held safely until you receive and
                            approve the merchandise
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-sm sm:text-base">
                            Piece of mind - You know that you will receive the merchandise before
                            the Seller gets paid
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-sm sm:text-base">
                            Dispute Resolution - If there are any problems with the transaction, we
                            are here to help resolve them
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-sm sm:text-base">
                            Secure Transactions - All transactions are secured and encrypted
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-blue-50 p-6">
                      <h4 className="mb-4 text-lg font-semibold text-blue-600">For Sellers</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-sm sm:text-base">
                            Guaranteed Payment - You are guaranteed to receive payment once the
                            Buyer accepts the merchandise
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-sm sm:text-base">
                            Reduced Risk - You don&apos;t have to worry about bounced checks or
                            credit card chargebacks
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-sm sm:text-base">
                            Streamlined Process - Our process is simple and easy to use
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-sm sm:text-base">
                            Buyer Verification - All buyers are verified before they can make a
                            purchase
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Enquire/Pricing Form */}
              <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                <h3 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
                  Enquire/Pricing
                </h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    ></textarea>
                  </div>
                  <GetStartedButton
                    text="Send Enquiry"
                    href="#"
                    showArrow={false}
                    borderClass="border-[#0051C3]"
                    bgClass="bg-[#2F80ED] hover:bg-[#245cc1] w-full justify-center"
                    className="text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Our Services */}
              <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                <h3 className="mb-6 text-xl font-bold text-blue-600 sm:text-2xl">OUR SERVICES</h3>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="font-medium text-gray-900">{service.title}</div>
                      <div className="mt-1 text-sm text-gray-600">{service.description}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest News & Blog */}
              <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                <h3 className="mb-6 text-xl font-bold text-blue-600 sm:text-2xl">
                  Latest News & Blog
                </h3>
                <div className="space-y-4">
                  {newsItems.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm leading-tight font-medium text-gray-900">
                          {item.title}
                        </h4>
                        <span className="text-xs text-gray-500">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
