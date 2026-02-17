import { Facebook, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact-us" },
    { name: "Testimonial", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "Gallery", path: "/gallery" }
  ];
  return (
    <footer className="bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Branding */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">LP Services</h2>
          <p className="text-gray-700">
            Billings, MT 59101<br />
            Phone:{" "}
            <a href="tel:+14066981112" className="text-gray-700">
              +1 406-698-1112
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:leroylpservices@gmail.com"
              className="text-gray-700"
            >
              leroylpservices@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative group hover:text-gray-900 transition ${isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
                    }`
                  }
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & CTA */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/LPSERVICESHAULINGJUNKREMOVEL" target="blank" className="hover:text-gray-900 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-900 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-900 transition">
              <Linkedin size={24} />
            </a>
          </div>
          <button className="mt-4 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
            Get a Free Estimate
          </button>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-300 mt-8">
        <p className="text-center text-gray-500 text-sm py-4">
          © {new Date().getFullYear()} LP Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
