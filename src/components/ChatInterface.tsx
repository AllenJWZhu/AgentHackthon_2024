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
      const userMessage: ChatMessage = {
        text: input,
        sender: 'user'
      };
      setMessages(prev => [...prev, userMessage]);

      const feedback = await AIService.analyzeText(input);

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
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-4 space-x-4">
        <select className="p-2 border rounded" value={mode} onChange={e => setMode(e.target.value as any)}>
          <option value="casual">Casual Learning</option>
          <option value="goal-oriented">Goal-Oriented</option>
        </select>
        <select className="p-2 border rounded" value={subMode} onChange={e => setSubMode(e.target.value as any)}>
          <option value="friend">Friend Mode</option>
          <option value="coach">Coach Mode</option>
        </select>
      </div>

      <div className="space-y-4 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-4 rounded ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <p>{msg.text}</p>
            {msg.feedback && <FeedbackDisplay feedback={msg.feedback} />}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};