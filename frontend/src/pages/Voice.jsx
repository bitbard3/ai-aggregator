import Audio from "@/components/Audio";
import Navbar from "@/components/Navbar";
import Prompt from "@/components/Prompt";
import { prompts } from "@/lib/prompts/tts.prompts";
import { output } from "@/stores/atoms/output";
import { prompt } from "@/stores/atoms/prompt";
import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function Voice() {
  const setPrompt = useSetRecoilState(prompt);
  const setValue = useSetRecoilState(output);
  useEffect(() => {
    setPrompt(null);
    setValue(null);
  }, []);
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen min-w-screen bg-black bg-grid-small-white/[0.2]  relative flex items-start md:items-center justify-center">
      <Navbar />
      <div className="h-full w-[80%] md:w-[70%] lg:w-[50%] flex flex-col justify-around md:mt-20 md:py-0 py-32">
        <Prompt
          heading={"Text to Speech"}
          placeholder={"Enter your text ..."}
          button={"Generate"}
          model={"tts"}
          suggestions={prompts}
          responseType={"blob"}
          setModelLoading={setLoading}
          type={"audio/mpeg"}
        />
        <div className="md:mt-8 mt-5 flex flex-col md:flex-row items-center justify-center md:gap-10 gap-5">
          <Audio loading={loading} />
        </div>
      </div>
    </div>
  );
}
