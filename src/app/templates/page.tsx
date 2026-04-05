"use client";
import Link from "next/link";
import { mockTemplates } from "../../lib/data/mockData";

export default function TemplatesPage() {
  const categories = ["All", "Real Estate", "Business", "General"];

  return (
    <div className="flex flex-col h-full">
      <div className="page-header">
        <div className="page-title">DOC</div>
        <span className="page-title-grad">TEMPLATES ›</span>
        <p className="text-[13px] text-[rgba(0,0,0,0.4)] mt-1">Ready-to-use legal document templates</p>
      </div>

      <div className="flex gap-2 px-4 py-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[11px] font-bold ${cat === "All" ? "bg-[#FF6B00] text-white" : "bg-white text-[rgba(0,0,0,0.45)] border border-[rgba(0,0,0,0.08)]"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2.5">
        {mockTemplates.map((t) => (
          <div key={t.id} className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-xl">{t.icon}</div>
            <div className="flex-1">
              <div className="text-[14px] font-black text-[#1C1C1E]">{t.name}</div>
              <div className="text-[11px] text-[#8E8E93] mt-0.5">{t.category} · {t.pages} pages</div>
            </div>
            <button className="px-4 py-2 bg-[#F2F2F7] rounded-xl text-[11px] font-bold text-[#1C1C1E]">
              Preview
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
