"use client";
import { useState } from "react";
import Link from "next/link";
import { mockServices, mockGovServices } from "../../lib/data/mockData";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"legal" | "gov">("legal");
  const [activeCat, setActiveCat] = useState("All");

  const categories = ["All", "Family", "Real Estate", "Business", "Criminal", "Traffic", "Labor"];

  const filteredServices = activeCat === "All"
    ? mockServices
    : mockServices.filter((s) => s.name.includes(activeCat));

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="page-header">
        <div className="page-title">OUR</div>
        <span className="page-title-grad">SERVICES ›</span>

        {/* Toggle */}
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("legal")}
            className={`flex-1 py-2.5 rounded-xl text-[13px] font-black transition-all ${activeTab === "legal" ? "bg-[#FF6B00] text-white shadow-md" : "bg-white text-[rgba(0,0,0,0.35)] shadow-sm"}`}
          >
            Legal
          </button>
          <button
            onClick={() => setActiveTab("gov")}
            className={`flex-1 py-2.5 rounded-xl text-[13px] font-black transition-all ${activeTab === "gov" ? "bg-[#FF6B00] text-white shadow-md" : "bg-white text-[rgba(0,0,0,0.35)] shadow-sm"}`}
          >
            Government
          </button>
        </div>
      </div>

      {activeTab === "legal" ? (
        <>
          {/* Category pills */}
          <div className="flex gap-2 px-5 py-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all ${activeCat === cat ? "bg-[#FF6B00] text-white shadow-md" : "bg-white text-[rgba(0,0,0,0.45)] border border-[rgba(0,0,0,0.08)] shadow-sm"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services list */}
          <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-2.5">
            {filteredServices.map((s) => (
              <Link href="/submit" key={s.id} className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm active:scale-[0.98] transition-transform">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: s.color }}>
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-bold text-[#1C1C1E]">{s.name}</div>
                  <div className="text-[11px] text-[#8E8E93] mt-0.5">{s.specialty}</div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] font-black text-[#FF6B00]">{s.price}</div>
                  <div className="text-[9px] text-[#8E8E93] mt-0.5">Starting from</div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2.5">
          {mockGovServices.map((s) => (
            <Link href="/submit" key={s.id} className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm active:scale-[0.98] transition-transform">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: s.color }}>
                {s.icon}
              </div>
              <div className="flex-1">
                <div className="text-[14px] font-bold text-[#1C1C1E]">{s.name}</div>
                <div className="text-[11px] text-[#8E8E93] mt-0.5">{s.sub}</div>
              </div>
              <div className="text-right">
                <div className="text-[12px] font-black text-[#FF6B00]">{s.price}</div>
                <div className="text-[9px] text-[#8E8E93] mt-0.5">Submit →</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
