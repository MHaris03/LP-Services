import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import AppliancePage from "./Page/Appliance";
import GalleryPage from "./Page/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="appliance-disposal-billings-mt" element={<AppliancePage />} />
          <Route path="gallery" element={<GalleryPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
