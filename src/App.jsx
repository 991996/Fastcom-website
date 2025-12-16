import "./App.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import AboutZTT from "./components/sections/AboutZTT";
import OurSolutionsSection from "./components/sections/OurSolutionsSection";
import Footer from "./components/sections/Footer";
import { useState, useEffect } from "react";
import { SheetContext } from "./context/SheetContext";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrolled / height) * 100;
      setScrollY(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  const [openSheet, setOpenSheet] = useState(false);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <Loader />
      </div>
    );
  }

  return (
    <SheetContext.Provider value={{ openSheet, setOpenSheet }}>
      <HomeSection />
      <AboutSection />
      <AboutZTT />
      <OurSolutionsSection />
      <Footer />
      <BackToTop scroll={scrollY} />
    </SheetContext.Provider>
  );
}

export default App;
