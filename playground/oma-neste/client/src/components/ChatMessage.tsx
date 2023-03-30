import React from "react";
import { TypeAnimation } from "react-type-animation";
import apuriIcon from "../img/apuri.png";

const ChatMessage = ({ message }) => {
  const content = message.content;
  return (
    <div className={`chat-message ${message.role === "assistant" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.role === "assistant" && "chatgpt"}`}>
          {message.role == "assistant" && <img src={apuriIcon} alt="apuri" />}
          {message.role == "user" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60.671 60.671"
              xmlSpace="preserve"
            >
              <ellipse
                style={{
                  fill: "#010002",
                }}
                cx={30.336}
                cy={12.097}
                rx={11.997}
                ry={12.097}
              />
              <path
                style={{
                  fill: "#010002",
                }}
                d="M35.64 30.079H25.031c-7.021 0-12.714 5.739-12.714 12.821v17.771h36.037V42.9c0-7.082-5.693-12.821-12.714-12.821z"
              />
            </svg>
          )}
        </div>
        <div className="message">
          {message.role === "assistant" ? (
            <TypeAnimation sequence={[content]} wrapper="span" cursor={false} repeat={0} speed={60} />
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
