import {
  FaCloud,
  FaServer,
  FaCode,
  FaDesktop,
  FaNetworkWired,
  FaHandsHelping,
} from "react-icons/fa";

/* ✅ IMAGE IMPORTS — CORRECT PATHS & FILENAMES */

import cloudDesktopImg from "../assets/services/clouddesktop.png";
import cyberImg from "../assets/services/cybersecurity.png";
import softwareImg from "../assets/services/softwareeng.png";
import networkImg from "../assets/services/networksol.png";
import supportImg from "../assets/services/supportcon.png";
import defaultImg from "../assets/services/image.png";

// ⚠️ If you really want to use this:
// import imageCopyImg from "../../assets/services/image copy.png";

export const servicesData = [
  {
    id: 1,
    title: "Cloud Solutions",
    description:
      "Our cloud services provide instant access to computing storage resources online, enabling scalable efficiency. We enhance collaboration, increase flexibility, and lower expenses.",
    icon: FaCloud,
    link: "/services/cloud-solutions",
    image: cloudDesktopImg,
  },
  {
    id: 2,
    title: "Managed IT Services",
    description:
      "Network management, data backup, cybersecurity, and IT support. We provide reliable managed IT services so you can focus on growing your business.",
    icon: FaServer,
    link: "/services/managed-it",
    image: cyberImg,
  },
  {
    id: 3,
    title: "Software Engineering",
    description:
      "Custom software engineering services tailored to your unique business needs to drive innovation and growth.",
    icon: FaCode,
    link: "/services/software-engineering",
    image: softwareImg,
  },
  {
    id: 4,
    title: "Cloud Desktop",
    description:
      "Seamless cloud desktop services enabling efficient remote work with scalable resources and robust security.",
    icon: FaDesktop,
    link: "/services/image copy",
    image: cloudDesktopImg,
  },
  {
    id: 5,
    title: "Network Solutions",
    description:
      "Reliable cloud and networking resources tailored to your business needs with seamless integration.",
    icon: FaNetworkWired,
    link: "/services/network-solutions",
    image: networkImg,
  },
  {
    id: 6,
    title: "Support Consulting",
    description:
      "Expert consulting services tailored to your needs, delivering innovative solutions that drive efficiency and growth.",
    icon: FaHandsHelping,
    link: "/services/support-consulting",
    image: supportImg,
  },
];
