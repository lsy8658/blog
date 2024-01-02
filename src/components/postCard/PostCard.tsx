import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostCard() {
  return (
    <div className=" w-[100%] md:w-[30%] lg:w-[22%] pt-[30px] max-w-[400px]">
      <div className="flex items-center justify-center">
        <Image
          src="/hero.gif"
          alt="post"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      <div className="text-[24px] pt-[10px]">Title</div>
      <div className="text-gray-400 text-[13px]">May 05. 10</div>
      <div className="text-gray-600 text-[13px] pt-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        placeat reiciendis fugiat nulla ducimus eius vitae? Iure saepe ipsam
        quod. Modi nostrum harum at soluta culpa molestias esse deserunt
        distinctio.
      </div>

      <div className="pt-[15px] text-[13px] text-gray-700 underline cursor-pointer hover:text-gray-400 inline-block">
        <Link href="/blog/post">Read More</Link>
      </div>
    </div>
  );
}
