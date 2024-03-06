import Navbar from "@/components/Navbar";
import Prompt from "@/components/Prompt";
import { prompts } from "@/lib/prompts/tti.prompts";
import React from "react";
import Image from "@/components/Image";
export default function Images() {
  return (
    <div className="min-h-screen min-w-screen bg-black bg-grid-small-white/[0.2] pb-10 lg:pb-0 md:pt-20 lg:pt-0  relative flex lg:flex-row flex-col items-center lg:items-center justify-center lg:space-x-14 lg:justify-start lg:px-10 xl:px-20">
      <Navbar />
      <div className="h-full w-[80%] md:w-[80%] lg:w-[70%] flex flex-col justify-around md:mt-20 md:py-0 pt-32 pb-5">
        <Prompt
          heading={"Text to Speech"}
          placeholder={"Enter your text ..."}
          button={"Generate"}
          model={"tti"}
          suggestions={prompts}
          responseType={"blob"}
          type={"image/jpeg"}
        />
      </div>
      <div className="w-[80%] md:w-[60%] bg-dark xl:w-[43%] h-72 md:h-96 md:mt-20">
        <Image />
      </div>
    </div>
  );
}
