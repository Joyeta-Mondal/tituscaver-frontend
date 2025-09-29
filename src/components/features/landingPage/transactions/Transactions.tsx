import { Button } from "@/components/ui/button";

export default function Transactions() {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-20 sm:px-6 lg:px-8">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
          Ready to Experience Secure Transactions?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-pretty text-gray-200 sm:text-xl">
          Join thousands of businesses who trust our platform for safe, reliable, and efficient
          transaction processing.
        </p>

        <Button
          size="lg"
          className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
