import Image from "next/image";
import React from "react";

export default function SinglePostPage() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="w-[100%] md:w-[30%] lg:w-[30%] h-[200px] md:h-[100vh]">
        <Image
          src="/hero.gif"
          alt="img"
          width={0}
          height={0}
          priority={true}
          className="w-[100%] h-[200px] md:h-[100vh] object-contain md:object-cover"
        />
      </div>
      <div className="flex-1">
        <div>
          <div className="flex items-center gap-3 pt-[20px]">
            <Image
              className="top-0 rounded-full"
              src="/noavatar.png"
              width={40}
              height={40}
              alt="hero"
              priority={true}
            />
            <div className="text-[16px]">Crush</div>
          </div>
          <div className="text-[24px] pt-[20px]">Beautiful life - Crush</div>
          <div className="pt-[10px] text-gray-400 text-[13px]">
            Date May 05. 10
          </div>

          <div className="pt-[20px] text-[16px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            fuga quisquam tempore amet eos. Non assumenda distinctio, magni
            fugit modi laudantium voluptates dignissimos accusantium accusamus
            animi nemo maiores optio quod. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque fuga quisquam tempore amet eos.
            Non assumenda distinctio, magni fugit modi laudantium voluptates
            dignissimos accusantium accusamus animi nemo maiores optio quod.
          </div>
        </div>
      </div>
    </div>
  );
}
