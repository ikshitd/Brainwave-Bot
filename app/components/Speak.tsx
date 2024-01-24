"use client";
import useLLM from "usellm";
import { useState } from "react";

export default function TextToSpeechDemoPage() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });

  async function handleSpeakClick() {
    if (!text) return;
    const { audioUrl } = await llm.speak({ text });
    setAudioUrl(audioUrl);
  }

  return (
    <div className="max-w-4xl w-full mx-auto my-4">
      <h1 className="fnto-medium text-4xl text-center">Text to Speech</h1>
      <textarea
        className="mt-4"
        placeholder="Enter some text here"
        rows = {5}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick = { handleSpeakClick } className="my-4">
        Speak
      </button>
      {audioUrl && <audio src={ audioUrl } controls />}
    </div>
  );
}
