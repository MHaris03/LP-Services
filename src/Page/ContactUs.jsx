import { CheckCircle } from "lucide-react";

export default function Contactus() {
  return (
    <section className="relative bg-gray-50 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT HERO & Services */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            LP Services Hauling & Installing
          </h1>
          <p className="text-gray-700 text-lg">
            Billings, MT 59101<br/>
            Phone: (406) 698-1112
          </p>

          {/* Services List as Themed Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {[
              "Appliance Disposal", "Electronic Disposal", "Junk Pickup",
              "Christmas Tree Disposal", "Furniture Disposal", "Dumpster Rental",
              "Mattress Disposal", "Installing & Moving", "Janitorial", "Dust Removal",
              "Debris Removal", "Delivery", "Hauling", "Installation Services",
              "Moving Services", "Handyman Service", "Facility Management"
            ].map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-blue-50 border border-blue-400 rounded-lg px-4 py-2 shadow hover:bg-gradient-to-r hover:from-[#1455c0] hover:to-[#1e6edc] hover:text-white transition cursor-pointer"
              >
                <CheckCircle className="text-blue-600 group-hover:text-white" size={18} />
                <span className="text-gray-800 group-hover:text-white text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-t-8 border-blue-600 relative">

          <div className="flex gap-2 mb-6">
            <button className="bg-gradient-to-r from-[#1455c0] to-[#1e6edc] hover:from-[#0f3d8a] hover:to-[#164fae] text-white px-5 py-2 rounded-lg font-semibold shadow">
              Get a Free Estimate
            </button>
            <span className="flex-1 text-center bg-blue-800 text-white px-5 py-2 rounded-lg font-semibold shadow">
              Relocation made easy
            </span>
          </div>

          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone (optional)"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />

            <textarea
              placeholder="Your message (Minimum 5 Characters)"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />

            {/* <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Enter Captcha Code"
                className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <img
                src="/assets/captcha-placeholder.png"
                alt="captcha"
                className="border border-gray-300 rounded-lg"
              />
            </div> */}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1455c0] to-[#1e6edc] hover:from-[#0f3d8a] hover:to-[#164fae] text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Send Message
            </button>
          </form>

          {/* Floating CTA Box */}
          {/* <div className="absolute top-0 right-0 mt-6 mr-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 rounded-xl shadow-md hidden md:block">
            <p className="font-semibold">Talk with a professional</p>
            <p className="text-sm">Get a free estimate or info you need instantly!</p>
          </div> */}
        </div>

      </div>
    </section>
  );
}
