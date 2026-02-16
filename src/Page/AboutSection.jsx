import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Soft Background Accent */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-indigo-600 rounded-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1974&auto=format&fit=crop"
              alt="Professional movers unloading truck"
              className="relative rounded-xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-indigo-600 font-semibold uppercase tracking-wider mb-4">
              About Our Company
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Trusted Hauling & Junk Removal Specialists
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide dependable hauling, junk removal, furniture disposal,
              and cleanout services for homes and businesses. Our team works
              efficiently while ensuring your space stays protected and clean.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Fully licensed and insured, we focus on honest pricing, fast
              scheduling, and outstanding service from start to finish.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Licensed & Insured",
                "Same-Day Availability",
                "Affordable Pricing",
                "Eco-Friendly Disposal",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-indigo-600" />
                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg shadow-lg transition">
              <Link to='/about'>
                Learn More About Us

              </Link>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
