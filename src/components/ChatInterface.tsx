import React, { useState } from 'react';
import { FeedbackDisplay } from './FeedbackDisplay';
import { useLearningStore } from '../store/learningStore';
import { AIService } from '../services/api';

interface ChatMessage {
  text: string;
  sender: 'user' | 'assistant';
  feedback?: any;
}

export const ChatInterface: React.FC = () => {
  const { 
    currentMode: mode, 
    currentSubMode: subMode,
    setMode,
    setSubMode 
  } = useLearningStore();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      // Add user message
      const userMessage: ChatMessage = {
        text: input,
        sender: 'user'
      };
      setMessages(prev => [...prev, userMessage]);

      // Get AI analysis
      const feedback = await AIService.analyzeText(input);

      // Add assistant response
      const assistantMessage: ChatMessage = {
        text: `Here's my feedback on your English: ${feedback.structuralImprovement}`,
        sender: 'assistant',
        feedback
      };
      setMessages(prev => [...prev, assistantMessage]);

      setInput('');
    } catch (error) {
      console.error('Error processing message:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="mode-selector">
        <select value={mode} onChange={e => setMode(e.target.value as any)}>
          <option value="casual">Casual Learning</option>
          <option value="goal-oriented">Goal-Oriented</option>
        </select>
        <select value={subMode} onChange={e => setSubMode(e.target.value as any)}>
          <option value="friend">Friend Mode</option>
          <option value="coach">Coach Mode</option>
        </select>
      </div>

      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
            {msg.feedback && <FeedbackDisplay feedback={msg.feedback} />}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}; 