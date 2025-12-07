import { FaPhoneVolume } from "react-icons/fa6";

function Call() {
  return (
    <div className="hidden md:flex gap-5 items-center text-white">
      <div className="bg-white rounded-full p-3.5 text-primary-red">
        <FaPhoneVolume />
      </div>
      <div className="flex flex-col gap-0">
        <p className="text-sm">Call Emergency</p>
        <p className="text-2xl">8888 8888</p>
      </div>
    </div>
  );
}

export default Call;
