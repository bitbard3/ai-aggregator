import React from "react";
import Suggestion from "@/components/Suggestion";
import { Textarea } from "@/components/ui/textarea";
import ModelButton from "@/components/ModelButton";
import ModelHeader from "@/components/ModelHeader";
export default function Prompt({ heading, placeholder, button }) {
  return (
    <>
      <ModelHeader heading={heading}></ModelHeader>
      <Textarea placeholder={placeholder}></Textarea>
      <ModelButton text={button} />
      <Suggestion />
    </>
  );
}
