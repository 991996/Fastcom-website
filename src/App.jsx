import Header from "./components/header/Header";
import "./App.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import AboutZTT from "./components/sections/AboutZTT";
import OurSolutionsSection from "./components/sections/OurSolutionsSection";

function App() {
  return (
    <div className="pb-50">
      <HomeSection />
      <AboutSection />
      <AboutZTT />
      <OurSolutionsSection />
    </div>
  );
}

export default App;
