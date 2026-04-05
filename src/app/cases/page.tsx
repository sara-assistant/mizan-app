"use client";
import Link from "next/link";
import { mockCases } from "../../lib/data/mockData";
import { Tag } from "../../components/ui";

export default function CasesPage() {
  const statusVariant = (status: string) => {
    if (status === "active") return "active";
    if (status === "pending") return "pending";
    if (status === "won") return "won";
    return "info";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="page-header">
        <div className="page-title">MY</div>
        <span className="page-title-grad">CASES ›</span>
        <Link href="/submit" className="flex items-center gap-2 bg-[#1C1C1E] rounded-xl px-4 py-2.5 w-fit">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-[13px] font-black text-white">New Case</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        {mockCases.map((c) => (
          <Link href="/case-passport" key={c.id} className="bg-white rounded-2xl overflow-hidden shadow-sm active:scale-[0.98] transition-transform">
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-[11px] font-bold text-[rgba(0,0,0,0.35)] mb-0.5">#{c.id}</div>
                  <div className="text-[15px] font-black text-[#1C1C1E] tracking-tight">{c.name}</div>
                  <div className="text-[11px] text-[rgba(0,0,0,0.38)] mt-0.5">{c.court}</div>
                </div>
                <Tag variant={statusVariant(c.status)}>{c.status.toUpperCase()}</Tag>
              </div>

              {/* Timeline */}
              <div className="flex gap-1 mb-2">
                {Array.from({ length: c.totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-1 rounded-full"
                    style={{
                      background: i < c.progress ? "#34C759" : i === c.progress ? "#FF6B00" : "#F2F2F7",
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between">
                {c.steps.map((step, i) => (
                  <span
                    key={i}
                    className="text-[9px]"
                    style={{ color: i === c.progress ? "#FF6B00" : "#8E8E93", fontWeight: i === c.progress ? 700 : 400 }}
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>

            {c.actionDue && (
              <div className="border-t border-[#F2F2F7] px-4 py-2.5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#FF3B30]">⚠ {c.actionDue}</span>
                <span className="text-[11px] font-bold text-[#FF6B00]">View →</span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
