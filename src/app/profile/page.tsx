"use client";
import { useState } from "react";
import Link from "next/link";
import { mockUser } from "../../lib/data/mockData";

export default function ProfilePage() {
  const [notifications, setNotifications] = useState(true);
  const [lang, setLang] = useState<"en" | "ar">("en");

  const settings = [
    { icon: "🛂", label: "Visa & Immigration", sub: "Visa expires in 23 days" },
    { icon: "💼", label: "Employment", sub: "Employment visa · Active" },
    { icon: "🏠", label: "Tenancy", sub: "Ejari · Renewed Jan 2024" },
    { icon: "🪪", label: "Emirates ID", sub: "Expires Dec 2025" },
    { icon: "⚖️", label: "Cases", sub: "1 active case" },
    { icon: "📁", label: "Documents", sub: "7 documents stored" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2D1810] px-5 pt-4 pb-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[rgba(255,107,0,0.15)] -translate-y-1/2 translate-x-1/4" />
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF3CAC] mx-auto flex items-center justify-center text-white text-3xl font-black mb-3 relative">
          {mockUser.avatar}
          <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#10B981] border-2 border-[#1A1A1A]" />
        </div>
        <div className="text-[20px] font-black text-white tracking-tight">{mockUser.name}</div>
        <div className="text-[12px] text-[rgba(255,255,255,0.5)] mt-0.5">{mockUser.email}</div>
        <div className="text-[11px] text-[rgba(255,255,255,0.4)] mt-0.5">+971 50 123 4567</div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
        {/* Language Toggle */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase mb-3">Language</div>
          <div className="flex gap-2">
            {[
              { code: "en" as const, label: "🇬🇧 English" },
              { code: "ar" as const, label: "🇦🇪 العربية" },
            ].map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex-1 py-2.5 rounded-xl text-[13px] font-black transition-all ${lang === l.code ? "bg-[#FF6B00] text-white" : "bg-[#F2F2F7] text-[rgba(0,0,0,0.4)]"}`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications Toggle */}
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[13px] font-black text-[#1C1C1E]">Notifications</div>
            <div className="text-[11px] text-[#8E8E93]">Push notifications & alerts</div>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-7 rounded-full relative transition-colors ${notifications ? "bg-[#34C759]" : "bg-[#E8E8ED]"}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-all shadow-sm ${notifications ? "right-1" : "left-1"}`} />
          </button>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {settings.map((s, i) => (
            <Link
              key={i}
              href="/"
              className={`flex items-center gap-3 px-4 py-3.5 ${i !== settings.length - 1 ? "border-b border-[#F2F2F7]" : ""}`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#F2F2F7] flex items-center justify-center text-base">{s.icon}</div>
              <div className="flex-1">
                <div className="text-[13px] font-bold text-[#1C1C1E]">{s.label}</div>
                <div className="text-[11px] text-[#8E8E93]">{s.sub}</div>
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>

        <button className="text-[13px] font-black text-[#FF3B30] py-3 text-center">
          Sign Out
        </button>

        <div className="text-center text-[10px] text-[#8E8E93]">
          MIZAN v1.0.0 · Made with ❤️ in Dubai
        </div>
      </div>
    </div>
  );
}
