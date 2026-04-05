"use client";
import { mockLawyers } from "../../lib/data/mockData";

export default function LawyersPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="page-header">
        <div className="page-title">LAWYER</div>
        <span className="page-title-grad">MATCHING ›</span>
        <p className="text-[13px] text-[rgba(0,0,0,0.4)] mt-1">AI-powered matching with top UAE lawyers</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        {mockLawyers.map((lawyer) => (
          <div key={lawyer.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF3CAC] flex items-center justify-center text-white text-xl font-black flex-shrink-0">
                {lawyer.photo}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-black text-[#1C1C1E]">{lawyer.name}</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669]">{lawyer.badge}</span>
                </div>
                <div className="text-[12px] text-[#8E8E93] mt-0.5">{lawyer.specialty} · {lawyer.experience}</div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[11px] font-bold text-[#1C1C1E]">⭐ {lawyer.rating} ({lawyer.reviews})</span>
                  <span className="text-[10px] text-[#8E8E93]">{lawyer.languages.join(", ")}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 h-2 bg-[#F2F2F7] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FF6B00] to-[#FF3CAC] rounded-full" style={{ width: `${lawyer.match}%` }} />
              </div>
              <span className="text-[11px] font-black text-[#FF6B00]">{lawyer.match}% Match</span>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2.5 bg-[#FF6B00] text-white rounded-xl text-[13px] font-black">
                Connect
              </button>
              <button className="flex-1 py-2.5 bg-[#F2F2F7] text-[#1C1C1E] rounded-xl text-[13px] font-black">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
