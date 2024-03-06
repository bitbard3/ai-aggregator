import { output } from "@/stores/atoms/output";
import React from "react";
import { useRecoilValue } from "recoil";
import DownloadButton from "./DownloadButton";

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
        <DownloadButton text={"Download"} onClick={handleDownload} />
      </>
    )
  );
}
