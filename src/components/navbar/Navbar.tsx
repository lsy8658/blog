import React from "react";
import Links from "./links/Links";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center  md:h-[50px]">
      <h1 className="text-[30px] font-bold">공간</h1>
      <ul className="flex gap-3">
        <Links />
      </ul>
    </nav>
  );
}
