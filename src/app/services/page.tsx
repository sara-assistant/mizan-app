"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { mockServices, mockGovServices } from "../../lib/data/mockData";

export default function ServicesPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"legal" | "gov">("legal");
  const [activeCat, setActiveCat] = useState("All");

  const categories = [
    { key: "All", label: t("common.all") },
    { key: "Family", label: t("services.family") },
    { key: "Real Estate", label: t("services.real_estate") },
    { key: "Business", label: t("services.business") },
    { key: "Criminal", label: t("services.criminal") },
    { key: "Traffic", label: t("services.traffic") },
    { key: "Labor", label: t("services.labor") },
  ];

  const filteredServices = activeCat === "All"
    ? mockServices
    : mockServices.filter((s) => s.name.includes(activeCat));

  return (
    <div className="flex flex-col" style={{ minHeight: "100vh", background: "var(--light)" }}>
      {/* Header */}
      <div className="page-header">
        <div className="page-title">ALL</div>
        <span className="page-title-grad">{t("services.title")} ›</span>

        {/* Toggle */}
        <div className="toggle-wrap">
          <button
            onClick={() => setActiveTab("legal")}
            className={`toggle-btn ${activeTab === "legal" ? "on" : ""}`}
          >
            {t("services.legal") || "Legal"}
          </button>
          <button
            onClick={() => setActiveTab("gov")}
            className={`toggle-btn ${activeTab === "gov" ? "on" : ""}`}
          >
            {t("services.gov_services")}
          </button>
        </div>
      </div>

      {activeTab === "legal" ? (
        <>
          {/* Category pills */}
          <div className="cat-row">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCat(cat.key)}
                className={`cat-pill ${activeCat === cat.key ? "on" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services list */}
          <div className="svc-scroll" style={{ flex: 1 }}>
            {filteredServices.map((s) => (
              <Link href="/submit" key={s.id} className="svc-card">
                <div
                  className="svc-icon"
                  style={{ background: s.color }}
                >
                  {s.icon}
                </div>
                <div className="svc-info">
                  <div className="svc-name">{s.name}</div>
                  <div className="svc-auth">{s.specialty}</div>
                </div>
                <div className="svc-right">
                  <div className="svc-price">→</div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="svc-scroll" style={{ flex: 1 }}>
          {mockGovServices.map((s) => (
            <Link href="/submit" key={s.id} className="svc-card">
              <div
                className="svc-icon"
                style={{ background: s.color }}
              >
                {s.icon}
              </div>
              <div className="svc-info">
                <div className="svc-name">{s.name}</div>
                <div className="svc-auth">{s.sub}</div>
              </div>
              <div className="svc-right">
                <div className="svc-price" style={{ color: "#10B981" }}>{s.price}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
