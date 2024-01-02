"use client";
import React, { useEffect, useState } from "react";
import { LinkType } from "@/tpyes/linkTypes";
import NavLink from "./navLink/navLink";
import { usePathname } from "next/navigation";
const links: LinkType[] = [
  {
    title: "home",
    path: "/",
  },
  // {
  //   title: "about",
  //   path: "/about",
  // },
  // {
  //   title: "contact",
  //   path: "/contact",
  // },
  {
    title: "blog",
    path: "/blog",
  },
];

export default function Links() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const session = true;
  const isAdmin = false;

  useEffect(() => {
    setOpen(false);
  }, [pathName]);
  return (
    <>
      <div className="hidden md:flex items-center gap-[15px]  ">
        {links.map((link: LinkType) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="cursor-pointer">Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className="block md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <div className="absolute right-0 height-nav flex flex-col gap-5 w-[100%] items-center pt-[80px] top-[70px] box-border bg-[#232144;] md:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </>
  );
}
