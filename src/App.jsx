import Header from "./components/header/Header";
import "./App.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import AboutZTT from "./components/sections/AboutZTT";

function App() {
  return (
    <div className="">
      <HomeSection />
      <AboutSection />
      <AboutZTT />
    </div>
  );
}

export default App;
