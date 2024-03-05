import React from "react";
import { PiLightbulb } from "react-icons/pi";
import { prompts } from "@/lib/prompts/tts.prompts";
import SuggestionButton from "./SuggestionButton";

export default function Suggestion() {
  return (
    <div className="w-full grid grid-cols-12 gap-4 mt-7 md:mt-10">
      <div className="col-span-12 flex items-center justify-center mb-3">
        <PiLightbulb className="h-5 w-6 mt-0.5 mr-2 text-light" />
        <p className="text-light text-lg">Try a sample prompt</p>
      </div>
      {prompts.map((prompt) => (
        <SuggestionButton text={prompt.desc} />
      ))}
    </div>
  );
}
