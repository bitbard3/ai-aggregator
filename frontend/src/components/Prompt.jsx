import React, { useState } from "react";
import Suggestion from "@/components/Suggestion";
import { Textarea } from "@/components/ui/textarea";
import ModelButton from "@/components/ModelButton";
import ModelHeader from "@/components/ModelHeader";
import axios from "axios";
import { models } from "@/lib/models";
export default function Prompt({
  heading,
  placeholder,
  button,
  model,
  responseType,
  suggestions,
  type,
  setModelLoading,
  textClassName,
  obj,
  text,
  setText,
  setApiOutput,
}) {
  const aiModel = models.find((item) => item.model == model);
  const [loading, setLoading] = useState(false);
  const API = aiModel.url;
  const onFetchClick = async () => {
    setLoading(true);
    setModelLoading(true);
    try {
      const res = await axios.post(
        API,
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
          },
          responseType: responseType,
        }
      );
      if (responseType === "blob") {
        const blob = new Blob([res.data], { type: type });
        const assetUrl = URL.createObjectURL(blob);
        setApiOutput(assetUrl);
      } else {
        setApiOutput(res.data[0][obj]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setModelLoading(false);
    }
  };
  return (
    <>
      <ModelHeader heading={heading}></ModelHeader>
      <Textarea
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        value={text}
        className={textClassName}
      ></Textarea>
      <ModelButton loading={loading} onClick={onFetchClick} text={button} />
      <Suggestion setText={setText} prompts={suggestions} />
    </>
  );
}
