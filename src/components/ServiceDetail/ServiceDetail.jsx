import React from "react";
import { Link } from "react-router-dom";

/* Example services list for sidebar */
const servicesList = [
  { title: "Appliance Disposal", slug: "appliance-disposal" },
  { title: "Electronic Disposal", slug: "electronic-disposal" },
  { title: "Junk Pickup", slug: "junk-pickup" },
  { title: "Christmas Tree Disposal", slug: "christmas-tree-disposal" },
  { title: "Furniture Disposal", slug: "furniture-disposal" },
  { title: "Dumpster Rental", slug: "dumpster-rental" },
  { title: "Mattress Disposal", slug: "mattress-disposal" },
];

/* ===== Reusable Service Detail Page ===== */
export default function ServiceDetailPage({ service }) {
  return (
    <section className="bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 py-6 md:py-12 px-4 sm:px-6 lg:px-12 flex justify-center">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-4 sm:px-6 lg:px-0">

        {/* MAIN CONTENT */}
        <div className="flex-1 space-y-10">

          {/* SECTION 1 */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {/* Effortless Appliance Disposal */}
              {service.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.description}
              {/*  */}
            </p>
            <img
              src={service.images[0]}
              alt="Appliance Disposal"
              className="rounded-3xl shadow-2xl w-full h-72 md:h-96 object-cover"
            />
          </div>

          {/* SECTION 2 */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {service.title2}
              {/* Simplifying Replacement Projects */}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.paragraph}
              {/* Planning a home upgrade? Using professional hauling services simplifies appliance replacement, making room for new units. Experts handle lifting and disposal, protecting your property and ensuring a smooth transition. Quick, careful, and hassle-free removal whenever timing matters. */}
            </p>
          </div>

          {/* SECTION 3 */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose LP Services
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.paragraph2}
            </p>
            <img
              src={service.images[1]}
              alt="Professional Appliance Disposal"
              className="rounded-3xl shadow-2xl w-full h-72 md:h-96 object-cover"
            />
          </div>

          {/* SECTION 4 */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {service.title3}

            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.paragraph3}
            </p>
          </div>

          {/* SECTION 5 */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {service.title4}

            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.paragraph4}
            </p>
          </div>

          {/* SECTION 6 */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {service.title5}

            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.paragraph5}
            </p>
          </div>

        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block w-80 sticky top-32 self-start">
          <div className="bg-white rounded-3xl shadow-2xl p-6 space-y-3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Services</h3>
            <ul className="space-y-3">
              {servicesList.map((srv, idx) => (
                <li key={idx}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className={`block px-4 py-3 rounded-xl font-medium transition hover:bg-gradient-to-r hover:from-[#1455c0] hover:to-[#1e6edc] hover:text-white ${srv.title === service.title
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-700"
                      }`}
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
