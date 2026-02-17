import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import AppliancePage from "./Page/Appliance";
import GalleryPage from "./Page/Gallery";
import ElectronicPage from "./Page/Electronic";
import JunkPickupPage from "./Page/JunkPickup";
import ChristmasTreePage from "./Page/ChristmasDisposal";
import FurnitureDisposalPage from "./Page/FurnitureDisposal";
import DumpsterRentalPage from "./Page/DumpsterRentalPage";
import MattressDisposalPage from "./Page/MattressDisposalPage";
import TestimonialPage from "./Page/Testimonial";
import ContactPage from "./Page/ContactForm";
import FAQPage from "./Page/Faq";
import ScrollToTop from "./Page/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="appliance-disposal-billings-mt" element={<AppliancePage />} />
          <Route path="electronic-disposal-billings-mt" element={<ElectronicPage />} />
          <Route path="junk-pickup-billings-mt" element={<JunkPickupPage />} />
          <Route path="christmas-tree-disposal-billings-mt" element={<ChristmasTreePage />} />
          <Route path="furniture-disposal-billings-mt" element={<FurnitureDisposalPage />} />
          <Route path="dumpster-rental-billings-mt" element={<DumpsterRentalPage />} />
          <Route path="mattress-disposal-billings-mt" element={<MattressDisposalPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="testemonials" element={<TestimonialPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
