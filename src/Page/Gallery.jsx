import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useSeo from "../components/hooks/useSeo";

const images = Array.from(
    { length: 16 },
    (_, i) => `/Gallery/gallery (${i + 1}).webp`
);

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const openImage = (index) => {
        setCurrent(index);
        setOpen(true);
    };

    const close = () => setOpen(false);

    const next = () =>
        setCurrent((prev) => (prev + 1) % images.length);

    const prev = () =>
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );

    useSeo({
        title:
            "Project Gallery | LP Services Hauling & Installing in Billings, MT",
        description:
            "View our project gallery showcasing hauling, junk removal, dumpster rentals, and installation services in Billings, Montana. See the quality work completed by LP Services Hauling & Installing.",
        keywords:
            "Hauling projects Billings MT, Junk removal gallery Billings, Dumpster rental projects Montana, Installation services photos Billings, LP Services gallery",
        canonical: "https://lpserviceshaulinginstalling.com/gallery",
        author: "LP Services Hauling & Installing",
        robots: "index, follow",
        image: "https://lpserviceshaulinginstalling.com/og-image.jpg",
        url: "https://lpserviceshaulinginstalling.com/gallery",
    });

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-10">
                    {/* <p className="text-[#e1921f] font-bold tracking-widest text-md mb-3">
                        Gallery
                    </p> */}

                    {/* <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1d3a] leading-tight">
                        Our {" "}
                        <span className="text-[#e1921f]">Gallery</span>
                    </h2> */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Gallery
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl cursor-pointer group"
                            onClick={() => openImage(index)}
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">

                    <button
                        onClick={close}
                        className="absolute top-6 right-6 text-white hover:scale-110 transition"
                    >
                        <X size={36} />
                    </button>

                    <button
                        onClick={prev}
                        className="absolute left-6 text-white hover:scale-110 transition"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <img
                        src={images[current]}
                        alt=""
                        onClick={next}
                        className="w-full h-full object-contain cursor-pointer select-none"
                    />

                    <button
                        onClick={next}
                        className="absolute right-6 text-white hover:scale-110 transition"
                    >
                        <ChevronRight size={48} />
                    </button>
                </div>
            )}
        </section>
    );
}

