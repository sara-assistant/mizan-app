"use client";
import { useState } from "react";
import Link from "next/link";
import { getGeminiResponse } from "../../lib/gemini/client";

export default function ScamCheckerPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const checkScam = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const res = await getGeminiResponse(`Analyze this for scam/fraud risk: "${input}". Tell me if it's safe or suspicious and why.`);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="dark-header">
        <div className="flex items-center gap-3 mb-2">
          <Link href="/" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <div className="text-[15px] font-black text-white">Scam Checker</div>
        </div>
        <div className="text-[22px] font-black text-white tracking-tight" style={{ letterSpacing: "-0.04em" }}>
          SCAM DETECTOR
        </div>
        <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-1">Paste suspicious messages, links, or offers</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase">Suspicious Content</label>
          <textarea
            className="mt-2 w-full border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3 text-[14px] text-[#1C1C1E] outline-none focus:border-[#FF6B00] resize-none"
            rows={5}
            placeholder="Paste suspicious message, email, link, or offer here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={checkScam}
            disabled={loading || !input.trim()}
            className="mt-3 w-full bg-[#FF6B00] text-white py-3.5 rounded-xl text-[14px] font-black disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "🔍 Check for Scam"}
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🛡️</span>
              <span className="text-[13px] font-black text-[#1C1C1E]">AI Analysis</span>
            </div>
            <div className="text-[13px] text-[#3C3C43] leading-relaxed" style={{ whiteSpace: "pre-wrap" }}>{result}</div>
          </div>
        )}
      </div>
    </div>
  );
}
