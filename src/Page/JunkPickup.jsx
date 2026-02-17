import ServiceDetailPage from "../components/ServiceDetail/ServiceDetail";
import Electricimg from "../assets/junk-disposal.webp"
import Apllian from "../assets/junk-img.webp"

const junkPickupService = {
  title: "Junk Pickup",
  title2: "Fast & Hassle-Free Junk Removal",
  title3: "Residential & Commercial Cleanouts",
  title4: "Reliable Team You Can Trust",
  title5: "Professional Junk Pickup in Billings, MT",

  images: [
    Electricimg,
    Apllian,
  ],

  description: `Clearing unwanted clutter from your home or business can feel overwhelming. Whether you're dealing with old furniture, broken items, renovation debris, or general household junk, LP Services Hauling & Installing provides dependable junk pickup in Billings, MT and surrounding areas. We handle the heavy lifting, loading, and proper disposal so you don’t have to.`,

  paragraph: `From single-item pickups to full property cleanouts, our team is ready to help. We remove couches, mattresses, appliances, yard waste, construction debris, and more. No job is too small or too large. Our goal is to simplify the process and give you back clean, usable space quickly and efficiently.`,

  paragraph2: `We focus on responsible disposal practices. Whenever possible, items are sorted for donation, recycling, or proper waste management. This approach helps reduce landfill waste and supports environmentally conscious cleanup efforts in our community. You can feel confident knowing your unwanted items are handled the right way.`,

  paragraph3: `Our experienced crew works carefully to protect your property during removal. We navigate tight spaces, stairs, and heavy loads without causing damage to floors, walls, or doorways. With professional equipment and proper lifting techniques, we complete every job safely and efficiently.`,

  paragraph4: `Customer satisfaction is always our priority. We offer flexible scheduling, upfront pricing, and prompt service. Whether you’re preparing for a move, finishing a renovation, or just decluttering your space, we make junk removal simple and stress-free.`,

  paragraph5: `If you're in Billings, MT or nearby communities, trust LP Services for reliable junk pickup. Call us today at +1 406-698-1112 to schedule your service. Let our team handle the heavy work so you can enjoy a cleaner, more organized space.`
};

export default function JunkPickupPage() {
  return <ServiceDetailPage service={junkPickupService} />;
}
