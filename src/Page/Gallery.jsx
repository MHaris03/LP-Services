import React, { useState } from "react";

const galleryImages = Array.from(
    { length: 16 },
    (_, i) => `/Gallery/gallery (${i + 1}).webp`
);

export default function GalleryPage() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openImage = (index) => {
        setCurrentIndex(index);
        setSelectedImg(galleryImages[index]);
    };

    const showNext = (e) => {
        e.stopPropagation(); // prevent closing lightbox
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setCurrentIndex(nextIndex);
        setSelectedImg(galleryImages[nextIndex]);
    };

    const showPrev = (e) => {
        e.stopPropagation(); // prevent closing lightbox
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentIndex(prevIndex);
        setSelectedImg(galleryImages[prevIndex]);
    };


    return (
        <div className="bg-gray-50 min-h-screen px-4 py-12 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                Gallery
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {galleryImages.map((img, idx) => (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                        onClick={() => openImage(idx)}
                    >
                        <img
                            src={img}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImg && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2"
                    onClick={() => setSelectedImg(null)}
                >
                    {/* Previous Button */}
                    <button
                        onClick={showPrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold p-3 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
                    >
                        ‹
                    </button>

                    {/* Image */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImg}
                            alt={`Gallery ${currentIndex + 1}`}
                            className="w-full h-full object-contain rounded-lg"
                        />
                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                            {currentIndex + 1} / {galleryImages.length}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={showNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold p-3 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}
