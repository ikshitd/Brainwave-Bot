import "regenerator-runtime"
import React, { useState, useEffect } from 'react';
import speech, { useSpeechRecognition }  from "react-speech-recognition"; 
const apiKey = "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";

const Speech = (props) => {
   const { listening, transcript } = useSpeechRecognition(); 
   const [thinking, setThinking] = useState(false); 
   const [aiText, setAIText] = useState(""); 
    const convertToSpeech = async (message) => {
         setThinking(true); 
         const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST", 
            headers: {
               'Content-Type': "application/json", 
               'Authorization': `Bearer ${apiKey}`
            }, 
            body: JSON.stringify({
               messages: [
               {
                  role: "user", 
                  content: message 
               }],
               model: "gpt-3.5-turbo", 
            }), 
         }); 
         setThinking(false); 
         const data = await response.json(); 
         console.log(data.choices[0].message.content); 
         return data.choices[0].message.content;
      };   
   
   useEffect(() => {
      if (!listening && transcript) {
         convertToSpeech(transcript).then((response) => {
            const speechSynthesis = window.speechSynthesis; 
            const utterance = new SpeechSynthesisUtterance(response);
            speechSynthesis.speak(utterance); 
            setAIText(response); 
         }); 
      }
   }, [transcript, listening])
   return (
      <div> 
         {
            listening ? (
               <p> Go ahead I'm listening </p>
            ) : (
               <p> Click the button to ask me anything </p>
            )
         }
         <button onClick = {() => {
            speech.startListening(); 
         }}> ask me anything </button>
         {
            transcript && <div> HERE   {transcript} </div>
         }
         {
            thinking && <div> HERE2   Thinking... </div>
         }
         {
            aiText && <div> HERE3 {aiText} </div> 
         }
      </div>
  )
}

export default Speech;

//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