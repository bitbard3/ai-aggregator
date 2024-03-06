import React from "react";
import DownloadButton from "@/components/DownloadButton";
import { CiImageOn } from "react-icons/ci";
import { output } from "@/stores/atoms/output";
import { useRecoilValue } from "recoil";
export default function Image() {
  const imageBlob = useRecoilValue(output);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageBlob;
    link.download = "image_file.jpeg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="border border-neutral-400 w-full h-full border-opacity-40 flex flex-col items-center justify-center">
        {imageBlob ? (
          <div className="w-full h-full overflow-hidden relative">
            <img
              src={imageBlob}
              alt="image"
              className="object-cover w-full h-full absolute top-0 left-0"
            />
          </div>
        ) : (
          <CiImageOn className="w-1/2 h-1/2 text-neutral-500" />
        )}
      </div>
      <div className=" w-full flex justify-end">
        <DownloadButton
          onClick={handleDownload}
          className="mt-5"
          text={"Download"}
        />
      </div>
    </>
  );
}
