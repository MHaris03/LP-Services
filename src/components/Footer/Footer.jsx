import { Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Footer() {

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact-us" },
    { name: "Testimonial", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "Gallery", path: "/gallery" }
  ];

  const services = [
    { name: "Appliance Disposal", path: "appliance-disposal-billings-mt" },
    { name: "Electronic Disposal", path: "electronic-disposal-billings-mt" },
    { name: "Junk Pickup", path: "junk-pickup-billings-mt" },
    { name: "Christmas Tree Disposal", path: "christmas-tree-disposal-billings-mt" },
    { name: "Furniture Disposal", path: "furniture-disposal-billings-mt" },
    { name: "Dumpster Rental", path: "dumpster-rental-billings-mt" },
    { name: "Mattress Disposal", path: "mattress-disposal-billings-mt" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 text-gray-700">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Branding */}
        <div className="space-y-4">
          <img
            src={Logo}
            alt="LP Services Logo"
            className="h-28 w-28 object-contain"
          />

          <p className="text-gray-800 text-lg font-medium leading-7 space-y-1">
            <span className="block text-2xl font-bold text-gray-700">
              LP Services Hauling & Installing
            </span>

            <span className="block text-gray-600">
              Billings, MT 59101
            </span>

            <span className="block">
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              <a
                href="tel:+14066981112"
                className="text-gray-700 font-semibold hover:text-indigo-800 transition"
              >
                +1 406-698-1112
              </a>
            </span>

            <span className="block">
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              <a
                href="mailto:leroylpservices@gmail.com"
                className="text-gray-700 font-semibold hover:text-indigo-800 transition"
              >
                leroylpservices@gmail.com
              </a>
            </span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-md text-bold transition ${isActive
                      ? "text-indigo-700 font-semibold"
                      : "text-gray-800 hover:text-indigo-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            {services.map((service, i) => (
              <li key={i}>
                <NavLink
                  to={`/${service.path}`}
                  className={({ isActive }) =>
                    `text-md text-bold transition ${isActive
                      ? "text-indigo-700 font-semibold"
                      : "text-gray-800 hover:text-indigo-600"
                    }`
                  }
                >
                  {service.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + CTA */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Connect With Us
          </h3>

          <div className="flex gap-4 mb-6">
            <a
              href="https://www.facebook.com/LPSERVICESHAULINGJUNKREMOVEL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow hover:bg-indigo-600 hover:text-white transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://maps.app.goo.gl/b5aV3N2QaTNMvBSQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow hover:bg-indigo-600 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.35 11.1h-9.18v2.92h5.27c-.23 1.47-1.72 4.3-5.27 4.3-3.17 0-5.76-2.63-5.76-5.87s2.59-5.87 5.76-5.87c1.81 0 3.02.77 3.72 1.44l2.54-2.46C16.94 3.88 14.84 3 12.17 3 6.94 3 2.75 7.19 2.75 12.45S6.94 21.9 12.17 21.9c6.94 0 9.63-4.86 9.63-7.36 0-.5-.05-.87-.12-1.24z" />
              </svg>
            </a>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Get a Free Estimate
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300">
        <p className="text-center text-gray-800 text-md text-bold py-4">
          © {new Date().getFullYear()} LP Services Hauling & Installing |
          Billings, MT 59101. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}