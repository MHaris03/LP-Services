import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./Page/ScrollToTop";
import BackToTop from "./Page/BackToTop";

export default function Layout() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <BackToTop/>
            <Footer />
        </>
    );
}
