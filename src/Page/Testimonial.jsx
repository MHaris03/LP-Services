import { useState } from "react";

const googleReviews = [
  {
    name: "John D.",
    rating: 5,
    text: "LP Services did an amazing job removing our old appliances. Fast, professional, and very respectful of our home. Highly recommend!",
    date: "2 weeks ago"
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "We used them for junk pickup and the process was smooth from start to finish. Great communication and fair pricing.",
    date: "1 month ago"
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "Dumpster rental was delivered on time and picked up exactly when scheduled. Excellent service in Billings!",
    date: "3 months ago"
  },
  {
    name: "Emily T.",
    rating: 5,
    text: "Very professional team. They handled heavy furniture removal without any damage. Will definitely call again.",
    date: "4 months ago"
  }
];

export default function TestimonialPage() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-16">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Customer Review
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See what our customers in Billings, MT are saying about LP Services Hauling & Installing.
        </p>

        <div className="mt-4 flex justify-center items-center gap-2">
          <span className="text-yellow-400 text-xl">★★★★★</span>
          <span className="text-gray-700 font-medium">5.0 Rating on Google</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {googleReviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <span className="text-yellow-400">
                {"★".repeat(review.rating)}
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {expanded === index
                ? review.text
                : review.text.slice(0, 120) + "..."}
            </p>

            {review.text.length > 120 && (
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="text-yellow-500 mt-2 text-sm font-medium"
              >
                {expanded === index ? "Show Less" : "Read More"}
              </button>
            )}

            <p className="text-gray-400 text-xs mt-3">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
