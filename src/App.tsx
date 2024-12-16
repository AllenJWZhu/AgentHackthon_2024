// src/App.tsx
import React, { useState } from 'react';
import { LoginPage } from './components/auth/LoginPage';
import { SignupPage } from './components/auth/SignupPage';
import { ForgotPasswordPage } from './components/auth/ForgotPasswordPage';
import { HomePage } from './components/HomePage';
import { ChatInterface } from './components/chat/ChatInterface';
import { Settings } from './components/settings/Settings';
import { Profile } from './components/profile/Profile';

export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'chat' | 'login' | 'signup' | 'forgot-password'>('login');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  if (!isLoggedIn) {
    switch (currentPage) {
      case 'signup':
        return <SignupPage onBackToLogin={() => setCurrentPage('login')} />;
      case 'forgot-password':
        return <ForgotPasswordPage onBackToLogin={() => setCurrentPage('login')} />;
      default:
        return (
          <LoginPage 
            onLogin={() => {
              setIsLoggedIn(true);
              setCurrentPage('home');
            }}
            onSignup={() => setCurrentPage('signup')}
            onForgotPassword={() => setCurrentPage('forgot-password')}
          />
        );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">English Learning Assistant</h1>
          <nav className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'home' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('chat')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'chat' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Chat
            </button>
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Settings
            </button>
            <button 
              onClick={() => setIsProfileOpen(true)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Profile
            </button>
            <button 
              onClick={() => {
                setIsLoggedIn(false);
                setCurrentPage('login');
              }}
              className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pt-24 pb-6">
        {currentPage === 'home' ? <HomePage /> : <ChatInterface />}
      </main>

      <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <Profile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </div>
  );
};