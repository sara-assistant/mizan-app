"use client";
import Link from "next/link";
import { mockNews } from "../../lib/data/mockData";

export default function NewsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="page-header">
        <div className="page-title">LEGAL</div>
        <span className="page-title-grad">NEWS ›</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        {mockNews.map((n) => (
          <div key={n.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="h-24 flex items-center px-5 relative" style={{ background: n.color }}>
              <div className="absolute top-3 left-3 rounded-full px-2 py-0.5 text-[9px] font-bold bg-[rgba(0,0,0,0.4)] text-white">
                {n.tag}
              </div>
              <div className="text-white text-[15px] font-black tracking-tight">{n.category}</div>
            </div>
            <div className="p-4">
              <div className="text-[14px] font-black text-[#1C1C1E] leading-snug mb-2">{n.title}</div>
              <div className="text-[11px] text-[#8E8E93]">{n.time} · {n.category}</div>
              <button className="mt-3 text-[12px] font-black text-[#FF6B00]">Read more →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
