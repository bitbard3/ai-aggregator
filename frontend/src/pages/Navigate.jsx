import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { BsRobot } from "react-icons/bs";
import { projects } from "@/lib/projects";
export default function Navigate() {
  return (
    <div className=" flex items-center justify-center flex-col min-h-screen min-w-screen bg-dark">
      <div className="flex items-center gap-3">
        <BsRobot className="text-light text-3xl"></BsRobot>
        <h2 className="text-light text-3xl  tracking-wide">
          Choose your model
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
