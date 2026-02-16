import {
    CheckCircle,
    Clock,
    Leaf,
    DollarSign,
    Users,
    MapPin,
    ClipboardList,
    FileText,
    CalendarCheck,
    Truck,
    SearchCheck,
    CreditCard,
} from "lucide-react";
import Area from '../assets/area.webp'
import Expert from '../assets/expert.webp'

export default function WhyChooseUsSection() {
    return (
        <section className="bg-white py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* ================= WHY CHOOSE US ================= */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <img
                            src={Expert}
                            alt="Professional hauling team"
                            className="rounded-2xl shadow-2xl w-full h-[350px] sm:h-[450px] object-cover"
                        />
                        <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-indigo-600 text-white px-5 py-2 rounded-xl shadow-lg text-sm sm:text-base">
                            Trusted Local Experts
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Why Choose Us for Your Hauling Needs?
                        </h2>

                        <p className="text-gray-600 mb-8 leading-relaxed text-base sm:text-lg">
                            We make hauling simple and stress-free. Our team focuses on
                            efficiency, clear communication, and respect for your property.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-5">
                            {[
                                { icon: Clock, text: "Quick turnaround times" },
                                { icon: Leaf, text: "Eco-friendly practices" },
                                { icon: DollarSign, text: "Transparent pricing" },
                                { icon: Users, text: "Tailored services" },
                                { icon: CheckCircle, text: "Professional outcomes" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <item.icon className="text-indigo-600 shrink-0" />
                                    <span className="text-gray-700">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* ================= HOW WE WORK ================= */}
                <div className="bg-gray-50 rounded-3xl px-6 sm:px-10 lg:px-16 py-16">

                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How We Get the Job Done
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A clear process ensures every project runs smoothly from start to finish.
                        </p>
                    </div>

                    <div className="relative">

                        {/* Line (Desktop Only) */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-indigo-200"></div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 relative">
                            {[
                                { icon: ClipboardList, text: "Assess Your Needs" },
                                { icon: FileText, text: "Create Custom Plan" },
                                { icon: CalendarCheck, text: "Schedule Time" },
                                { icon: Truck, text: "Service Execution" },
                                { icon: SearchCheck, text: "Final Review" },
                                { icon: CreditCard, text: "Transparent Billing" },
                            ].map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                                        <step.icon className="text-indigo-600" size={22} />
                                    </div>

                                    <div className="mt-4 text-indigo-600 font-semibold text-sm">
                                        Step {index + 1}
                                    </div>

                                    <p className="mt-2 text-gray-700 text-sm">
                                        {step.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* ================= SERVICE AREAS ================= */}
                <div className="bg-gray-50 rounded-3xl px-6 sm:px-10 lg:px-16 py-16">

                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            We Serve the Surrounding Areas
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Reliable hauling services within a 75–80 mile radius.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Cities */}
                        <div className="grid sm:grid-cols-2 gap-5">
                            {[
                                "Lockwood, MT",
                                "Laurel, MT",
                                "Park City, MT",
                                "Shepherd, MT",
                                "Pryor, MT",
                                "Huntley, MT",
                                "Park, MT",
                                "Roundup, MT",
                            ].map((city, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                                >
                                    <div className="w-9 h-9 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full">
                                        <MapPin size={18} />
                                    </div>
                                    <span className="text-gray-800 font-medium text-sm sm:text-base">
                                        {city}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <img
                                src={Area}
                                alt="Service area map"
                                className="rounded-2xl shadow-2xl w-full h-[350px] sm:h-[450px] object-cover"
                            />
                            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm sm:text-base">
                                Serving MT & Surrounding Areas
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
