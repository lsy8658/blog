"use client";
import React from "react";
import Image from "next/image";
export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="pb-[20px] pt-[40px]">
        <div className="text-gray-500">SungYoon Blog</div>
      </footer>
      <Image
        src="/lightGif.gif"
        width={60}
        height={60}
        className="objectfit-cover fixed bottom-[30px] right-[30px] cursor-pointer"
        alt="scrollTop"
        onClick={scrollTop}
      />
    </>
  );
}
