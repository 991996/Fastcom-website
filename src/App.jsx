import "./App.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import AboutZTT from "./components/sections/AboutZTT";
import OurSolutionsSection from "./components/sections/OurSolutionsSection";
import Footer from "./components/sections/Footer";
import { useState } from "react";
import { SheetContext } from "./context/SheetContext";

function App() {
  const [openSheet, setOpenSheet] = useState(false);
  return (
    <SheetContext.Provider value={{ openSheet, setOpenSheet }}>
      <HomeSection />
      <AboutSection />
      <AboutZTT />
      <OurSolutionsSection />
      <Footer />
    </SheetContext.Provider>
  );
}

export default App;
