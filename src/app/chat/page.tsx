"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { getGeminiResponse } from "../../lib/gemini/client";
import { chatSuggestions } from "../../lib/data/mockData";

interface Message {
  role: "user" | "ai";
  text: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hello! I'm MIZAN, your AI legal assistant. I can help with UAE law questions in Arabic and English. What can I assist you with today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const textToSend = text || input.trim();
    if (!textToSend) return;

    setMessages((prev) => [...prev, { role: "user", text: textToSend }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await getGeminiResponse(textToSend);
      setMessages((prev) => [...prev, { role: "ai", text: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "I'm sorry, I encountered an error. Please try again." },
      ]);
    }
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white px-5 py-3 border-b border-[rgba(0,0,0,0.07)]">
        <div className="flex items-center justify-between mb-2">
          <Link href="/" className="w-8 h-8 rounded-full bg-[#E8E8ED] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="#3C3C43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="text-center">
            <div className="text-[15px] font-black text-[#1C1C1E] tracking-tight">MIZAN AI</div>
            <div className="text-[10px] text-[rgba(0,0,0,0.4)]">UAE Law · Arabic & English</div>
          </div>
          <div style={{ width: 32 }} />
        </div>
        <div className="flex gap-1.5">
          <div className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FF6B00] text-white">AR</div>
          <div className="px-2.5 py-1 rounded-full text-[10px] font-bold border border-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.4)]">EN</div>
          <div className="px-2.5 py-1 rounded-full text-[10px] font-bold border border-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.4)]">HI</div>
        </div>
      </div>

      {/* Suggestion chips */}
      <div className="flex gap-2 px-4 py-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {chatSuggestions.map((s, i) => (
          <button
            key={i}
            onClick={() => sendMessage(s)}
            className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold bg-[#F5F4F0] text-[rgba(0,0,0,0.55)] border border-[rgba(0,0,0,0.07)]"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex items-end gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            {m.role === "ai" && (
              <div className="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0 shadow-sm"
                style={{ boxShadow: "0 2px 8px rgba(255,107,0,0.3)" }}>
                <span className="text-white text-[10px] font-black">M</span>
              </div>
            )}
            <div
              className={`max-w-[78%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                m.role === "ai"
                  ? "bg-[#F5F4F0] rounded-[18px] rounded-bl-2xl text-[#1C1C1E]"
                  : "bg-[#FF6B00] rounded-[18px] rounded-br-2xl text-white"
              }`}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[10px] font-black">M</span>
            </div>
            <div className="bg-[#F5F4F0] rounded-[18px] rounded-bl-2xl px-4 py-3 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E8E93] typing-dot" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E8E93] typing-dot" style={{ animationDelay: "0.2s" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E8E93] typing-dot" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-4 py-3 bg-white border-t border-[rgba(0,0,0,0.07)]">
        <div className="flex items-center gap-2 bg-[#F2F2F7] rounded-full px-4 py-2">
          <input
            className="flex-1 bg-transparent text-[15px] text-[#1C1C1E] outline-none placeholder:text-[#8E8E93]"
            placeholder="Ask a legal question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            className="w-8 h-8 rounded-full bg-[#FF6B00] flex items-center justify-center disabled:opacity-40"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1.5 12.5L13 7 1.5 1.5v4L10 7l-8.5.5V12.5z" fill="white" />
            </svg>
          </button>
        </div>
        <p className="text-[9px] text-[#8E8E93] text-center mt-2">
          MIZAN provides general legal information. For specific legal advice, please consult a licensed lawyer.
        </p>
      </div>
    </div>
  );
}
