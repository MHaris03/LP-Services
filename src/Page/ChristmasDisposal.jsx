import ServiceDetailPage from "../components/ServiceDetail/ServiceDetail";
import Electricimg from "../assets/chris-tree.avif"
import Apllian from "../assets/tree-chris.avif"

const christmasTreeService = {
  title: "Christmas Tree Disposal",
  title2: "Easy Post-Holiday Cleanup",
  title3: "Safe & Quick Tree Removal",
  title4: "Eco-Friendly Disposal Solutions",
  title5: "Christmas Tree Disposal in Billings, MT",

 images: [
    Electricimg,
    Apllian,
  ],

  description: `After the holidays, disposing of your Christmas tree can quickly become an inconvenience. Dry needles, heavy branches, and limited disposal options make removal more difficult than expected. LP Services Hauling & Installing offers reliable Christmas tree disposal in Billings, MT and nearby areas, making post-holiday cleanup simple and stress-free.`,

  paragraph: `Our team handles tree removal safely and efficiently. Whether your tree is natural or artificial, we carefully remove it from your home without leaving behind mess or damage. No need to drag it through doorways or worry about fallen needles. We take care of the heavy lifting so you can relax after the holiday season.`,

  paragraph2: `Natural trees can often be recycled into mulch or compost instead of being sent to a landfill. We prioritize environmentally responsible disposal whenever possible, helping reduce waste while supporting sustainable practices in our community.`,

  paragraph3: `If your tree is large or fully decorated, we recommend removing ornaments, lights, and stands before pickup. Clearing a path for easy access also helps speed up the process. Our experienced crew works efficiently to ensure your home stays clean and undamaged during removal.`,

  paragraph4: `We understand that after a busy holiday season, the last thing you want is another task on your list. That’s why we offer flexible scheduling and dependable service. From single tree pickups to neighborhood collection assistance, we’re ready to help.`,

  paragraph5: `Residents of Billings, MT can count on LP Services for quick and professional Christmas tree disposal. Call us today at +1 406-698-1112 to schedule your pickup. Let us handle the cleanup while you enjoy a fresh start to the new year.`
};

export default function ChristmasTreePage() {
  return <ServiceDetailPage service={christmasTreeService} />;
}
