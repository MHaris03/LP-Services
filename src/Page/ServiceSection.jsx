import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Appliance from '../assets/appliance-removal-disposal.jpg'
import Electronic from '../assets/disposal.png'
import Junk from '../assets/junk-removal.jpg'
import Tree from '../assets/tree.jpg'
import Serviceimg from '../assets/service-img.avif'

export default function ServicesSection() {

    const services = [
        {
            title: "Appliance Disposal",
            slug: "appliance-disposal-billings-mt",
            description:
                "Safe and efficient removal of old refrigerators, washers, dryers, and other bulky appliances. We handle recycling and proper disposal.",
            image: Appliance,
        },
        {
            title: "Electronic Disposal",
            slug: "electronic-disposal-billings-mt",
            description:
                "Responsible e-waste disposal for computers, TVs, and office equipment. We follow environmentally safe recycling practices.",
            image: Electronic,
        },
        {
            title: "Junk Pickup",
            slug: "junk-pickup-billings-mt",
            description:
                "Quick removal of unwanted furniture, clutter, and debris. Perfect for home cleanouts and business spaces.",
            image: Junk,
        },
        {
            title: "Christmas Tree Disposal",
            slug: "christmas-tree-disposal-billings-mt",
            description:
                "Hassle-free post-holiday cleanup. We safely remove and recycle your Christmas tree so you don’t have to worry about disposal.",
            image: Tree,
        },
    ];

    return (
        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="uppercase text-indigo-600 tracking-wider text-sm mb-3">
                        Our Services
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Professional Hauling Solutions
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We provide reliable, affordable, and efficient hauling services
                        for residential and commercial clients.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-10 mb-16">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>

                                <Link to={`/${item.slug}`}>
                                    <button className="text-indigo-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                                        Learn More <ArrowRight size={16} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Services */}

                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">

                    <div className="grid md:grid-cols-2">

                        {/* LEFT IMAGE */}
                        <div className="relative">
                            <img
                                src={Serviceimg}
                                alt="Professional hauling team"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                                Reliable • Affordable • Fast
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="p-10 flex flex-col justify-center bg-gray-50">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Additional Services
                            </h3>

                            <p className="text-gray-600 mb-8">
                                We offer a wide range of hauling and support services tailored
                                for homes and businesses. No job is too small or too large.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Furniture Disposal",
                                    "Dumpster Rental",
                                    "Yard Waste Removal",
                                    "Loading & Moving Help",
                                    "Delivery Services",
                                    "Installation Services",
                                    "Property Cleanouts",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle size={18} className="text-indigo-600" />
                                        <span className="text-gray-700 font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg w-fit shadow-md transition">
                                Get a Free Estimate
                            </button>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
}
