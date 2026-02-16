import Hero from "../components/Hero/Hero";
import AboutSection from "./AboutSection";
import Contactus from "./ContactUs";
import ServicesSection from "./ServiceSection";
import WhyChooseUsSection from "./WhyChoose";

export default function Home() {
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
