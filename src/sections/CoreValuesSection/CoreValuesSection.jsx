import React from "react";
import { ShieldCheck, CheckCircle, Users } from "lucide-react";

const CoreValuesSection = () => {
  return (
    <section className="w-full py-24 px-6 text-center flex flex-col items-center">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
        Our Core Values
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 max-w-2xl mb-12">
        The principles that guide every service we deliver ensuring trust,
        quality, and unmatched customer experience.
      </p>

      {/* Card Container */}
      <div className="w-full max-w-5xl bg-black border border-white/10 rounded-2xl p-10">
        
        {/* 3 Value Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Value 1 */}
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Transparency
            </h3>
            <p className="text-gray-400 text-sm">
              Clear pricing, clear communication, and complete honesty.
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Reliability
            </h3>
            <p className="text-gray-400 text-sm">
              Dependable service you can count on — every single time.
            </p>
          </div>

          {/* Value 3 */}
          <div className="flex flex-col items-center text-center">
            <Users className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Customer-First Service
            </h3>
            <p className="text-gray-400 text-sm">
              Your satisfaction comes first — always.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
