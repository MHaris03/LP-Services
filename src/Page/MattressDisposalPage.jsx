import ServiceDetailPage from "../components/ServiceDetail/ServiceDetail";
import Electricimg from "../assets/Mattress-Disposal.webp"
import Apllian from "../assets/Mattress.avif"

const mattressService = {
  title: "Mattress Disposal",
  title2: "Safe & Hassle-Free Mattress Removal",
  title3: "Quick Pickup for Homes & Apartments",
  title4: "Responsible & Eco-Conscious Disposal",
  title5: "Professional Mattress Disposal in Billings, MT",

  images: [
    Electricimg,
    Apllian,
  ],

  description: `Disposing of an old mattress can be more difficult than expected. Mattresses are bulky, heavy, and often difficult to transport without the right equipment. LP Services Hauling & Installing provides reliable mattress disposal in Billings, MT and surrounding areas, making removal simple and stress-free.`,

  paragraph: `Whether you’re replacing a single mattress, upgrading an entire bedroom set, or clearing out a rental property, our team handles the heavy lifting. We carefully remove mattresses and box springs from homes, apartments, and commercial spaces without causing damage to walls, floors, or doorways.`,

  paragraph2: `Improper mattress disposal can take up valuable landfill space. Whenever possible, we prioritize responsible disposal methods, including recycling components like metal springs, wood frames, and fabric materials. Our goal is to reduce environmental impact while providing efficient service.`,

  paragraph3: `Preparing for pickup is simple. We recommend removing bedding and ensuring clear access paths for quick removal. Our experienced crew works efficiently, navigating stairs and tight spaces safely so the job is completed without hassle.`,

  paragraph4: `Customer satisfaction is always our priority. With flexible scheduling, transparent pricing, and dependable service, we make mattress removal easy from start to finish. No need to struggle with lifting or arranging transportation yourself.`,

  paragraph5: `If you’re in Billings, MT and need professional mattress disposal, LP Services is ready to help. Call us today at +1 406-698-1112 to schedule your pickup. Let us handle the heavy work so you can enjoy a cleaner, refreshed space.`
};

export default function MattressDisposalPage() {
  return <ServiceDetailPage service={mattressService} />;
}
