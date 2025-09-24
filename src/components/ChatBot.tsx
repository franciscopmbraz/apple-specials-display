import React, { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m the Worten virtual assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsLoading(true);

    // Simulate API call for retail integration
    setTimeout(() => {
      const assistantMessage: Message = {
        role: 'assistant',
        content: 'Thank you for your message! How can I help you with products, shipping or technical support?',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentMessage(e.target.value);
    // Auto-resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 140) + 'px';
  };

  return (
    <div className="w-full max-w-[820px] mx-auto mt-8">
      <div 
        className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.04] rounded-2xl overflow-hidden flex flex-col"
        style={{
          boxShadow: '0 8px 30px rgba(2,6,23,0.6)',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))'
        }}
      >
        {/* Header */}
        <header className="p-5 border-b border-white/[0.03] flex items-center gap-3">
          <div 
            className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-[#042029]"
            style={{
              background: 'linear-gradient(135deg, #6ee7b7, #60a5fa)'
            }}
          >
            W
          </div>
          <div>
            <h1 className="text-base font-semibold m-0 text-black">Worten Assistant</h1>
            <p className="text-sm text-[#94a3b8] m-0">How can I help?</p>
          </div>
        </header>

        {/* Messages */}
        <div 
          className="p-5 flex flex-col gap-3 overflow-auto h-[440px]"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.02))'
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-[76%] p-3 rounded-xl text-sm ${
                message.role === 'user'
                  ? 'self-end text-white rounded-br-sm'
                  : 'self-start text-black rounded-bl-sm'
              }`}
              style={{
                background: message.role === 'user' 
                  ? 'linear-gradient(180deg, #2563eb, #1e40af)'
                  : 'rgba(255,255,255,0.03)',
                lineHeight: '1.35'
              }}
            >
              {message.content}
              <div className="text-xs text-[#94a3b8] mt-1.5">
                {message.timestamp.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div 
              className="self-start rounded-xl rounded-bl-sm p-3 max-w-[76%] text-black"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="flex gap-3 p-4 border-t border-white/[0.03]">
          <div className="flex-1 flex gap-2 items-center">
            <textarea
              value={currentMessage}
              onChange={handleTextareaChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full min-h-[44px] max-h-[140px] bg-transparent border border-white/[0.04] rounded-xl px-3 py-2.5 text-sm text-[#e6eef6] resize-none focus:outline-none focus:ring-2 focus:ring-[#6ee7b7]/50"
              rows={1}
            />
          </div>
          <div className="flex gap-2 items-center">
            <button 
              onClick={sendMessage}
              disabled={!currentMessage.trim() || isLoading}
              className="border-none px-4 py-2.5 rounded-xl font-semibold cursor-pointer disabled:opacity-50 text-[#042029]"
              style={{
                background: '#6ee7b7'
              }}
              onMouseEnter={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.background = '#5dd8a6';
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.background = '#6ee7b7';
                }
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;