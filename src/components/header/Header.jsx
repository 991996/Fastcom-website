import Call from "./Call";
import ContactSheet from "./ContactSheet";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NavMenu } from "./NavigationMenu";
import TopHeader from "./TopHeader";
import { useState, useEffect } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="w-[90%] mx-auto">
        <TopHeader />
        <div
          className={`flex justify-between items-center w-full duration-500 ${
            isSticky
              ? "fixed bg-primary-blue shadow-xl py-1 top-0 left-0 px-5 md:px-8 lg:px-6 xl:px-40 z-50"
              : ""
          }`}
        >
          <Logo isSticky={isSticky} />
          <NavMenu />
          <ContactSheet />
          <div className="flex gap-4">
            <Call />
            <MobileMenu />
          </div>
        </div>
      </div>
      <hr className="border-white/20" />
    </div>
  );
}

export default Header;
