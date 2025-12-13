import { Check } from "lucide-react";
import { FaTools, FaUsers, FaCheckCircle } from "react-icons/fa";

const servicesList = [
  {
    id: 1,
    icon: <FaTools size={40} />,
    title: "We provide solutions in",
    children: [
      "Fiber Optics",
      "Telecommunications (Wired & Wireless)",
      "Wireless Solutions",
      "Power Systems",
      "Data Centers",
    ],
  },
  {
    id: 2,
    icon: <FaUsers size={40} />,
    title: "We serve",
    children: [
      "Telecom operators",
      "Internet Service Providers (ISPs)",
      "Government institutions",
      "Private companies",
    ],
  },
  {
    id: 3,
    icon: <FaCheckCircle size={40} />,
    title: "We offer",
    children: [
      "World-class technologies from ZTT",
      "Technical support and after-sales services",
      "Sustainable, future-ready solutions",
    ],
  },
];

function ServicesBar() {
  return (
    <div className="p-8 lg:px-15 bg-baige rounded-b-3xl">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 w-full">
        {servicesList.map((service, index) => {
          return <Service key={service.id} service={service} index={index} />;
        })}
      </div>
    </div>
  );
}

function Service({ service, index }) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        index === 0 ? "md:border-r md:border-r-gray-500/10" : ""
      } ${index === 1 ? "lg:border-r lg:border-r-gray-500/10" : ""}`}
    >
      <div className="text-primary-red">{service.icon}</div>
      <h1 className="font-medium text-lg lg:text-2xl text-gray-800">
        {service.title}
      </h1>
      <div className="flex flex-col gap-2.5">
        {service.children.map((s, index) => {
          return (
            <div key={index} className="flex items-center gap-3 ">
              <div className="text-primary-red">
                <Check size={18} />
              </div>
              <p className="text-gray-500">{s}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesBar;
