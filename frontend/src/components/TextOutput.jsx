import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ActionButton from "./ActionButton";
import { output } from "@/stores/atoms/output";
import Loader from "./Loader";
import { prompt } from "@/stores/atoms/prompt";

export default function TextOutput({ loading, complete }) {
  const textOutput = useRecoilValue(output);
  const setPrompt = useSetRecoilState(prompt);
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
  const handleContinue = () => {
    setPrompt(textOutput);
  };
  return (
    <>
      <Textarea
        readOnly
        className="h-full pb-8"
        placeholder="Your output will be shown here..."
        value={textOutput}
      ></Textarea>
      <div className=" w-full flex justify-between">
        <div className="flex items-center md:gap-5 gap-2">
          <ActionButton
            onClick={handleCopy}
            className="mt-5 mb-5"
            text={"Copy"}
          />
          {complete && textOutput && (
            <ActionButton
              onClick={handleContinue}
              className="mt-5 mb-5"
              text={"Continue"}
            />
          )}
        </div>
        <ActionButton
          onClick={handleDownload}
          className="mt-5 mb-5"
          text={"Download"}
        />
      </div>
      {loading && (
        <div className="h-full z-10 w-full bg-neutral-800 bg-opacity-70 flex items-center justify-center absolute top-0 bottom-0">
          <Loader size={60} />
        </div>
      )}
    </>
  );
}