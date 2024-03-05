import React from "react";
import { RiCopperCoinLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 max-w-2xl mx-auto z-50 md:top-2 top-0.5">
      <div className="relative md:rounded-full rounded-lg boder bg-black border-white/[0.2] border-b-2 flex justify-around space-x-10 px-4 py-5 md:py-7 backdrop-filter backdrop-blur-lg shadow-inner shadow-neutral-400">
        <div className="flex space-x-8 mt-1">
          <p className="cursor-pointer hover:opacity-[0.9] text-light">Home</p>
          <p className="cursor-pointer hover:opacity-[0.9] text-light">
            Models
          </p>
        </div>
        <div className=" px-3 rounded-md py-1 flex items-center">
          <RiCopperCoinLine className="h-5 w-5 text-light pt-[1px]" />
          <p className=" text-light">25</p>
        </div>
      </div>
    </div>
  );
}
