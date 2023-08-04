import { BsHouseFill, BsFillBalloonHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo ";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import SidebarTweetButton from "./SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
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
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      label: "Perfil",
      href: `/users/${currentUser?.id}`,
      icon: FaUser,
      auth: true,
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
              auth={item.auth}
              alert={item.alert}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BsArrowLeftCircleFill}
              label="Salir"
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
