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
import { useContext } from "react";
import { SheetContext } from "@/context/SheetContext";

const contactList = [
  {
    text: "Syria, Damascus",
    icon: <FaLocationDot />,
  },
  {
    text: "Sat - Thu: 8.00 am. - 6.00 pm.",
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

function ContactSheet() {
  const { openSheet, setOpenSheet } = useContext(SheetContext);
  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetTrigger>
        <div
          className=" hidden lg:block border text-white cursor-pointer
         rounded-full p-2.5 mr-3 border-white/20 hover:bg-primary-red duration-300"
        >
          <FiMenu size={25} />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-primary-blue px-4 [&_button]:text-white">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-8 text-gray-200 text-base">
              <Logo />
              <p>
                Fastcom Solutions, headquartered in Damascus, is theexclusive
                agent of ZTT Groupin Syria. We provide advanced technologies
                infiber optics, telecommunications, wireless solutions, power
                systems, and data centers.
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
                      <p className="text-gray-300">{c.text}</p>
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

export default ContactSheet;
