import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SocialMedia from "./SocialMedia";
import { contactInfo } from "@/data/Data";

function TopHeader() {
  return (
    <div className="">
      <div className="hidden md:flex justify-between py-4 px-10 rounded-b-full text-white bg-primary-red">
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <MdEmail />

            <p className=" cursor-pointer hover:underline">
              {contactInfo.email}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FaLocationDot />
            <p>Syria, Damascus</p>
          </div>
        </div>
        {/* SOCIAL MEDIA */}
        <SocialMedia />
      </div>
    </div>
  );
}

export default TopHeader;
