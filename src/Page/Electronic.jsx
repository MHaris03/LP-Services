import ServiceDetailPage from "../components/ServiceDetail/ServiceDetail";

const electronicService = {
  title: "Electronic Disposal",
  title2: "Safe & Responsible E-Waste Removal",
  title3: "Fast Pickup for Homes & Businesses",
  title4: "Certified & Eco-Conscious Team",
  title5: "Reliable Electronic Disposal in Billings, MT",

  images: [
    "https://images.unsplash.com/photo-1581092588427-1b3d9c4b6c1f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1200&q=80"
  ],

  description: `Proper electronic disposal is critical for protecting both the environment and your personal data. Old TVs, computers, printers, and other electronics contain materials that require special handling. LP Services Hauling & Installing provides safe, responsible e-waste removal in Billings, MT and surrounding areas. We ensure items are handled in accordance with local regulations and recycling standards.`,

  paragraph: `Upgrading your office equipment or replacing outdated home electronics? Our hauling team makes the process simple. We carefully remove heavy or bulky items without damaging walls, floors, or workspaces. From flat-screen TVs to full office setups, we provide efficient pickup and transport so you can focus on your upgrade without stress.`,

  paragraph2: `Electronic waste often contains hazardous components such as batteries, circuit boards, and metals that should never go to a regular landfill. Our team prioritizes eco-friendly recycling whenever possible. We separate materials properly and work with appropriate facilities to ensure responsible disposal that reduces environmental impact.`,

  paragraph3: `Data security matters. When disposing of computers, hard drives, or business equipment, protecting sensitive information is essential. We recommend removing personal data beforehand, and we can guide you through preparation steps. Our professional handling ensures your electronics are transported safely and securely.`,

  paragraph4: `Our trained team understands the complexity of electronic disposal. We are experienced in handling fragile screens, tangled wiring systems, and large office equipment. With proper lifting techniques and careful planning, we complete every pickup efficiently and professionally.`,

  paragraph5: `Residents and businesses in Billings, MT can rely on LP Services for dependable electronic disposal. We offer flexible scheduling, fair pricing, and prompt service. Call us today at +1 406-698-1112 to schedule your pickup and dispose of your electronics safely and responsibly. Let us help you clear space while protecting the environment.`
};

export default function ElectronicPage() {
  return <ServiceDetailPage service={electronicService} />;
}
