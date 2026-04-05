"use client";
import { useState } from "react";
import Link from "next/link";
import { mockFaqs } from "../../lib/data/mockData";

export default function QaPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = mockFaqs.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <div className="page-header">
        <div className="page-title">Q&A</div>
        <span className="page-title-grad">HELP ›</span>

        <div className="relative mt-3">
          <input
            className="w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3 text-[14px] text-[#1C1C1E] outline-none focus:border-[#FF6B00] placeholder:text-[#8E8E93]"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg className="absolute right-3 top-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="#8E8E93" strokeWidth="1.5" />
            <path d="M11 11l3 3" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2">
        {filtered.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <button
              className="w-full px-4 py-3.5 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-[13px] font-bold text-[#1C1C1E] pr-3">{faq.q}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className={`flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              >
                <path d="M3 5l4 4 4-4" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4">
                <div className="text-[12px] text-[#3C3C43] leading-relaxed border-t border-[#F2F2F7] pt-3" style={{ whiteSpace: "pre-wrap" }}>
                  {faq.a}
                </div>
              </div>
            )}
          </div>
        ))}

        <Link href="/chat" className="bg-gradient-to-r from-[#1A1A1A] to-[#2D1810] rounded-2xl p-4 mt-2 text-center">
          <div className="text-[14px] font-black text-white mb-1">💬 Ask MIZAN AI</div>
          <div className="text-[11px] text-[rgba(255,255,255,0.5)]">Can't find your answer? Chat with our AI</div>
        </Link>
      </div>
    </div>
  );
}
