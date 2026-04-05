"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const navItems = [
  {
    href: "/",
    labelKey: "nav.home",
    activeIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 4l9 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 4l9 8" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    hasDot: false,
  },
  {
    href: "/chat",
    labelKey: "nav.chat",
    activeIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16a1 1 0 011 1v10a1 1 0 01-1 1H8l-5 4V5a1 1 0 011-1z" stroke="#FF6B00" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16a1 1 0 011 1v10a1 1 0 01-1 1H8l-5 4V5a1 1 0 011-1z" stroke="#8E8E93" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    hasDot: true,
  },
  {
    href: "/services",
    labelKey: "nav.services",
    activeIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#FF6B00" strokeWidth="1.7" />
        <path d="M7 12h10M7 8h10M7 16h7" stroke="#FF6B00" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#8E8E93" strokeWidth="1.7" />
        <path d="M7 12h10M7 8h10M7 16h7" stroke="#8E8E93" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    hasDot: false,
  },
  {
    href: "/cases",
    labelKey: "nav.cases",
    activeIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 5.5h16a1.5 1.5 0 011.5 1.5v14a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 21V7A1.5 1.5 0 014 5.5z" stroke="#FF6B00" strokeWidth="1.7" />
        <path d="M7 11h14M7 15h9" stroke="#FF6B00" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="21" cy="11" r="3" fill="#FF3B30" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 5.5h16a1.5 1.5 0 011.5 1.5v14a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 21V7A1.5 1.5 0 014 5.5z" stroke="#8E8E93" strokeWidth="1.7" />
        <path d="M7 11h14M7 15h9" stroke="#8E8E93" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="21" cy="11" r="3" fill="#FF3B30" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
    hasDot: false,
  },
  {
    href: "/profile",
    labelKey: "nav.profile",
    activeIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#FF6B00" strokeWidth="1.7" />
        <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="#FF6B00" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    inactiveIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#8E8E93" strokeWidth="1.7" />
        <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="#8E8E93" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    hasDot: false,
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <div className="bottom-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className="nav-item">
            {item.hasDot && !isActive && <div className="nav-dot" />}
            {isActive ? item.activeIcon : item.inactiveIcon}
            <span className={`nav-label ${isActive ? "active" : ""}`}>{t(item.labelKey)}</span>
          </Link>
        );
      })}
    </div>
  );
}
