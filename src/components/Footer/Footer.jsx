import { Facebook, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png"

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
          {/* <h2 className="text-2xl font-bold text-gray-900">LP Services</h2> */}
          <img
            src={Logo}
            alt="LP Services Logo"
            className="h-32 w-32 object-contain"
          />
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
          <div className="flex gap-2">
            <a href="https://www.facebook.com/LPSERVICESHAULINGJUNKREMOVEL" target="blank" className="hover:text-gray-900 transition">
              <Facebook size={24} />
            </a>

            <a class="social-icon socials-on hover:text-gray-900 transition"
              href="https://maps.app.goo.gl/b5aV3N2QaTNMvBSQ8"
              target="_blank"
              rel="nofollow">

              <i class="fa-brands fa-google outline-icon text-xl"></i>
            </a>
          </div>
          <button className="mt-4 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
            Get a Free Estimate
          </button>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-300 mt-8">
        <p className="text-center text-gray-900 text-lg py-4">
          © {new Date().getFullYear()} LP Services Hauling & Installing | Billings, MT 59101. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
