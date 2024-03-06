import React, { useState } from "react";
import Suggestion from "@/components/Suggestion";
import { Textarea } from "@/components/ui/textarea";
import ModelButton from "@/components/ModelButton";
import ModelHeader from "@/components/ModelHeader";
import axios from "axios";
import { models } from "@/lib/models";
import { useRecoilState } from "recoil";
import { prompt } from "@/stores/atoms/prompt";
import { output } from "@/stores/atoms/output";
export default function Prompt({
  heading,
  placeholder,
  button,
  model,
  responseType,
  suggestions,
  type,
}) {
  const aiModel = models.find((item) => item.model == model);
  const [loading, setLoading] = useState(false);
  const API = aiModel.url;
  const [text, setText] = useRecoilState(prompt);
  const [apiOutput, setApiOutput] = useRecoilState(output);
  const onFetchClick = async () => {
    setLoading(true);
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
        setApiOutput(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <ModelHeader heading={heading}></ModelHeader>
      <Textarea
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        value={text}
      ></Textarea>
      <ModelButton loading={loading} onClick={onFetchClick} text={button} />
      <Suggestion prompts={suggestions} />
    </>
  );
}
