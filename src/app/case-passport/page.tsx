"use client";
import Link from "next/link";
import { mockCasePassport } from "../../lib/data/mockData";
import { Tag } from "../../components/ui";

export default function CasePassportPage() {
  const c = mockCasePassport;

  return (
    <div className="flex flex-col h-full">
      <div className="dark-header">
        <div className="flex items-center gap-3 mb-2">
          <Link href="/cases" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="text-[15px] font-black text-white">Case Passport</div>
        </div>
        <div className="text-[22px] font-black text-white tracking-tight" style={{ letterSpacing: "-0.04em" }}>
          {c.name.toUpperCase()}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
        {/* Summary Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-[11px] text-[#8E8E93]">Case #{c.id}</div>
              <div className="text-[16px] font-black text-[#1C1C1E]">{c.name}</div>
              <div className="text-[11px] text-[#8E8E93] mt-0.5">{c.court}</div>
            </div>
            <Tag variant="active">Active</Tag>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F2F2F7] rounded-xl p-3">
              <div className="text-[10px] text-[#8E8E93] font-bold uppercase">Filed</div>
              <div className="text-[12px] font-black text-[#1C1C1E] mt-0.5">{c.filedDate}</div>
            </div>
            <div className="bg-[#F2F2F7] rounded-xl p-3">
              <div className="text-[10px] text-[#8E8E93] font-bold uppercase">Claim</div>
              <div className="text-[12px] font-black text-[#FF6B00]">{c.claimAmount}</div>
            </div>
            <div className="bg-[#F2F2F7] rounded-xl p-3">
              <div className="text-[10px] text-[#8E8E93] font-bold uppercase">Opposing Party</div>
              <div className="text-[11px] font-black text-[#1C1C1E] mt-0.5">{c.opposingParty}</div>
            </div>
            <div className="bg-[#F2F2F7] rounded-xl p-3">
              <div className="text-[10px] text-[#8E8E93] font-bold uppercase">Lawyer</div>
              <div className="text-[12px] font-black text-[#1C1C1E] mt-0.5">{c.assignedLawyer}</div>
            </div>
          </div>
        </div>

        {/* Next Hearing */}
        <div className="bg-[#FFF0E6] rounded-2xl p-4">
          <div className="text-[11px] font-bold text-[#FF6B00] uppercase mb-1">⚡ Next Hearing</div>
          <div className="text-[15px] font-black text-[#1C1C1E]">{c.nextHearing}</div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-[12px] font-black text-[#1C1C1E] mb-3">Case Timeline</div>
          <div className="flex flex-col gap-0">
            {c.milestones.map((m, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
                    style={{
                      background: m.done ? "#34C759" : m.current ? "#FF6B00" : "#fff",
                      borderColor: m.done ? "#34C759" : m.current ? "#FF6B00" : "rgba(0,0,0,0.15)",
                      boxShadow: m.current ? "0 0 0 3px rgba(255,107,0,0.2)" : "",
                    }}
                  />
                  {i < c.milestones.length - 1 && (
                    <div className="w-0.5 flex-1 my-0.5" style={{ background: m.done ? "#34C759" : "rgba(0,0,0,0.08)" }} />
                  )}
                </div>
                <div className="pb-4">
                  <div className="text-[12px] font-bold text-[#1C1C1E]">{m.event}</div>
                  <div className="text-[10px] text-[#8E8E93]">{m.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-[12px] font-black text-[#1C1C1E] mb-3">📁 Documents</div>
          <div className="flex flex-col gap-2">
            {c.documents.map((doc, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-[#F2F2F7] last:border-0">
                <div className="w-8 h-8 rounded-lg bg-[#FFF0E6] flex items-center justify-center text-sm">📄</div>
                <span className="text-[13px] font-bold text-[#1C1C1E]">{doc}</span>
                <span className="ml-auto text-[10px] text-[#10B981] font-bold">✓ Ready</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-[12px] font-black text-[#1C1C1E] mb-2">📝 Notes</div>
          <div className="text-[12px] text-[#3C3C43] leading-relaxed" style={{ whiteSpace: "pre-wrap" }}>{c.notes}</div>
        </div>
      </div>
    </div>
  );
}
