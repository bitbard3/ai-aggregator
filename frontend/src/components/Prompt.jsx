import React from "react";
import Suggestion from "@/components/Suggestion";
import { Textarea } from "@/components/ui/textarea";
import ModelButton from "@/components/ModelButton";
import ModelHeader from "@/components/ModelHeader";
import axios from "axios";
import { models } from "@/lib/models";
import { useRecoilState } from "recoil";
import { prompt } from "@/stores/atoms/prompt";
import { output } from "@/stores/atoms/output";
export default function Prompt({ heading, placeholder, button, model }) {
  const aiModel = models.find((item) => item.model == model);
  const API = aiModel.url;
  const [text, setText] = useRecoilState(prompt);
  const [apiOutput, setApiOutput] = useRecoilState(output);
  const onFetchClick = async () => {
    try {
      const res = await axios.post(
        API,
        { inputs: text },
        {
          headers: {
            Authorization: "Bearer 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",
          },
          responseType: "blob",
        }
      );
      const blob = new Blob([res.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(blob);
      setApiOutput(audioUrl);
    } catch (error) {
      console.log(error);
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
      <ModelButton onClick={onFetchClick} text={button} />
      <Suggestion />
    </>
  );
}
