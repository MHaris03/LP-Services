import ServiceDetailPage from "../components/ServiceDetail/ServiceDetail";

const furnitureService = {
  title: "Furniture Disposal",
  title2: "Hassle-Free Furniture Removal",
  title3: "Residential & Commercial Pickup",
  title4: "Careful Handling & Responsible Disposal",
  title5: "Reliable Furniture Disposal in Billings, MT",

  images: [
    "https://images.unsplash.com/photo-1582582494700-3d3f9f0f2f9f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
  ],

  description: `Getting rid of old or unwanted furniture can be challenging, especially when dealing with heavy or bulky items. LP Services Hauling & Installing provides dependable furniture disposal in Billings, MT and surrounding areas. Whether you're replacing a single item or clearing out an entire property, our team ensures safe, efficient, and stress-free removal.`,

  paragraph: `From sofas and mattresses to dining tables, dressers, office desks, and more, we handle furniture of all sizes. Our crew takes care of lifting, loading, and transportation so you don’t risk injury or damage to your property. We work carefully to protect walls, floors, and doorways during every pickup.`,

  paragraph2: `If you're renovating, moving, downsizing, or cleaning out an office space, professional furniture removal makes the process easier. We offer prompt service and flexible scheduling to fit your timeline. No need to struggle with hauling large pieces yourself or arranging multiple trips to disposal sites.`,

  paragraph3: `Whenever possible, we focus on responsible disposal practices. Usable furniture may be directed toward donation opportunities, while other materials are sorted for recycling. Our goal is to minimize landfill waste and support environmentally conscious solutions for our community.`,

  paragraph4: `Our experienced team is trained in proper lifting techniques and safety procedures. With the right equipment and a careful approach, we complete each job efficiently and professionally. Customer satisfaction and dependable service remain our top priorities.`,

  paragraph5: `If you're in Billings, MT and need reliable furniture disposal, LP Services is ready to help. Call us today at +1 406-698-1112 to schedule your pickup. Let us handle the heavy lifting so you can enjoy a cleaner, more organized space.`
};

export default function FurnitureDisposalPage() {
  return <ServiceDetailPage service={furnitureService} />;
}
