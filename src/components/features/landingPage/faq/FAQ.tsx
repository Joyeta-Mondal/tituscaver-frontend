"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does TrustDeliver's escrow service work?",
      answer:
        "TrustDeliver holds your payment securely until the item is delivered and confirmed. This protects both buyers and sellers by ensuring payment only after successful delivery, protecting both parties from fraud.",
    },
    {
      question: "What happens if my item is damaged or not as described?",
      answer:
        "If the item doesn't match the description or arrives damaged, you can dispute the transaction. Our team reviews the case and may authorize a refund or require the seller to provide a replacement.",
    },
    {
      question: "How can I track my delivery?",
      answer:
        "Once the seller ships your item, you'll receive tracking information through our platform. You can monitor your package's progress in real-time through your TrustDeliver dashboard.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, debit cards, bank transfers, and digital wallets. All payments are processed securely through our encrypted payment system.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50">
      <div className=""></div>
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-4">
        {/* FAQ Content */}
        <div className="mx-auto mb-8 max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-24">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-0.5 w-12 bg-blue-500"></div>
              <span className="text-sm font-medium tracking-wide text-blue-600 uppercase">FAQ</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-gray-50"
                >
                  <span className="pr-4 font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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
      </div>
    </section>
  );
}
