import Hero from "../components/Hero/Hero";
import useSeo from "../components/hooks/useSeo";
import AboutSection from "./AboutSection";
import Contactus from "./ContactUs";
import ServicesSection from "./ServiceSection";
import WhyChooseUsSection from "./WhyChoose";

export default function Home() {
  useSeo({
    title:
      "LP Services Hauling & Installing | Professional Hauling Services in Billings, MT",
    description:
      "LP Services Hauling & Installing provides reliable hauling, junk removal, and professional installation services in Billings, Montana. Fast, affordable, and trusted local service.",
    keywords:
      "Hauling services Billings MT, Junk removal Billings, Installation services Montana, Furniture installation Billings, Local hauling company, LP Services Billings",
    canonical: "https://lpserviceshaulinginstalling.com/",
    author: "LP Services Hauling & Installing",
    robots: "index, follow",
    image: "https://lpserviceshaulinginstalling.com/og-image.jpg", 
    url: "https://lpserviceshaulinginstalling.com/",
  });

  return (
    <>
      <Hero />
      <div className="mt-20">
        <AboutSection />
      </div>
      <ServicesSection />
      <WhyChooseUsSection />
      <Contactus />
    </>
  );
}