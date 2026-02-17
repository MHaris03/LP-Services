import ServiceDetailPage from "../components/ServiceDetail/ServiceDetail";
import Appliamceimg from "../assets/appliance.webp"
import Apllian from "../assets/appliance-why.avif"

const applianceService = {
    title: "Appliance Disposal",
    title2: "Simplifying Replacement Projects",
    title3: "Efficient Hauling Services at Your Doorstep",
    title4: "Skilled and Trusted Team",
    title5: "Easy Appliance Disposal in Billings, MT",
    images: [
        Appliamceimg,
        Apllian,
    ],
    description: `Proper appliance removal is essential for both safety and environmental responsibility. Whether you’re in Billings, MT, or surrounding areas, safely managing old appliances matters. LP Services Hauling & Installing ensures every appliance is removed efficiently, responsibly, and in compliance with local regulations. You can trust our team to handle heavy lifting, disposal permits, and eco-friendly recycling when possible.`,

    paragraph: `Planning a home upgrade or replacing old appliances? Our professional hauling services make the process seamless. We handle lifting, transport, and disposal so you can focus on your new appliances. With our trained staff, there’s no risk of damage to your property, and your project stays on schedule. From small kitchen appliances to large refrigerators, we provide quick, careful, and hassle-free removal for all items.`,

    paragraph2: `Reliable service means clear guidance from start to finish. Knowing how to prepare for your pickup—like clearing pathways, unplugging appliances, and arranging easy access—helps our team complete removals quickly and efficiently. This planning reduces surprises and ensures a smooth, stress-free experience. Our staff is always ready to answer your questions and provide helpful tips for appliance preparation.`,

    paragraph3: `Using a professional hauling service offers convenience beyond simply moving items. Our trained teams navigate stairs, tight spaces, and large items effortlessly. No matter the appliance size, location, or complexity, we ensure disposal is organized, safe, and environmentally responsible. Customers enjoy the peace of mind that comes with knowing experts are handling the heavy work with care and precision.`,

    paragraph4: `Our team is skilled, reliable, and prioritizes client satisfaction above all. Each member is trained in proper lifting techniques, safety procedures, and eco-friendly disposal methods. We aim to transform a potentially stressful task into a seamless experience. With well-equipped professionals and years of experience, we take pride in completing every pickup efficiently and responsibly.`,

    paragraph5: `Billings, MT residents and nearby communities can trust LP Services for easy appliance disposal. We offer flexible scheduling, transparent pricing, and exceptional service. Call us today at +1 406-698-1112 to schedule your appointment and enjoy stress-free, professional appliance removal. Let us help you clear space, recycle responsibly, and simplify your home upgrade process.`
};

export default function AppliancePage() {
    return <ServiceDetailPage service={applianceService} />;
}
