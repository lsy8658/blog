import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className=" flex flex-col md:flex-row">
      <div className="flex-1 pt-[50px] md:pt-[150px]">
        <h2 className="text-[50px]">SY BLOG</h2>
        <h3 className="text-[30px] text-gray-300">Blog 만들기</h3>
        <h4 className="text-[16px] text-gray-400">
          사용기술 NextJs-14, TailwindCss, Typescript
        </h4>
        <p className="pt-[10px] max-w-[400px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
          deserunt quam, similique impedit exercitationem atque consectetur quod
          minima libero dolor error eaque cupiditate ab excepturi soluta earum
          at assumenda molestiae?
        </p>
      </div>
      <div className="flex-1 flex justify-center pt-[50px] md:pt-[150px]">
        <Image
          className="top-0"
          src="/hero.gif"
          width={500}
          height={500}
          alt="hero"
          priority={true}
        />
      </div>
    </div>
  );
}

/*className="text-[var(--text)]" */
