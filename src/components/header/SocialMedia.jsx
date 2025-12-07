import {
  FaLocationDot,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

function SocialMedia() {
  return (
    <div className="flex gap-3 items-center">
      <div className="border rounded-full p-2 cursor-pointer hover:bg-white duration-300 hover:text-primary-red">
        <FaFacebookF size={12} />
      </div>
      <div className="border rounded-full p-2 cursor-pointer hover:bg-white duration-300 hover:text-primary-red">
        <FaXTwitter size={12} />
      </div>
      <div className="border rounded-full p-2 cursor-pointer hover:bg-white duration-300 hover:text-primary-red">
        <GrInstagram size={12} />
      </div>
      <div className="border rounded-full p-2 cursor-pointer hover:bg-white duration-300 hover:text-primary-red">
        <FaYoutube size={12} />
      </div>
    </div>
  );
}

export default SocialMedia;
