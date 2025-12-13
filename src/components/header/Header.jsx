import Call from "./Call";
import ContactSheet from "./ContactSheet";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NavMenu } from "./NavigationMenu";
import TopHeader from "./TopHeader";

function Header({ openSheet, setOpen }) {
  return (
    <div>
      <TopHeader />
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <Logo />
        <NavMenu setOpen={setOpen} />
        <ContactSheet openSheet={openSheet} setOpen={setOpen} />
        <div className="flex gap-4">
          <Call />
          <MobileMenu />
        </div>
      </div>
      <hr className="border-white/20" />
    </div>
  );
}

export default Header;
