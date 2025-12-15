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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { aboutList, solutionsList, downloadList } from "@/data/Data";

import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import SocialMedia from "./SocialMedia";
import { useContext } from "react";
import { SheetContext } from "@/context/SheetContext";

const contactList = [
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
  const { setOpenSheet } = useContext(SheetContext);
  return (
    <Sheet>
      <SheetTrigger>
        <div className="lg:hidden border text-white rounded-full p-2.5 mr-3 border-white/20 hover:bg-primary-red duration-300 cursor-pointer">
          <FiMenu size={25} />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-primary-blue px-4 [&_button]:text-white p-4 overflow-y-auto max-h-screen"
      >
        <SheetHeader></SheetHeader>
        <div className="flex flex-col gap-8 text-gray-400 text-base">
          <Logo />
          <nav className="flex flex-col gap-4 mt-6">
            {/* HOME */}
            <a
              href="#home"
              className="text-[17px] font-medium text-white hover:underline"
            >
              Home
            </a>

            <Accordion type="single" collapsible className="w-full">
              <hr></hr>
              {/* ABOUT */}
              <AccordionItem value="about">
                <AccordionTrigger className="text-[17px] font-medium">
                  About
                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-2 pl-4">
                  {aboutList.map((about) => {
                    return (
                      <a
                        key={about.id}
                        href={about.href}
                        className="text-[15px] cursor-pointer"
                      >
                        {about.title}
                      </a>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
              {/* Solutions */}
              <AccordionItem value="solutions">
                <AccordionTrigger className="text-[17px] font-medium">
                  Solutions
                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-2 pl-4">
                  {solutionsList.map((solution) => {
                    return (
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>{solution.title}</AccordionTrigger>
                          <AccordionContent className="flex flex-col gap-2 pl-4">
                            {solution.subTitle.map((sub) => {
                              return (
                                <a
                                  key={sub.id}
                                  href={sub.href}
                                  className="text-[15px] pb-2 cursor-pointer"
                                >
                                  {sub.title}
                                </a>
                              );
                            })}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>

              {/* Downloads */}
              <AccordionItem value="downloads">
                <AccordionTrigger className="text-[17px] font-medium">
                  Downloads
                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-2 pl-4">
                  {downloadList.map((download) => {
                    return (
                      <a
                        key={download.id}
                        href={download.href}
                        className="text-[15px] cursor-pointer"
                      >
                        {download.title}
                      </a>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
              <hr></hr>
            </Accordion>
            {/* Contact */}
            <a
              onClick={() => setOpenSheet(true)}
              className="text-[17px] font-medium text-white hover:underline cursor-pointer"
            >
              Contact
            </a>
          </nav>

          <div className="flex flex-col gap-3">
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
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
