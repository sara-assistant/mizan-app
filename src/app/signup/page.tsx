"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";

const serviceTypes = [
  "Family Law",
  "Real Estate",
  "Business",
  "Criminal",
  "Traffic",
  "Labor",
];

const signupSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(7, "Please enter a valid phone number"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    serviceType: z.string().min(1, "Please select a service type"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupForm = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState<SignupForm>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    serviceType: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SignupForm, string>>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof SignupForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = signupSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SignupForm, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof SignupForm;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    router.push("/");
  };

  return (
    <div className="flex flex-col h-full" style={{ background: "#F2F2F7" }}>
      {/* Header */}
      <div className="px-5 pt-4 pb-3 flex items-center gap-3" style={{ background: "#fff" }}>
        <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full active:bg-gray-100">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4l-6 6 6 6" stroke="#1C1C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="flex-1 text-center pr-10">
          <h1 className="text-[18px] font-bold" style={{ color: "#1C1C1E" }}>Create Account</h1>
        </div>
      </div>

      {/* Scrollable Form */}
      <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-5">
        {/* Full Name */}
        <div>
          <label className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#8E8E93" }}>Full Name</label>
          <input
            type="text"
            placeholder="Your full name"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="w-full mt-1 bg-white border rounded-xl px-4 text-[15px] text-[#1C1C1E] outline-none transition-colors placeholder:text-[#8E8E93]"
            style={{
              height: 52,
              borderColor: errors.fullName ? "#FF3B30" : "rgba(0,0,0,0.1)",
              ...(errors.fullName ? {} : {}),
            }}
          />
          {errors.fullName && (
            <p className="text-xs mt-1.5" style={{ color: "#FF3B30" }}>{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#8E8E93" }}>Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full mt-1 bg-white border rounded-xl px-4 text-[15px] text-[#1C1C1E] outline-none transition-colors placeholder:text-[#8E8E93]"
            style={{
              height: 52,
              borderColor: errors.email ? "#FF3B30" : "rgba(0,0,0,0.1)",
            }}
          />
          {errors.email && (
            <p className="text-xs mt-1.5" style={{ color: "#FF3B30" }}>{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#8E8E93" }}>Phone</label>
          <div className="flex gap-2 mt-1">
            <div
              className="flex items-center justify-center rounded-xl text-[15px] font-medium text-[#1C1C1E]"
              style={{
                height: 52,
                minWidth: 64,
                background: "#F2F2F7",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              🇦🇪 +971
            </div>
            <input
              type="tel"
              placeholder="50 123 4567"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="flex-1 bg-white border rounded-xl px-4 text-[15px] text-[#1C1C1E] outline-none transition-colors placeholder:text-[#8E8E93]"
              style={{
                height: 52,
                borderColor: errors.phone ? "#FF3B30" : "rgba(0,0,0,0.1)",
              }}
            />
          </div>
          {errors.phone && (
            <p className="text-xs mt-1.5" style={{ color: "#FF3B30" }}>{errors.phone}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#8E8E93" }}>Password</label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              className="w-full bg-white border rounded-xl px-4 text-[15px] text-[#1C1C1E] outline-none transition-colors placeholder:text-[#8E8E93] pr-12"
              style={{
                height: 52,
                borderColor: errors.password ? "#FF3B30" : "rgba(0,0,0,0.1)",
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium"
              style={{ color: "#8E8E93" }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs mt-1.5" style={{ color: "#FF3B30" }}>{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#8E8E93" }}>Confirm Password</label>
          <div className="relative mt-1">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Repeat password"
              value={form.confirmPassword}
              onChange={(e) => update("confirmPassword", e.target.value)}
              className="w-full bg-white border rounded-xl px-4 text-[15px] text-[#1C1C1E] outline-none transition-colors placeholder:text-[#8E8E93] pr-12"
              style={{
                height: 52,
                borderColor: errors.confirmPassword ? "#FF3B30" : "rgba(0,0,0,0.1)",
              }}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium"
              style={{ color: "#8E8E93" }}
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-xs mt-1.5" style={{ color: "#FF3B30" }}>{errors.confirmPassword}</p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label className="text-[11px] font-semibold tracking-wider uppercase mb-2 block" style={{ color: "#8E8E93" }}>
            Service Type
          </label>
          <div className="grid grid-cols-3 gap-2">
            {serviceTypes.map((type) => {
              const isSelected = form.serviceType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => update("serviceType", type)}
                  className="py-3 px-2 rounded-[18px] text-[12px] font-semibold text-center transition-all active:scale-95"
                  style={{
                    background: isSelected ? "#FFF0E6" : "#fff",
                    border: isSelected ? "2px solid #FF6B00" : "2px solid rgba(0,0,0,0.08)",
                    color: isSelected ? "#FF6B00" : "#1C1C1E",
                  }}
                >
                  {type}
                </button>
              );
            })}
          </div>
          {errors.serviceType && (
            <p className="text-xs mt-2" style={{ color: "#FF3B30" }}>{errors.serviceType}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-[100px] text-white font-semibold text-base py-4 mt-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: "#FF6B00",
            boxShadow: "0 4px 16px rgba(255, 107, 0, 0.3)",
          }}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        {/* Sign in link */}
        <div className="text-center pb-4">
          <span className="text-sm" style={{ color: "#8E8E93" }}>Already have an account? </span>
          <Link href="/" className="text-sm font-semibold" style={{ color: "#FF6B00" }}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
