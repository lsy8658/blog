"use client";
import { LinkType } from "@/tpyes/linkTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({ item }: { item: LinkType }) {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`w-[95%] max-w-[458px] md:w-[70px] py-[5px] text-[22px] md:text-[16px] text-center box-border rounded-full ${
        pathName == item.path ? "text-black bg-white font-bold" : ""
      }`}
    >
      {item.title}
    </Link>
  );
}
