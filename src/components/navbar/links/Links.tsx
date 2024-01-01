import React from "react";
import { LinkType } from "@/tpyes/linkTypes";
import NavLink from "./navLink/navLink";

export default function Links() {
  const links: LinkType[] = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = false;

  return (
    <div className="flex items-center gap-[15px]">
      {links.map((link: LinkType) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <button className="p-[10px] cursor-pointer text-black bg-white font-bold rounded-md">
            Logout
          </button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
}
