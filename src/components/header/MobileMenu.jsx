import { FiMenu } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";

import { FaLocationDot, FaClock, FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import SocialMedia from "./SocialMedia";

const contactList = [
  {
    text: "Syria, Damascus",
    icon: <FaLocationDot />,
  },
  {
    text: "Mon - Fri: 8.00 am. - 6.00 pm.",
    icon: <FaClock />,
  },
  {
    text: "info@fastcom.com",
    icon: <IoIosMail />,
  },
  {
    text: "8888 8888",
    icon: <FaPhoneVolume />,
  },
];

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="lg:hidden border text-white rounded-full p-2.5 mr-3 border-white/20">
          <FiMenu size={25} />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-navy-blue px-4 [&_button]:text-white"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-8 text-gray-400 text-base">
              <Logo />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                odit tenetur deserunt. Amet iste vero ab recusandae blanditiis
                reiciendis voluptatum.
              </p>
              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold text-white">Contact info:</h1>
                {contactList.map((c, index) => {
                  return (
                    <div
                      className="flex items-center gap-2 text-primary-red"
                      key={index}
                    >
                      {c.icon}
                      <p className="text-gray-500">{c.text}</p>
                    </div>
                  );
                })}
              </div>
              <SocialMedia />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
