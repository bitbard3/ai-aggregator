import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { BsClipboard } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import DownloadButton from "./DownloadButton";
import { output } from "@/stores/atoms/output";
import Loader from "./Loader";

export default function TextOutput({ loading }) {
  const textOutput = useRecoilValue(output);
  const handleDownload = () => {
    if (textOutput) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(
        new Blob([textOutput], { type: "text/plain" })
      );
      link.download = "text_file.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  const handleCopy = async () => {
    await navigator.clipboard.writeText(textOutput);
  };
  return (
    <>
      <Textarea
        readOnly
        className="h-full pb-8"
        placeholder="Your output will be shown here..."
        value={textOutput}
      ></Textarea>
      <div className=" w-full flex justify-end">
        <DownloadButton
          onClick={handleDownload}
          className="mt-5 mb-5"
          text={"Download"}
        />
      </div>
      <div className="absolute bottom-3 left-3">
        <button onClick={handleCopy}>
          <BsClipboard className="text-neutral-400 h-5 w-5" />
        </button>
      </div>
      {loading && (
        <div className="h-full z-10 w-full bg-neutral-800 bg-opacity-70 flex items-center justify-center absolute top-0 bottom-0">
          <Loader size={60} />
        </div>
      )}
    </>
  );
}
