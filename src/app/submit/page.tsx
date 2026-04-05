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
    <div className="flex flex-col h-full" style={{ background: "var(--light)" }}>
      {/* Dark header */}
      <div className="dark-header">
        <div className="flex items-center justify-between mb-3">
          <Link
            href="/services"
            className="back-btn"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="rgba(0,0,0,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="top-title" style={{ color: "#fff" }}>Submit Case</div>
          <div style={{ width: 34 }} />
        </div>
        <div className="text-[22px] font-black text-white tracking-tight" style={{ letterSpacing: "-0.04em" }}>
          NEW SUBMISSION
        </div>
      </div>

      {/* Scroll body */}
      <div className="scroll" style={{ padding: "14px 18px", display: "flex", flexDirection: "column", gap: "12px" }}>

        {/* Name field */}
        <div>
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase block mb-1.5">
            Your Name
          </label>
          <input
            className="input-field"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Service type */}
        <div>
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase block mb-1.5">
            Service Type
          </label>
          <select
            className="input-field"
            style={{ appearance: "none" }}
            value={caseType}
            onChange={(e) => setCaseType(e.target.value)}
          >
            <option value="">Select a service...</option>
            {mockServices.map((s) => (
              <option key={s.id} value={s.name}>{s.icon} {s.name}</option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase block mb-1.5">
            Case Description
          </label>
          <textarea
            className="input-field"
            style={{ resize: "none" }}
            placeholder="Describe your case..."
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Urgency level */}
        <div>
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase block mb-1.5">
            Urgency Level
          </label>
          <div className="flex gap-2">
            {[
              { value: "low", label: "Low", color: "#10B981" },
              { value: "medium", label: "Medium", color: "#FF9F0A" },
              { value: "high", label: "High", color: "#FF3B30" },
            ].map((u) => (
              <button
                key={u.value}
                onClick={() => setUrgency(u.value)}
                className="flex-1 py-3 rounded-xl text-[12px] font-black transition-all"
                style={
                  urgency === u.value
                    ? { background: u.color, color: "#fff" }
                    : { background: "#fff", color: "rgba(0,0,0,0.4)", border: "1.5px solid rgba(0,0,0,0.08)" }
                }
              >
                {u.label}
              </button>
            ))}
          </div>
        </div>

        {/* Upload area */}
        <div>
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase block mb-1.5">
            Documents (Optional)
          </label>
          <div
            className="border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer"
            style={{ borderColor: "rgba(0,0,0,0.1)" }}
          >
            <div className="text-3xl mb-2">📎</div>
            <div className="text-[13px] font-bold text-[#1C1C1E]">Tap to upload files</div>
            <div className="text-[11px] text-[#8E8E93] mt-1">PDF, JPG, PNG up to 10MB</div>
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-2">
          <Link href="/cases">
            <button
              className="w-full text-white py-4 rounded-2xl text-[15px] font-black shadow-lg active:scale-[0.98] transition-transform"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                boxShadow: "0 6px 20px rgba(255,107,0,0.3)"
              }}
            >
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
