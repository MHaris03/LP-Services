import { useEffect, useState } from "react";
import useSeo from "../components/hooks/useSeo";

export default function TestimonialPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useSeo({
    title:
      "Customer Reviews | LP Services Hauling & Installing in Billings, MT",
    description:
      "Read real customer reviews for LP Services Hauling & Installing in Billings, Montana. See why homeowners and businesses trust us for hauling, junk removal, and installation services.",
    keywords:
      "LP Services reviews Billings MT, Hauling company reviews Billings, Junk removal reviews Montana, Customer testimonials Billings, Installation service reviews Billings",
    canonical: "https://lpserviceshaulinginstalling.com/testimonials",
    author: "LP Services Hauling & Installing",
    robots: "index, follow",
    image: "https://lpserviceshaulinginstalling.com/og-image.jpg",
    url: "https://lpserviceshaulinginstalling.com/testimonials",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-16">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Customer Reviews
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          See what our customers in Billings, MT are saying about LP Services Hauling & Installing.
        </p>
      </div>

      {/* Review Widget */}
      <div className="relative max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-lg min-h-[300px]">

        {/* Loader */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-2xl z-10">
            <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500 text-sm">
              Loading reviews...
            </p>
          </div>
        )}

        <iframe
          className="lc_reviews_widget w-full"
          src="https://reputationhub.site/reputation/widgets/review_widget/0joVrIkfzf7eFcaREHL1"
          frameBorder="0"
          scrolling="no"
          style={{ minWidth: "100%", width: "100%" }}
          title="Customer Reviews"
          onLoad={() => setLoading(false)}
        ></iframe>

      </div>

    </div>
  );
}