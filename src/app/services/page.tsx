"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { mockServices, mockGovServices } from "../../lib/data/mockData";

export default function ServicesPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"legal" | "gov">("legal");
  const [activeCat, setActiveCat] = useState("All");

  const categories = [
    { key: "All", label: t("common.all") },
    { key: "Family", label: t("services.family") },
    { key: "Real Estate", label: t("services.real_estate") },
    { key: "Business", label: t("services.business") },
    { key: "Criminal", label: t("services.criminal") },
    { key: "Traffic", label: t("services.traffic") },
    { key: "Labor", label: t("services.labor") },
  ];

  const filteredServices = activeCat === "All"
    ? mockServices
    : mockServices.filter((s) => s.name.includes(activeCat));

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="page-header">
        <div className="page-title">{t("common.all").toUpperCase()}</div>
        <span className="page-title-grad">{t("services.title").toUpperCase()} ›</span>

        {/* Toggle */}
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("legal")}
            className={`flex-1 py-2.5 rounded-xl text-[13px] font-black transition-all ${activeTab === "legal" ? "bg-[#FF6B00] text-white shadow-md" : "bg-white text-[rgba(0,0,0,0.35)] shadow-sm"}`}
          >
            {t("services.legal") || "Legal"}
          </button>
          <button
            onClick={() => setActiveTab("gov")}
            className={`flex-1 py-2.5 rounded-xl text-[13px] font-black transition-all ${activeTab === "gov" ? "bg-[#FF6B00] text-white shadow-md" : "bg-white text-[rgba(0,0,0,0.35)] shadow-sm"}`}
          >
            {t("services.gov_services")}
          </button>
        </div>
      </div>

      {activeTab === "legal" ? (
        <>
          {/* Category pills */}
          <div className="flex gap-2 px-5 py-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCat(cat.key)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all ${activeCat === cat.key ? "bg-[#FF6B00] text-white shadow-md" : "bg-white text-[rgba(0,0,0,0.45)] border border-[rgba(0,0,0,0.08)] shadow-sm"}`}
              >
                {cat.label}
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
                  <div className="text-[15px] font-black text-[#1C1C1E] tracking-tight">{s.name}</div>
                  <div className="text-[11px] text-[rgba(0,0,0,0.38)] mt-0.5">{s.specialty}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-2.5">
          {mockGovServices.map((s) => (
            <Link href="/submit" key={s.id} className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm active:scale-[0.98] transition-transform">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: s.color }}>
                {s.icon}
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-black text-[#1C1C1E] tracking-tight">{s.name}</div>
                <div className="text-[11px] text-[rgba(0,0,0,0.38)] mt-0.5">{s.sub}</div>
              </div>
              <div className="text-[11px] font-bold text-[#10B981]">{s.price}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
