"use client"
import "regenerator-runtime"
import React, {useState, useContext, createContext, useEffect} from 'react';
import useLLM from "usellm"; 
import speech, { useSpeechRecognition }  from "react-speech-recognition"; 

const AppContext = createContext(); 

export const AppContextProvider = ({children}) => {
   const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
   const [result, setResult]  = useState(""); 
   const [input, setInput] = useState(""); 
   const [audioUrl, setAudioUrl] = useState(""); 
   const [chats, setChats] = useState([]); 
   const [len, setLen] = useState(0); 
   const [isLoading, setIsLoading] = useState(true); 
   const [isListening, setIsListening] = useState(false); 
   const { listening, transcript } = useSpeechRecognition();  
   
   useEffect(() => {
    fetchData(); 
   }, []); 
   
   useEffect(() => {
    if (len != chats.length) {
      fetchData();
      setLen(chats.length);
    }
   }, [len, chats])
   
   const generateResponse = async (message) => {
       const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST", 
          headers: {
             'Content-Type': "application/json", 
             'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`
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
       const data = await response.json(); 
       return data.choices[0].message.content;
    };   
    
   useEffect(() => {
    if (!listening && transcript) {
        generateResponse(transcript).then((response) => {
          setResult(response);
          const speechSynthesis = window.speechSynthesis; 
          const utterance = new window.SpeechSynthesisUtterance(response);
          window.speechSynthesis.cancel(); 
          speechSynthesis.speak(utterance); 
       }); 
    }
  }, [transcript, listening])
    
  useEffect(() => {
      if (listening && transcript) {
        setInput(transcript); 
      }
    }, [transcript, listening])
    
   const deleteChat = async (id) => {
    await fetch(`http://localhost:5000/chats/${id}`, {method: 'DELETE'}); 
    setChats(chats.filter((item) => item.id !== id)); 
   }
   
   const deleteChats = async () => {
    if (window.confirm("Are you sure you want to delete the chats ?")) {
      const apiUrl = "http://localhost:5000/chats"; 
      const toDelete = chats; 
      chats.forEach((item) => deleteChat(item.id));  
    }
   }; 
   
   const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/chats`); 
      const data = await response.json(); 
      setChats(data);
    } catch(error) {
      console.error("Error fetching the data", error); 
    }
   }; 
   
   const addChat = async (newChat) => {
    const response = await fetch("http://localhost:5000/chats", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: (JSON.stringify(newChat))
    }); 
    const data = await response.json(); 
    setChats([...chats, data]); 
    setInput("");
    setResult(""); 
    setLen(chats.length); 
   };
   
   const handleListen = () => {
    speech.startListening();
   }
   
   const handleSpeak = () => {
      const speechSynthesis = window.speechSynthesis; 
      const utterance = new SpeechSynthesisUtterance(result);
      speechSynthesis.speak(utterance); 
   };
   
   const handleClick = async () => {
    try {
      await llm.chat({
        messages: [{ role: "user", content: JSON.stringify(input) }],
        stream: true,
        onStream: ({ message }) => setResult(message.content),
      });
    } catch (error) {
      console.error("Something went wrong!", error);
      }
   }
   return (<AppContext.Provider value = {{ isListening, handleListen, handleSpeak, deleteChats, addChat, chats, setChats, audioUrl, result, setResult, input, setInput , handleClick }}> { children } </AppContext.Provider>); 
}

export default AppContext; 