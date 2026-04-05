"use client";
import Link from "next/link";
import { mockDeadlines, mockCasePassport } from "../../lib/data/mockData";

export default function DeadlinesPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="page-header">
        <div className="page-title">DEADLINES</div>
        <span className="page-title-grad">+ VAULT ›</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-5">
        {/* Deadline Countdown */}
        <div>
          <div className="text-[11px] font-bold text-[rgba(0,0,0,0.3)] tracking-wider uppercase mb-3">Upcoming Deadlines</div>
          <div className="flex gap-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {mockDeadlines.map((d) => (
              <div key={d.id} className="flex-shrink-0 bg-white rounded-2xl p-4 w-36 shadow-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg mb-2" style={{ background: d.color }}>
                  {d.icon}
                </div>
                <div
                  className="text-[22px] font-black tracking-tight"
                  style={{ color: d.daysLeft <= 10 ? "#FF3B30" : d.daysLeft <= 30 ? "#D97706" : "#10B981" }}
                >
                  {d.daysLeft}d
                </div>
                <div className="text-[10px] text-[#8E8E93]">days left</div>
                <div className="text-[11px] font-bold text-[#1C1C1E] mt-2">{d.name}</div>
                <div className="text-[9px] text-[#8E8E93]">{d.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Timeline */}
        <div>
          <div className="text-[11px] font-bold text-[rgba(0,0,0,0.3)] tracking-wider uppercase mb-3">Case Timeline</div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[12px] text-[#8E8E93]">Case #{mockCasePassport.id}</div>
                <div className="text-[15px] font-black text-[#1C1C1E]">{mockCasePassport.name}</div>
              </div>
              <Link href="/case-passport" className="text-[11px] font-bold text-[#FF6B00]">Details →</Link>
            </div>
            <div className="flex flex-col gap-0">
              {mockCasePassport.milestones.map((m, i) => (
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
                    {i < mockCasePassport.milestones.length - 1 && (
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
        </div>

        {/* Document Vault */}
        <div>
          <div className="text-[11px] font-bold text-[rgba(0,0,0,0.3)] tracking-wider uppercase mb-3">Document Vault</div>
          <div className="grid grid-cols-2 gap-2">
            {mockCasePassport.documents.map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl p-3.5 shadow-sm flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#FFF0E6] flex items-center justify-center text-lg">📄</div>
                <div className="text-[11px] font-bold text-[#1C1C1E]">{doc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
