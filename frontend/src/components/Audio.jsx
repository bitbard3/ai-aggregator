import { output } from "@/stores/atoms/output";
import React from "react";
import { useRecoilValue } from "recoil";

export default function Audio() {
  const audioBlob = useRecoilValue(output);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = audioBlob;
    link.download = "audio_file.mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    audioBlob && (
      <>
        <p className="text-light md:text-xl text-lg">Output</p>
        <audio controls src={audioBlob}></audio>
        <button
          onClick={handleDownload}
          className="px-5 py-1.5 text-light hover:opacity-90 text-sm bg-neutral-900 border border-neutral-700 rounded-md"
        >
          Download
        </button>
      </>
    )
  );
}
