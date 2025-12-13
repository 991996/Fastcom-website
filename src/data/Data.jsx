// Home slides images
import slide1 from "@/assets/slide1.jpg";
import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide3.jpg";
// About items images
import ztt1 from "@/assets/Ztt1.png";
import ztt2 from "@/assets/Ztt2.png";
// Our solutions icons
import {
  Cable,
  Boxes,
  Antenna,
  Zap,
  Server,
  BatteryCharging,
  Leaf,
  Waves,
} from "lucide-react";

export const homeSlides = [
  {
    id: 1,
    title: "Fastcom Solutions",
    mainTitle: "Exclusive Agent of ZTT Group in Syria",
    text: `Fastcom Solutions is the exclusive agent of ZTT Group in Syria.
We combine global manufacturing excellence with strong local market knowledge.
Our clients benefit from certified products, technical support, and after-sales services.`,
    img: slide1,
  },
  {
    id: 2,
    title: "Fastcom Solutions",
    mainTitle: "Integrated ICT Infrastructure Solutions",
    text: `We deliver integrated ICT infrastructure solutions for modern networks.
Our expertise covers fiber optics, telecommunications, wireless systems, and power solutions.
We support telecom operators, ISPs, enterprises, and government institutions.`,
    img: slide2,
  },
  {
    id: 3,
    title: "Fastcom Solutions",
    mainTitle: "Reliable, Scalable, and Future-Ready Networks",
    text: `We help our customers build reliable and scalable networks for the future.
From fiber optic networks and data centers to energy and storage solutions.
Our focus is on efficiency, sustainability, and long-term performance.`,
    img: slide3,
  },
];
// NAVBAR
export const aboutList = [
  {
    id: 1,
    title: "About Fastcom",
    href: "",
  },
  {
    id: 2,
    title: "About ZTT",
    href: "",
  },
  {
    id: 3,
    title: "Mission & Vision",
    href: "",
  },
  {
    id: 4,
    title: "Certificates & Global Recognition",
    href: "",
  },
];

export const solutionsList = [
  {
    id: 1,
    title: "Fiber Optic & ODN",
    subTitle: [
      { id: 1, title: "Fiber Optic Cables", href: "" },
      { id: 2, title: "ODN Products", href: "" },
      { id: 3, title: "Smart ODN", href: "" },
      { id: 4, title: "MDU Solutions", href: "" },
    ],
  },
  {
    id: 2,
    title: "Power Systems",
    subTitle: [
      { id: 1, title: "Outdoor Power Cabinets", href: "" },
      { id: 2, title: "Indoor Cabinets", href: "" },
      { id: 3, title: "Hybrid Power Solutions", href: "" },
    ],
  },
  {
    id: 3,
    title: "Wireless & Antennas",
    subTitle: [
      { id: 1, title: "Multi-band Antennas", href: "" },
      { id: 2, title: "Microwave Antennas", href: "" },
      { id: 3, title: "IBS Solutions", href: "" },
    ],
  },
  {
    id: 4,
    title: "Optical Transceivers",
    subTitle: [
      { id: 1, title: "SFP / QSFP Modules", href: "" },
      { id: 2, title: "Active Optical Cables", href: "" },
    ],
  },
  {
    id: 5,
    title: "Data Center",
    subTitle: [
      { id: 1, title: "Cooling Systems", href: "" },
      { id: 2, title: "UPS / Power Distribution", href: "" },
      { id: 3, title: "DCIM", href: "" },
      { id: 4, title: "Modular Data Centers", href: "" },
    ],
  },
  {
    id: 6,
    title: "BESS & Hybrid Energy",
    subTitle: [
      { id: 1, title: "Battery Energy Storage Systems", href: "" },
      { id: 2, title: "Green BTS Solutions", href: "" },
    ],
  },
  {
    id: 7,
    title: "Specialty Cables",
    subTitle: [
      { id: 1, title: "Hybrid Cables", href: "" },
      { id: 2, title: "Submarine Cables", href: "" },
      { id: 3, title: "Flame-Retardant Cables", href: "" },
    ],
  },
];

export const downloadList = [
  {
    id: 1,
    title: "Product Catalogs",
    href: "",
  },
  {
    id: 2,
    title: "Data Sheets",
    href: "",
  },
  {
    id: 3,
    title: "Project Profiles",
    href: "",
  },
  {
    id: 4,
    title: "Certifications",
    href: "",
  },
];
// About Section
export const aboutItemsList = [
  {
    id: 1,
    text: "Telecoms (Fiber, ODN, Antennas, BTS, Transceivers, Data Centers)",
    image: ztt1,
  },
  {
    id: 2,
    text: "Smart Grid & Power Systems",
    image: ztt2,
  },
  {
    id: 3,
    text: "Renewable Energy & BESS",
    image: ztt2,
  },
  {
    id: 4,
    text: "Marine Economy & Submarine Cables",
    image: ztt2,
  },
];
// Solution Section
export const ourSolutionsList = [
  {
    id: 1,
    title: "Fiber Optic & ODN Solutions",
    text: "Comprehensive fiber optic cables and ODN systems for FTTx networks, including smart and pre-connected solutions.",
    icon: Cable,
  },
  {
    id: 2,
    title: "Power Systems",
    text: "Indoor and outdoor power cabinets, rectifiers, and hybrid power solutions designed for telecom infrastructure.",
    icon: BatteryCharging,
  },
  {
    id: 3,
    title: "Wireless & Antennas",
    text: "Advanced wireless and antenna solutions for urban, rural, and high-capacity telecom networks.",
    icon: Antenna,
  },
  {
    id: 4,
    title: "Optical Transceivers",
    text: "High-speed optical transceivers and active optical cables supporting 1G to 400G networks.",
    icon: Zap,
  },
  {
    id: 5,
    title: "Data Center Solutions",
    text: "End-to-end data center infrastructure including power, cooling, racks, and DCIM systems.",
    icon: Server,
  },
  {
    id: 6,
    title: "Battery Energy Storage Systems",
    text: "Scalable battery energy storage systems for telecom backup, microgrids, and renewable integration.",
    icon: Boxes,
  },
  {
    id: 7,
    title: "Green BTS Solutions",
    text: "Energy-efficient BTS infrastructure with hybrid solar solutions and reduced power consumption.",
    icon: Leaf,
  },
  {
    id: 8,
    title: "Specialty & Hybrid Cables",
    text: "Hybrid, submarine, and flame-retardant cables for complex and mission-critical environments.",
    icon: Waves,
  },
];
