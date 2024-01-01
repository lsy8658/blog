import React from "react";
import Links from "./links/Links";
import { usePathname } from "next/navigation";
export default function Navbar() {
  // const pathName = usePathname();
  return (
    <nav className="flex justify-between">
      <h1 className="text-[30px] font-bold">logo</h1>
      <ul className="flex gap-3">
        <Links />
      </ul>
    </nav>
  );
}
