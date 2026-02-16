import React from "react";
import Lorey from "../assets/Leroy-Pena.webp";
import About from "../assets/about-us.webp";

export default function AboutUs() {
    return (
        <section className="bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 py-16 md:py-24 px-4 sm:px-6 md:px-12">

            {/* HERO SECTION */}
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">

                <div className="space-y-6 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        About LP Services Hauling & Installing
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Since 2003, LP Services Hauling & Installing has been proudly serving
                        Billings, Montana with reliable, professional, and affordable hauling
                        and trash removal services. What started as a hardworking local business
                        has grown into a trusted name in waste management, known for getting the job done right every time.
                    </p>
                </div>

                {/* Company Image */}
                <div className="relative">
                    <img
                        src={About}
                        alt="Hauling service truck"
                        className="rounded-3xl shadow-2xl w-full object-cover h-[280px] sm:h-[350px] md:h-[450px]"
                    />
                    <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg">
                        <p className=" font-semibold text-sm sm:text-base">
                            Serving Billings, MT Since 2003
                        </p>
                    </div>
                </div>

            </div>

            {/* COMPANY STORY */}
            <div className="max-w-5xl mx-auto text-center space-y-6 mb-16 md:mb-24 px-2">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Owned and operated by Leroy Pena, LP Services Hauling & Installing is built
                    on strong values: honesty, dependability, and respect for every customer.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    We specialize in junk removal, debris hauling, trash cleanup, and waste
                    hauling services for both residential and commercial clients. No job is
                    too big or too small—we tailor our services to fit your exact needs.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Our experienced team is committed to fast response times, clean work, and
                    professional service. We take pride in helping homeowners, businesses, and
                    contractors keep their properties clean, organized, and clutter-free.
                </p>
            </div>

            {/* CEO SECTION */}
            <div className="max-w-6xl mx-auto mb-16 md:mb-24">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10 md:p-14 grid md:grid-cols-2 gap-10 md:gap-14 items-center border border-blue-100">

                    {/* Image Side */}
                    <div className="relative group order-1 md:order-none">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition"></div>

                        <img
                            src={Lorey}
                            alt="Leroy Pena CEO"
                            className="relative rounded-3xl shadow-xl w-full object-cover h-[300px] sm:h-[400px] md:h-[620px] transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md">
                            <p className="text-xs sm:text-sm font-semibold text-gray-900">
                                Founder & Owner
                            </p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="text-center md:text-left space-y-5">
                        <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide">
                            Leadership
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Meet Leroy Pena
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                            As the owner and operator, Leroy Pena has built LP Services on a foundation
                            of hard work, integrity, and dedication. His commitment to quality workmanship
                            and clear communication has earned the trust of customers across Billings.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                            When you choose LP Services, you’re choosing a company that values long-term
                            customer relationships and delivers dependable hauling services every time.
                        </p>

                        <div>
                            <button className="mt-4 bg-gradient-to-r from-[#1455c0] to-[#1e6edc] hover:from-[#0f3d8a] hover:to-[#164fae] text-white px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                Get a Free Estimate
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* FINAL CTA */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Dependable Hauling Services in Billings, MT
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                    Trust LP Services Hauling & Installing—where experience, hard work,
                    and customer satisfaction come first.
                </p>
                <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 rounded-xl shadow-md font-semibold transition">
                    Contact Us Today
                </button>
            </div>

        </section>
    );
}
