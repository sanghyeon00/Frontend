import React from "react";

export default function ChatBot() {
  return (
    <div className="chatbot-container">
      {/* 채팅 메시지 */}
      <div className="chat-messages">
        {/* 여기에 채팅 메시지를 나타내는 컴포넌트 또는 요소를 넣으세요 */}
        <div className="message">안녕하세요! 어떻게 도와드릴까요?</div>
      </div>

      {/* 입력창 */}
      <div className="chat-input">
        <input type="text" placeholder="메시지를 입력하세요..." />
        <button>전송</button>
      </div>
    </div>
  );
}