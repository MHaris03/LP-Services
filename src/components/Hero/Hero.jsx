import { Phone, Star, ShieldCheck, BadgeCheck, Truck, Percent } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck size={28} />,
        title: "Licensed & Insured",
        text: "Your property is fully protected",
    },
    {
        icon: <BadgeCheck size={28} />,
        title: "Fully Bonded",
        text: "Trusted professionals",
    },
    {
        icon: <Truck size={28} />,
        title: "Fast Same-Day Service",
        text: "Quick & reliable response",
    },
    {
        icon: <Percent size={28} />,
        title: "10% Discount",
        text: "For seniors & students",
    },
];

export default function Hero() {
    return (
        <section
            className="relative min-h-[95vh] flex items-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2070&auto=format&fit=crop')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Reliable Hauling & Junk Removal Services
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                        We help homeowners and businesses remove unwanted items quickly,
                        safely, and affordably. From furniture to full cleanouts, we handle
                        it all.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg transition">
                            <Phone size={18} />
                            Call Now: +1 406-698-1112
                        </button>

                        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg transition">
                            <Star size={18} />
                            Read Our Reviews
                        </button>
                    </div>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="absolute -bottom-16 left-0 right-0 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-xl p-6 text-center hover:-translate-y-2 transition duration-300"
                        >
                            <div className="text-indigo-600 mb-4 flex justify-center">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-lg text-gray-800">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
