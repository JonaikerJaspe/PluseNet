import { BsHouseFill, BsFillBalloonHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo ";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
  const items = [
    {
      label: "Inicio",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notificaciones",
      href: "/notifications",
      icon: BsFillBalloonHeartFill,
    },
    {
      label: "Perfil",
      href: "/users/123",
      icon: FaUser,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem
            onClick={() => {}}
            icon={BsArrowLeftCircleFill}
            label="Salir"
          />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
