import * as FaIcons from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import * as IoIcons from "react-icons/io";

interface SideBarInter {
  title: string;
  path: string;
  icon: any;
}

export const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: AiFillHome,
  },
  {
    id: 2,
    title: "Profile",
    path: "/profile",
    icon: IoIcons.IoMdPeople,
  },
  {
    id: 3,
    title: "Settings",
    path: "/settings",
    icon: IoIcons.IoMdSettings,
  },
  {
    id: 4,
    title: "Saved Jobs",
    path: "/saved_jobs",
    icon: FaIcons.FaSave,
  },
  {
    id: 5,
    title: "Messages",
    path: "/messages",
    icon: FaIcons.FaEnvelopeOpenText,
  },
  {
    id: 6,
    title: "Support",
    path: "/support",
    icon: IoIcons.IoMdHelpCircle,
  },
];
