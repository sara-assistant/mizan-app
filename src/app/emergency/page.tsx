"use client";
import Link from "next/link";

const emergencyServices = [
  { name: "Police", icon: "🚔", number: "999", color: "#E8F4FE", textColor: "#007AFF" },
  { name: "Ambulance", icon: "🚑", number: "998", color: "#FEF2F2", textColor: "#FF3B30" },
  { name: "Fire", icon: "🚒", number: "997", color: "#FEF3C7", textColor: "#D97706" },
  { name: "Embassy", icon: "🏛️", number: "List", color: "#EDE9FE", textColor: "#7C3AED" },
];

export default function EmergencyPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-gradient-to-br from-[#FF3B30] to-[#FF6B00] px-5 py-6 text-center">
        <div className="text-[11px] font-bold text-[rgba(255,255,255,0.7)] uppercase tracking-wider mb-1">Emergency Services</div>
        <div className="text-[28px] font-black text-white tracking-tight">QUICK ACCESS</div>
        <p className="text-[13px] text-[rgba(255,255,255,0.7)] mt-1">Tap any service to call immediately</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {emergencyServices.map((s) => (
            <a
              key={s.name}
              href={`tel:${s.number}`}
              className="bg-white rounded-2xl p-4 text-center shadow-sm active:scale-95 transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl mx-auto mb-2 flex items-center justify-center text-2xl" style={{ background: s.color }}>
                {s.icon}
              </div>
              <div className="text-[14px] font-black text-[#1C1C1E]">{s.name}</div>
              <div className="text-[18px] font-black mt-1" style={{ color: s.textColor }}>{s.number}</div>
            </a>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-[12px] font-black text-[#1C1C1E] mb-3">🏥 Nearest Hospital</div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-xl">🏨</div>
            <div>
              <div className="text-[13px] font-bold text-[#1C1C1E]">Dubai Health Authority</div>
              <div className="text-[11px] text-[#8E8E93]">Al Wasl Road · 2.3 km away</div>
            </div>
          </div>
          <a href="tel:+97142100000" className="block w-full py-2.5 bg-[#10B981] text-white text-[13px] font-black text-center rounded-xl">
            📞 Call Hospital
          </a>
        </div>

        <Link href="/lawyers" className="mt-4 block bg-[#1A1A1A] rounded-2xl p-4 text-center shadow-sm">
          <div className="text-xl mb-1">⚖️</div>
          <div className="text-[14px] font-black text-white">Find Nearest Lawyer</div>
          <div className="text-[11px] text-[rgba(255,255,255,0.5)] mt-1">Open map to find legal help</div>
        </Link>

        <div className="mt-4 bg-[#FFF0E6] rounded-2xl p-4">
          <div className="text-[13px] font-black text-[#FF6B00] mb-1">⚠️ Important Notice</div>
          <div className="text-[11px] text-[#8E8E93]">
            In non-life-threatening situations, contact our 24/7 legal hotline for guidance. MIZAN lawyers are standing by to help.
          </div>
          <Link href="/chat" className="mt-3 block w-full py-2.5 bg-[#FF6B00] text-white text-[13px] font-black text-center rounded-xl">
            💬 Chat with MIZAN
          </Link>
        </div>
      </div>
    </div>
  );
}
