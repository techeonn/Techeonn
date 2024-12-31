import React, { useState } from "react";
import ChatBot from "react-chatbotify";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatbotComponent = () => {
  const apiKey = "AIzaSyAUaci8vEHAHL1bcDeA47lAhpGq8-BW8jQ"; // Add your API key here
  const modelType = "gemini-pro";
  const [hasError, setHasError] = useState(false);

  const gemini_stream = async (params) => {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: modelType });
      const result = await model.generateContentStream(params.userInput);

      let text = "";
      let offset = 0;
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        text += chunkText;

        // Visual streaming logic
        for (let i = offset; i < chunkText.length; i++) {
          await params.streamMessage(text.slice(0, i + 1));
          await new Promise((resolve) => setTimeout(resolve, 30));
        }
        offset += chunkText.length;
      }

      for (let i = offset; i < text.length; i++) {
        await params.streamMessage(text.slice(0, i + 1));
        await new Promise((resolve) => setTimeout(resolve, 30));
      }
      await params.endStreamMessage();
    } catch (error) {
      console.error("Error in API call:", error);
      await params.injectMessage("Unable to load model. Please check the API key or try again later.");
      setHasError(true);
    }
  };

  const flow = {
    start: {
      message: "Hello! Ask me anything powered by Gemini AI!",
      path: "loop",
    },
    loop: {
      message: async (params) => {
        await gemini_stream(params);
      },
      path: () => (hasError ? "start" : "loop"),
    },
  };

  return (
    <ChatBot
      settings={{
        general: { embedded: false },
        chatHistory: { disabled:true },
        botBubble: { simStream: true ,showAvatar:true},
        chatButton:{icon:"images/logo.png"},
        header:{
          title:"TechEonn",
          avatar:"images/logo.png"
        }
      }}
      flow={flow}
    />
  );
};

export default ChatbotComponent;
