import React from "react";
import Image from "next/image";

// components
import Container from "@/components/Container";

// assets
import Trees from "@/assets/Trees.png";

function Hero() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-start px-24 justify-center bg-gradient-to-b from-[#F3F4FD] #F3F4FD via-purple-200 to-[#F3F4FD]">
        <div className="hidden lg:block">
          <h1 className="text-[56px] text-primary 2xl:whitespace-nowrap mt-14 font-bold max-w-[991px] leading-[63px]">
            Double your net worth with <br /> three life-changing steps.
          </h1>
          <p className="text-xl mt-3 text-[#546E7A]">
            Experience a wealth transformation in just a few coinflips.
          </p>
        </div>

        <Image src={Trees} />
      </div>
    </Container>
  );
}

export default Hero;
