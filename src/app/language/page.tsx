"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const languages = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇦🇪",
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिंदी",
    flag: "🇮🇳",
  },
  {
    code: "ur",
    name: "Urdu",
    nativeName: "اردو",
    flag: "🇵🇰",
  },
  {
    code: "fil",
    name: "Filipino",
    nativeName: "Filipino",
    flag: "🇵🇭",
  },
  {
    code: "bn",
    name: "Bengali",
    nativeName: "বাংলা",
    flag: "🇧🇩",
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
  },
  {
    code: "fa",
    name: "Farsi",
    nativeName: "فارسی",
    flag: "🇮🇷",
  },
];

export default function LanguagePage() {
  const [selected, setSelected] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("mizan_language");
    if (saved) setSelected(saved);
  }, []);

  const handleContinue = () => {
    if (selected) {
      localStorage.setItem("mizan_language", selected);
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6" style={{ background: "#F2F2F7" }}>
      {/* Logo */}
      <div className="mb-10 text-center">
        <div className="text-4xl font-bold mb-2" style={{ color: "#1C1C1E" }}>MIZAN</div>
        <div className="text-sm" style={{ color: "#8E8E93" }}>Your trusted legal assistant</div>
      </div>

      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-2" style={{ color: "#1C1C1E" }}>Choose your language</h1>
        <p className="text-sm" style={{ color: "#8E8E93" }}>اختر لغتك • भाषा चुनें</p>
      </div>

      {/* Language Cards */}
      <div className="w-full flex flex-col gap-4 mb-10">
        {languages.map((lang) => {
          const isSelected = selected === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className="w-full flex items-center gap-5 p-5 rounded-[18px] transition-all active:scale-[0.98]"
              style={{
                background: isSelected ? "#FFF0E6" : "#fff",
                border: isSelected ? "2px solid #FF6B00" : "2px solid transparent",
                boxShadow: isSelected
                  ? "0 4px 16px rgba(255, 107, 0, 0.15)"
                  : "0 1px 3px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)",
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-3xl" style={{ background: isSelected ? "#fff" : "#F2F2F7" }}>
                {lang.flag}
              </div>
              <div className="text-left flex-1">
                <div className="text-lg font-semibold" style={{ color: isSelected ? "#FF6B00" : "#1C1C1E" }}>
                  {lang.name}
                </div>
                <div className="text-sm" style={{ color: isSelected ? "#FF6B00" : "#8E8E93" }}>
                  {lang.nativeName}
                </div>
              </div>
              {isSelected && (
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#FF6B00" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!selected}
        className="w-full py-4 rounded-[100px] text-white font-semibold text-base transition-all active:scale-[0.98] disabled:opacity-40"
        style={{
          background: selected ? "#FF6B00" : "#ccc",
          boxShadow: selected ? "0 4px 16px rgba(255, 107, 0, 0.3)" : "none",
        }}
      >
        Continue
      </button>

      <div className="mt-6 text-xs" style={{ color: "#8E8E93" }}>You can change this anytime in Settings</div>
    </div>
  );
}