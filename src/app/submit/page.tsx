"use client";
import { useState } from "react";
import Link from "next/link";
import { mockServices } from "../../lib/data/mockData";

export default function SubmitPage() {
  const [name, setName] = useState("");
  const [caseType, setCaseType] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("medium");

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="dark-header">
        <div className="flex items-center justify-between mb-3">
          <Link href="/services" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="text-[15px] font-black text-white tracking-tight">Submit Case</div>
          <div style={{ width: 32 }} />
        </div>
        <div className="text-[22px] font-black text-white tracking-tight" style={{ letterSpacing: "-0.04em" }}>
          NEW SUBMISSION
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
        <div>
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase">Your Name</label>
          <input
            className="mt-1 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3.5 text-[15px] text-[#1C1C1E] outline-none focus:border-[#FF6B00]"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase">Service Type</label>
          <select
            className="mt-1 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3.5 text-[15px] text-[#1C1C1E] outline-none focus:border-[#FF6B00] appearance-none"
            value={caseType}
            onChange={(e) => setCaseType(e.target.value)}
          >
            <option value="">Select a service...</option>
            {mockServices.map((s) => (
              <option key={s.id} value={s.name}>{s.icon} {s.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase">Case Description</label>
          <textarea
            className="mt-1 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3.5 text-[15px] text-[#1C1C1E] outline-none focus:border-[#FF6B00] resize-none"
            placeholder="Describe your case..."
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase">Urgency Level</label>
          <div className="flex gap-2 mt-1">
            {[
              { value: "low", label: "Low", color: "#10B981" },
              { value: "medium", label: "Medium", color: "#FF9F0A" },
              { value: "high", label: "High", color: "#FF3B30" },
            ].map((u) => (
              <button
                key={u.value}
                onClick={() => setUrgency(u.value)}
                className={`flex-1 py-3 rounded-xl text-[12px] font-black transition-all ${urgency === u.value ? "text-white" : "bg-white text-[rgba(0,0,0,0.4)] border border-[rgba(0,0,0,0.1)]"}`}
                style={urgency === u.value ? { background: u.color } : {}}
              >
                {u.label}
              </button>
            ))}
          </div>
        </div>

        {/* Upload area */}
        <div>
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase">Documents (Optional)</label>
          <div className="mt-1 border-2 border-dashed border-[rgba(0,0,0,0.1)] rounded-2xl p-6 text-center cursor-pointer hover:border-[#FF6B00] transition-colors">
            <div className="text-3xl mb-2">📎</div>
            <div className="text-[13px] font-bold text-[#1C1C1E]">Tap to upload files</div>
            <div className="text-[11px] text-[#8E8E93] mt-1">PDF, JPG, PNG up to 10MB</div>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <Link href="/cases">
            <button className="w-full bg-[#FF6B00] text-white py-4 rounded-2xl text-[15px] font-black shadow-lg active:scale-[0.98] transition-transform">
              Submit Case →
            </button>
          </Link>
          <p className="text-[10px] text-[#8E8E93] text-center mt-3">
            A lawyer will review your case within 24 hours. You'll receive a notification when matched.
          </p>
        </div>
      </div>
    </div>
  );
}
