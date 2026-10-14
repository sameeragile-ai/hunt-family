import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  X,
  Send,
  Calendar,
  Phone,
  Sparkles,
  Bot,
  User,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';
import { clinicData } from '../data/clinicData';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  suggestBooking?: boolean;
  suggestPhone?: boolean;
}

const QUICK_CHIPS = [
  'Book an appointment',
  'Do you take my insurance?',
  'Emergency help',
  'New patient special',
  'Membership plans',
  'Hours & location',
];

const INITIAL_MESSAGE: Message = {
  id: 'welcome-1',
  sender: 'bot',
  text: `Hello! I'm the digital assistant for Hunt Family Dentistry in Frisco, TX. How can I help you today? You can ask about our services, $139 new patient special, PPO insurance, or book an appointment. (¡Hablamos Español!)`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  suggestBooking: true,
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load from sessionStorage
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('hunt_dental_chat');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          setHasUnread(false);
          return;
        }
      }
    } catch {
      // ignore
    }
    setMessages([INITIAL_MESSAGE]);
  }, []);

  // Save to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem('hunt_dental_chat', JSON.stringify(messages));
      } catch {
        // ignore
      }
    }
  }, [messages]);

  // Auto scroll
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-5),
        }),
      });

      if (!response.ok) {
        throw new Error('Chat API returned an error');
      }

      const data = await response.json();
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply || 'I am here to help you with Hunt Family Dentistry. How may I assist you?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestBooking: data.suggestBooking ?? true,
        suggestPhone: data.suggestPhone ?? false,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.warn('Chatbot fetch failed, fallback locally:', err);
      // Fallback message
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `We are ready to assist you! You can easily schedule your visit online 24/7 or speak directly with our team in Frisco at (469) 269-0997.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestBooking: true,
        suggestPhone: true,
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom,0px))] md:bottom-6 right-3 sm:right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Close dental chat assistant' : 'Open dental chat assistant'}
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] text-white shadow-xl shadow-[#22B8E6]/30 border-2 border-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B7CF6]/50"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 animate-pulse" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 border-2 border-white"></span>
                </span>
              )}
            </>
          )}
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 sm:w-[400px] sm:h-[580px] bg-white sm:rounded-3xl shadow-2xl flex flex-col border border-slate-200/90 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0F1B2D] via-[#162942] to-[#0F1B2D] text-white p-4 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#34D3B4] to-[#22B8E6] p-[2px] flex items-center justify-center">
                    <div className="w-full h-full bg-[#0F1B2D] rounded-[14px] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#34D3B4]" />
                    </div>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0F1B2D]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-sm tracking-tight text-white">
                      Hunt Dental Assistant
                    </h3>
                    <span className="text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full border border-emerald-500/30">
                      Online
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Ask about specials, insurance, or booking
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <ChevronDown className="w-5 h-5 sm:hidden" />
                  <X className="w-5 h-5 hidden sm:block" />
                </button>
              </div>
            </div>

            {/* Quick chips bar */}
            <div className="bg-slate-50/90 border-b border-slate-200/70 p-2 overflow-x-auto no-scrollbar shrink-0 flex items-center gap-1.5 text-xs">
              {QUICK_CHIPS.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSendMessage(chip)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-[#0F1B2D] hover:border-[#22B8E6] hover:text-[#22B8E6] hover:bg-teal-50/50 transition-colors shrink-0 shadow-xs active:scale-95 text-[11px]"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                  >
                    <div className="flex items-end gap-2 max-w-[85%]">
                      {isBot && (
                        <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#34D3B4] to-[#22B8E6] text-white flex items-center justify-center shrink-0 mb-1 shadow-xs">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}

                      <div
                        className={`rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                          isBot
                            ? 'bg-white text-[#0F1B2D] border border-slate-200/80 rounded-bl-xs'
                            : 'bg-gradient-to-r from-[#22B8E6] to-[#8B7CF6] text-white rounded-br-xs font-medium'
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{msg.text}</p>

                        {/* Interactive CTAs embedded in bot reply */}
                        {isBot && (msg.suggestBooking || msg.suggestPhone) && (
                          <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                            {msg.suggestBooking && (
                              <a
                                href={clinicData.contact.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#34D3B4] to-[#22B8E6] text-white shadow-xs hover:shadow-md transition-all hover:scale-102"
                              >
                                <Calendar className="w-3.5 h-3.5" />
                                <span>Book Online</span>
                                <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                              </a>
                            )}
                            {msg.suggestPhone && (
                              <a
                                href={`tel:${clinicData.contact.phoneRaw}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-[#0F1B2D] hover:bg-slate-200 transition-colors"
                              >
                                <Phone className="w-3 h-3 text-teal-600" />
                                <span>(469) 269-0997</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>

                      {!isBot && (
                        <div className="w-7 h-7 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mb-1">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    <span className="text-[10px] text-slate-400 mt-1 px-9">
                      {msg.timestamp}
                    </span>
                  </motion.div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-end gap-2 max-w-[85%]">
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#34D3B4] to-[#22B8E6] text-white flex items-center justify-center shrink-0 mb-1">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-200/80 rounded-2xl rounded-bl-xs px-4 py-3 shadow-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#22B8E6] animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-[#34D3B4] animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 rounded-full bg-[#8B7CF6] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] sm:pb-3 bg-white border-t border-slate-200/80 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question in English o Español..."
                  disabled={isLoading}
                  className="flex-1 bg-slate-100 rounded-full px-4 py-2.5 text-xs sm:text-sm text-[#0F1B2D] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#22B8E6] border border-transparent"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#22B8E6] to-[#8B7CF6] text-white flex items-center justify-center disabled:opacity-50 hover:shadow-md transition-all active:scale-95 shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-2">
                Hunt Family Dentistry • Never gives medical diagnosis • Call 911 for emergencies
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
