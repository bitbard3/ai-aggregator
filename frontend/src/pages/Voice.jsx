import Audio from "@/components/Audio";
import ModelHeader from "@/components/ModelHeader";
import Navbar from "@/components/Navbar";
import Suggestion from "@/components/Suggestion";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
export default function Voice() {
  return (
    <div className="min-h-screen min-w-screen bg-black bg-grid-small-white/[0.2]  relative flex items-center justify-center">
      <Navbar />
      <div className="h-full w-[80%] md:w-[50%] flex flex-col items-center justify-around md:mt-20">
        <ModelHeader heading={"Text to speech"}></ModelHeader>
        <Textarea placeholder="Enter your text"></Textarea>
        <Suggestion />
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center md:gap-10 gap-5">
          <Audio />
        </div>
      </div>
    </div>
  );
}
