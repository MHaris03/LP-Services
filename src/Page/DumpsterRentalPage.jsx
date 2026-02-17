import ServiceDetailPage from "../components/ServiceDetail/ServiceDetail";

const dumpsterRentalService = {
  title: "Dumpster Rental",
  title2: "Convenient Waste Management Solutions",
  title3: "Perfect for Projects Big & Small",
  title4: "Flexible Scheduling & Transparent Pricing",
  title5: "Reliable Dumpster Rental in Billings, MT",

  images: [
    "https://images.unsplash.com/photo-1597002964013-6c8d9b8b87b8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581091012184-5c3b6d2b1f0a?auto=format&fit=crop&w=1200&q=80"
  ],

  description: `Managing waste during a renovation, construction project, or large cleanout requires a dependable solution. LP Services Hauling & Installing offers convenient dumpster rental services in Billings, MT and surrounding areas. Whether you're tackling a home remodel or a commercial project, we provide the right container to keep your site organized and efficient.`,

  paragraph: `Our dumpsters are ideal for residential cleanouts, roofing jobs, remodeling projects, yard debris removal, and construction waste. Instead of making multiple trips to disposal facilities, you can load everything into one container at your own pace. This saves time, reduces stress, and keeps your property clean throughout your project.`,

  paragraph2: `We offer flexible rental periods to match your schedule. Whether you need a short-term rental for a weekend cleanup or a longer-term solution for an ongoing project, our team works with you to ensure timely delivery and pickup. Clear communication and reliable service are part of every rental.`,

  paragraph3: `Proper waste disposal matters. Our team ensures collected materials are handled responsibly and in accordance with local regulations. We guide customers on what can and cannot be placed in the dumpster to avoid unexpected issues or delays.`,

  paragraph4: `Safety and convenience are priorities. We carefully place dumpsters to minimize disruption to your driveway or job site. Our experienced drivers ensure safe drop-off and pickup while respecting your property and surroundings.`,

  paragraph5: `If you're planning a project in Billings, MT and need dependable dumpster rental services, LP Services is ready to help. Call us today at +1 406-698-1112 to schedule delivery. Let us provide the reliable waste management solution you need to keep your project moving smoothly.`
};

export default function DumpsterRentalPage() {
  return <ServiceDetailPage service={dumpsterRentalService} />;
}
