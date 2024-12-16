// src/components/ChatArea.tsx
import React, { KeyboardEvent } from 'react';
import { FeedbackDisplay } from './FeedbackDisplay';

interface ChatMessage {
  text: string;
  sender: 'user' | 'assistant';
  feedback?: any;
}

interface ChatAreaProps {
  messages: ChatMessage[];
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => Promise<void>;
}

export const ChatArea: React.FC<ChatAreaProps> = ({ messages, input, onInputChange, onSend }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm h-[calc(100vh-8rem)] flex flex-col">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[70%] ${
              message.sender === 'user' 
                ? 'ml-auto bg-blue-600 text-white' 
                : 'bg-gray-100'
            } rounded-lg p-3`}
          >
            {message.text}
            {message.feedback && message.sender === 'assistant' && (
              <FeedbackDisplay feedback={message.feedback} />
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <button 
            onClick={onSend}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};