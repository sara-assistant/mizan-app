"use client";
import { useState } from "react";
import Link from "next/link";

const requirements = [
  { text: "Valid passport (6+ months)", done: true },
  { text: "Investment proof (AED 2M+)", done: false },
  { text: "Medical fitness test", done: false },
  { text: "Emirates ID", done: false },
  { text: "No criminal record", done: false },
];

export default function GoldenVisaPage() {
  const [income, setIncome] = useState("");
  const [investment, setInvestment] = useState("");
  const [eligible, setEligible] = useState<boolean | null>(null);

  const checkEligibility = () => {
    const inv = parseInt(investment.replace(/[^0-9]/g, ""));
    setEligible(inv >= 2000000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="page-header">
        <div className="page-title">GOLDEN</div>
        <span className="page-title-grad">VISA ›</span>
        <p className="text-[13px] text-[rgba(0,0,0,0.4)] mt-1">10-Year UAE Golden Visa eligibility check</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase">Monthly Income (AED)</label>
          <input
            className="mt-2 w-full border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3.5 text-[15px] text-[#1C1C1E] outline-none focus:border-[#FF6B00]"
            placeholder="e.g. 50000"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase">Property / Business Investment (AED)</label>
          <input
            className="mt-2 w-full border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3.5 text-[15px] text-[#1C1C1E] outline-none focus:border-[#FF6B00]"
            placeholder="e.g. 2000000"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />
          <button
            onClick={checkEligibility}
            className="mt-3 w-full bg-[#FF6B00] text-white py-3 rounded-xl text-[14px] font-black"
          >
            Check Eligibility
          </button>
        </div>

        {eligible !== null && (
          <div className={`rounded-2xl p-4 ${eligible ? "bg-[#ECFDF5]" : "bg-[#FEF3C7]"}`}>
            <div className="text-lg mb-1">{eligible ? "✅" : "⏳"}</div>
            <div className="text-[14px] font-black text-[#1C1C1E]">
              {eligible ? "You appear eligible for Golden Visa!" : "You may not meet the minimum investment requirement yet."}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-[12px] font-black text-[#1C1C1E] mb-3">📋 Requirements Checklist</div>
          {requirements.map((req, i) => (
            <div key={i} className="flex items-center gap-2 py-2 border-b border-[#F2F2F7] last:border-0">
              <span className="text-[14px]">{req.done ? "✅" : "⬜"}</span>
              <span className={`text-[13px] ${req.done ? "text-[#8E8E93] line-through" : "text-[#1C1C1E]"}`}>{req.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#EDE9FE] rounded-2xl p-4">
          <div className="text-[12px] font-black text-[#7C3AED] mb-2">📍 Application Status Tracker</div>
          <div className="space-y-2">
            {["Application Submitted", "Documents Verified", "Medical Check", "Final Approval"].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#FF6B00]" : i === 1 ? "bg-[#10B981]" : "bg-[#E8E8ED]"}`} />
                <span className="text-[11px] text-[#1C1C1E]">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
