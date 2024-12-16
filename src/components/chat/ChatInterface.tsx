// src/components/ChatInterface.tsx
import React, { useState } from 'react';
import { useLearningStore } from '../../store/learningStore';
import { AIService } from '../../services/api';
import { Sidebar } from '../layout/Sidebar';
import { ChatArea } from './ChatArea';

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
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <Sidebar 
          mode={mode}
          subMode={subMode}
          onModeChange={setMode}
          onSubModeChange={setSubMode}
        />
      </div>
      <div className="col-span-9">
        <ChatArea 
          messages={messages}
          input={input}
          onInputChange={setInput}
          onSend={handleSend}
        />
      </div>
    </div>
  );
};