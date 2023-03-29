import React from "react";
import { useState } from 'react';
import ChatMessage from './ChatMessage';
  
const Apuri = () => {
  // add state for input and chat log
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([{ 
      user: "gpt", 
      message: "How can I help you today?"
  },{
    user: "me",
    message: "I want to use ChatGPT today"
  }]);

  // clear chats
  const clearChats = () => {
    setChatLog([]);
  }

  async function handleSubmit(e){
    e.preventDefault();
    let message = input;
    let chatLogNew = [...chatLog, {user: "me", message: `${input}`}]
    setInput("");
    setChatLog(chatLogNew);
    const messages = chatLogNew.map((message) => message.message).join("\n");
    // fetch response to the api combining the chat log array of messages and sending it as a message to localhost:3080 as a post
    const response = await fetch('https://2kq2pkev2m.execute-api.eu-north-1.amazonaws.com/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({message: message})
    });
    const data = await response.json();
    setChatLog([...chatLogNew, {user: "gpt", message: `${data.message}`}]);
    console.log(data.message);
  }

  return (
    <div className="chatbox-outer">
      <div className="chatbox-container">
        <section className="chatbox">
          <div className="chat-log">
            {chatLog.map((message, index) => (
              <ChatMessage key={index} message={message}/>
            ))}
          </div>
          <div className="chat-input-holder">
            <form onSubmit={handleSubmit}>
              <input 
              rows="1" 
              value={input}
              onChange={e => setInput(e.target.value)}
              className="chat-input-textarea" 
              ></input>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Apuri;