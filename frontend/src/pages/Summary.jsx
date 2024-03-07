import Navbar from "@/components/Navbar";
import Prompt from "@/components/Prompt";
import { prompts } from "@/lib/prompts/ttts.prompts";
import React, { useState } from "react";
import TextOutput from "@/components/TextOutput";

export default function Summary() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen min-w-screen bg-black bg-grid-small-white/[0.2] pb-10 lg:pb-0 md:pt-20 lg:pt-0  relative flex lg:flex-row flex-col items-center lg:items-center justify-center lg:space-x-14 lg:justify-start lg:px-10 xl:px-20 overflow-y-scroll">
      <Navbar />
      <div className="h-full w-[80%] md:w-[80%] lg:w-[70%] flex flex-col justify-around md:mt-20 md:py-0 pt-32 pb-5">
        <Prompt
          heading={"Text Summarizer"}
          placeholder={"Enter your text ..."}
          button={"Summarize"}
          model={"ttts"}
          suggestions={prompts}
          responseType={"json"}
          setModelLoading={setLoading}
          textClassName={"h-80 md:h-60 lg:h-min"}
          obj={"summary_text"}
        />
      </div>
      <div className="w-[80%] relative md:w-[60%] bg-dark xl:w-[43%] h-72 md:h-96 md:mt-20">
        <TextOutput loading={loading} />
      </div>
    </div>
  );
}
