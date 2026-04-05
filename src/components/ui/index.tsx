"use client";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({ children, variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const base =
    "font-semibold rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-[#FF6B00] text-white hover:bg-[#e56100]",
    secondary: "bg-[#1A1A1A] text-white hover:bg-[#2a2a2a]",
    outline: "border border-[rgba(0,0,0,0.15)] text-[#1C1C1E] hover:bg-gray-50",
    ghost: "text-[#8E8E93] hover:text-[#1C1C1E]",
  };
  const sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-3 text-sm",
    lg: "px-6 py-4 text-base",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size] || sizes.md} ${className}`} {...props}>
      {children}
    </button>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,.06),0_4px_12px_rgba(0,0,0,.04)] ${onClick ? "cursor-pointer active:scale-[0.98]" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface TagProps {
  children: ReactNode;
  variant?: "active" | "pending" | "won" | "info" | "warning" | "danger";
}

export function Tag({ children, variant = "info" }: TagProps) {
  const variants: Record<string, string> = {
    active: "bg-[#FFF0E6] text-[#FF6B00]",
    pending: "bg-[#FEF3C7] text-[#D97706]",
    won: "bg-[#ECFDF5] text-[#059669]",
    info: "bg-[#E8F4FE] text-[#007AFF]",
    warning: "bg-[#FEF3C7] text-[#D97706]",
    danger: "bg-[#FEF2F2] text-[#FF3B30]",
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold ${variants[variant]}`}>
      {children}
    </span>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-xs font-semibold text-[#8E8E93]">{label}</label>}
      <input
        className={`w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3.5 text-[15px] text-[#1C1C1E] outline-none focus:border-[#FF6B00] transition-colors placeholder:text-[#8E8E93] ${className}`}
        {...props}
      />
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, options, className = "", ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-xs font-semibold text-[#8E8E93]">{label}</label>}
      <select
        className={`w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3.5 text-[15px] text-[#1C1C1E] outline-none focus:border-[#FF6B00] transition-colors appearance-none cursor-pointer ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className = "", ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-xs font-semibold text-[#8E8E93]">{label}</label>}
      <textarea
        className={`w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3.5 text-[15px] text-[#1C1C1E] outline-none focus:border-[#FF6B00] transition-colors placeholder:text-[#8E8E93] resize-none ${className}`}
        rows={4}
        {...props}
      />
    </div>
  );
}
