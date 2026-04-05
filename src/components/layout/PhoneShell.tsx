"use client";
import { ReactNode } from "react";

interface PhoneShellProps {
  children: ReactNode;
}

export default function PhoneShell({ children }: PhoneShellProps) {
  return (
    <div className="phone-shell">
      <div className="di" />
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-time">9:41</div>
        <div className="status-bar-icons">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <rect x="0" y="7" width="3" height="5" rx="1" fill="white" opacity="0.4" />
            <rect x="4.5" y="5" width="3" height="7" rx="1" fill="white" opacity="0.6" />
            <rect x="9" y="2.5" width="3" height="9.5" rx="1" fill="white" opacity="0.8" />
            <rect x="13.5" y="0" width="3" height="12" rx="1" fill="white" />
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
            <circle cx="8" cy="10.5" r="1.5" fill="#fff" opacity="0.5" />
            <path d="M8 9C5.8 9 3.8 9.9 2.4 11.4L1 10C2.8 8.2 5.3 7 8 7s5.2 1.2 7 3l-1.4 1.4C12.2 9.9 10.2 9 8 9z" fill="#fff" opacity="0.7" />
            <path d="M8 5C4.7 5 1.7 6.3 0 8.5L1.4 10C3 8.1 5.3 7 8 7s5 1.1 6.6 3L16 8.5C14.3 6.3 11.3 5 8 5z" fill="#fff" />
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="0" y="1" width="21" height="10" rx="3" stroke="white" strokeOpacity="0.35" />
            <rect x="2" y="2.5" width="17" height="7" rx="2" fill="white" />
            <path d="M23 4v4a2 2 0 000-4z" fill="white" opacity="0.4" />
          </svg>
        </div>
      </div>
      {/* Screen Content */}
      {children}
    </div>
  );
}
