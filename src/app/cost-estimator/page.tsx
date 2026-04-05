"use client";
import { useState } from "react";
import { mockServices } from "../../lib/data/mockData";

export default function CostEstimatorPage() {
  const [service, setService] = useState("");
  const [complexity, setComplexity] = useState(50);

  const getCost = () => {
    if (!service) return null;
    const base = mockServices.find((s) => s.name === service);
    if (!base) return null;
    const baseAmount = parseInt(base.price.replace(/[^0-9]/g, ""));
    const multiplier = 1 + complexity / 100;
    const total = Math.round(baseAmount * multiplier / 100) * 100;
    return total;
  };

  const cost = getCost();

  return (
    <div className="flex flex-col h-full">
      <div className="page-header">
        <div className="page-title">COST</div>
        <span className="page-title-grad">ESTIMATOR ›</span>
        <p className="text-[13px] text-[rgba(0,0,0,0.4)] mt-1">Get instant cost estimates for legal services</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase">Service Type</label>
          <select
            className="mt-2 w-full border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3.5 text-[15px] text-[#1C1C1E] outline-none focus:border-[#FF6B00] appearance-none"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select a service...</option>
            {mockServices.map((s) => (
              <option key={s.id} value={s.name}>{s.icon} {s.name}</option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <label className="text-[11px] font-bold text-[#8E8E93] tracking-wider uppercase">Case Complexity</label>
            <span className="text-[13px] font-black text-[#FF6B00]">{complexity}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={complexity}
            onChange={(e) => setComplexity(parseInt(e.target.value))}
            className="w-full accent-[#FF6B00]"
          />
          <div className="flex justify-between text-[10px] text-[#8E8E93] mt-1">
            <span>Simple</span>
            <span>Moderate</span>
            <span>Complex</span>
          </div>
        </div>

        {cost && (
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2D1810] rounded-2xl p-5 shadow-lg text-center">
            <div className="text-[11px] font-bold text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-2">Estimated Cost</div>
            <div className="text-[36px] font-black text-white tracking-tight">AED {cost.toLocaleString()}</div>
            <div className="text-[11px] text-[rgba(255,255,255,0.5)] mt-2">*Estimate only. Final cost determined after consultation.</div>
            <button className="mt-4 w-full bg-[#FF6B00] text-white py-3 rounded-xl text-[14px] font-black">
              Book Free Consultation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
