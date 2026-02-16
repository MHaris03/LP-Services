import { useState } from "react";
import { Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const services = [
    { title: "Appliance Disposal", slug: "appliance-disposal-billings-mt" },
    { title: "Electronic Disposal", slug: "electronic-disposal" },
    { title: "Junk Pickup", slug: "junk-pickup" },
    { title: "Christmas Tree Disposal", slug: "christmas-tree-disposal" },
    { title: "Furniture Disposal", slug: "furniture-disposal" },
    { title: "Dumpster Rental", slug: "dumpster-rental" },
    { title: "Mattress Disposal", slug: "mattress-disposal" },
  ];

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="hidden md:flex justify-between items-center px-8 py-3 bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100 text-sm">
        <div className="flex items-center gap-6 text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-indigo-600" />
            <span>Billings, MT 59101</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={18} className="text-indigo-600" />
            <span>(406) 698-1112</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} className="text-indigo-600" />
            <span>24 Hours Service</span>
          </div>
        </div>

        <button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-5 py-2 rounded-full shadow-md transition">
          Get a Free Estimate
        </button>
      </div>


      {/* MAIN NAVBAR */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white sticky top-0 z-50 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold leading-tight tracking-wide">
            LP Services
            <span className="block text-base font-light text-yellow-400">
              Hauling & Installing
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 relative font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ].map((item) => (
              <li key={item.name} className="relative cursor-pointer group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400"
                      : "group-hover:text-yellow-400 transition"
                  }
                >
                  {item.name}
                </NavLink>

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
              </li>
            ))}

            {/* Services Dropdown */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1">
                Services <ChevronDown size={16} />
              </div>

              <div className="absolute top-8 left-0 bg-white text-gray-800 w-60 shadow-2xl rounded-lg p-4 space-y-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                {services.map((service, i) => (
                  <NavLink
                    key={i}
                    to={`/${service.slug}`}
                    className={({ isActive }) =>
                      `block text-sm font-medium transition ${isActive ? "text-yellow-400" : "text-gray-800 hover:text-yellow-400"
                      }`
                    }
                    onClick={() => setOpen(false)} // optional: close dropdown after click
                  >
                    {service.title}
                  </NavLink>
                ))}
              </div>
            </li>

            {[
              { name: "Testimonials", path: "/" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/" },
              { name: "FAQ", path: "/" },
              { name: "Blog", path: "/" },
            ].map((item) => (
              <li key={item.name} className="relative cursor-pointer group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400"
                      : "group-hover:text-yellow-400 transition"
                  }
                >
                  {item.name}
                </NavLink>

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-indigo-900 px-6 py-4 space-y-4 text-white">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/" },
              { name: "Testimonials", path: "/" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/" },
              { name: "FAQ", path: "" },
              { name: "Blog", path: "/" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 block"
                    : "hover:text-yellow-400 transition block"
                }
                onClick={() => setMobileMenu(false)}
              >
                {item.name}
              </NavLink>
            ))}

          </div>
        )}
      </div>
    </>
  );
}
