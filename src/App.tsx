import React from 'react';
import { ChatInterface } from './components/ChatInterface';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">English Learning Assistant</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <ChatInterface />
      </main>
    </div>
  );
};