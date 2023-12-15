import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { MainContainer, SubContainer, ChatInput, ChatButton } from "./Chat.style.jsx";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey : "Input API Key",
  dangerouslyAllowBrowser: true
});

function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const endOfChatRef = useRef(null);

  const sendMessage = useCallback(async () => {
      if (text.length === 0) return;
      const response = await openai.chat.completions.create({
        messages:[
          {
            role: "system",
            content: "You are a helpful assistant designed to output JSON.",
          },
          { role: "user", content: text },
        ],
        model: "gpt-3.5-turbo"
      });
      const botResponse = response.choices[0].message.content;
      setMessages((prevMessages) => [...prevMessages, { text, user: "you" }]);
      setText("");
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, user: "bot" }]);
  }, [text]);

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  return (
    <MainContainer>
      {messages.map((message, index) => (
        <p key={index}>
          <strong>{message.user}:</strong> {message.text}
        </p>
      ))}
      <div ref={endOfChatRef} />
      <SubContainer>
        <ChatInput value={text} placeholder={"GPT에게 질문하세요"} onChange={(e) => setText(e.target.value)} />
        <ChatButton onClick={sendMessage}>Send</ChatButton>
      </SubContainer>
    </MainContainer>
  );
}

export default Chat;
// const sendMessage = async () => {
//   if (text.length === 0) return;
//   setMessages((prevMessages) => [...prevMessages, { text, user: "you" }]);
//   setText("");
//   const { data } = await axios.post("/api/chat", { message: text });
//   setMessages((prevMessages) => [...prevMessages, { text: data.message, user: "bot" }]);
// };