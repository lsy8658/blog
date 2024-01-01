"use client";
import { LinkType } from "@/tpyes/linkTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({ item }: { item: LinkType }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      href={item.path}
      className={`w-[80px] py-2 text-center box-border rounded-md ${
        pathName == item.path ? "text-black bg-white font-bold" : ""
      }`}
    >
      {item.title}
    </Link>
  );
}
