"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { mockUser, mockDeadlines, mockCases, mockGovServices, mockNews, chatSuggestions } from "../lib/data/mockData";

export default function HomePage() {
  const { t } = useTranslation();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t("home.greeting_morning");
    if (hour < 18) return t("home.greeting_afternoon");
    if (hour < 22) return t("home.greeting_evening");
    return t("home.greeting_night");
  };

  return (
    <div>
      {/* Hero Header */}
      <div className="hero-header">
        <div className="greeting-row">
          <div>
            <div className="greet-text">{getGreeting()} ☀️</div>
            <div className="greet-name">{t("home.welcome_back")}, {mockUser.name} 👋</div>
          </div>
          <div className="avatar-wrap">
            <div className="avatar">{mockUser.avatar}</div>
            <div className="avatar-badge" />
          </div>
        </div>
        <div className="quick-stats">
          <div className="qs">
            <div className="qs-val qs-accent">{mockUser.visaDaysLeft}d</div>
            <div className="qs-lbl">{t("home.urgent_deadlines")}</div>
          </div>
          <div className="qs">
            <div className="qs-val">{mockUser.activeCases}</div>
            <div className="qs-lbl">{t("home.active_cases")}</div>
          </div>
          <div className="qs">
            <div className="qs-val">{mockUser.documents}</div>
            <div className="qs-lbl">{t("submit.documents")}</div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="alert-banner">
        <div className="alert-icon">⏰</div>
        <div className="flex-1">
          <div className="alert-title">{t("home.attention_required")} — {mockUser.visaDaysLeft} days</div>
          <div className="alert-sub">{t("deadlines.visa_renewal")} — {t("home.urgent_deadlines")}</div>
        </div>
        <div className="alert-cta">{t("common.learn_more")} →</div>
      </div>

      {/* Quick Actions */}
      <div className="sec-header">
        <div className="sec-title">{t("home.quick_actions")}</div>
      </div>
      <div className="quick-actions">
        <Link href="/chat" className="qa">
          <div className="qa-icon" style={{ background: "#FFF0E6" }}>
            <div className="qa-badge">5</div>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 4.5h20a1.5 1.5 0 011.5 1.5v10a1.5 1.5 0 01-1.5 1.5H9L4 22V6A1.5 1.5 0 015.5 4.5z" fill="#FF6B00" />
              <path d="M9 11h10M9 8h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="qa-label">{t("nav.chat")}</div>
        </Link>
        <Link href="/services" className="qa">
          <div className="qa-icon" style={{ background: "#E8F4FE" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="4" y="4" width="20" height="20" rx="5" fill="#007AFF" />
              <path d="M8 14h12M8 10h12M8 18h8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="qa-label">{t("nav.services")}</div>
        </Link>
        <Link href="/cases" className="qa">
          <div className="qa-icon" style={{ background: "#EDE9FE" }}>
            <div className="qa-badge">1</div>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 5.5h20a1.5 1.5 0 011.5 1.5v14a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 21V7A1.5 1.5 0 014 5.5z" fill="#7C3AED" />
              <path d="M7 11h14M7 15h9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="21" cy="11" r="3" fill="#FF3B30" stroke="#EDE9FE" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="qa-label">{t("nav.cases")}</div>
        </Link>
        <Link href="/deadlines" className="qa">
          <div className="qa-icon" style={{ background: "#ECFDF5" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="5" width="22" height="18" rx="4" fill="#10B981" />
              <path d="M8 14h12M8 10h7M8 18h9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="qa-label">{t("deadlines.document_vault")}</div>
        </Link>
      </div>

      {/* Upcoming Deadlines */}
      <div className="sec-header">
        <div className="sec-title">{t("home.upcoming_deadlines")}</div>
        <Link href="/deadlines" className="sec-more">{t("common.see_all")}</Link>
      </div>
      <div className="deadline-scroll">
        {mockDeadlines.map((d) => (
          <Link href="/deadlines" key={d.id} className="dc">
            <div className="dc-icon" style={{ background: d.color }}>{d.icon}</div>
            <div className="dc-days" style={{ color: d.daysLeft <= 10 ? "#FF3B30" : d.daysLeft <= 30 ? "#D97706" : "#10B981" }}>
              {d.daysLeft}d
            </div>
            <div className="dc-unit">{t("deadlines.renew_soon")}</div>
            <div className="dc-name">{d.name}</div>
            <div className="dc-sub">{d.sub}</div>
          </Link>
        ))}
      </div>

      {/* Active Cases */}
      <div className="sec-header" style={{ paddingTop: 20 }}>
        <div className="sec-title">{t("home.active_cases")}</div>
        <Link href="/cases" className="sec-more">{t("common.see_all")}</Link>
      </div>
      {mockCases.filter((c) => c.status === "active").map((c) => (
        <div key={c.id} className="case-card">
          <div className="case-top">
            <div className="case-top-row">
              <div>
                <div className="case-id">Case #{c.id}</div>
                <div className="case-name">{c.name}</div>
              </div>
              <div className="case-tag tag-active">{t("cases.active")}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {Array.from({ length: c.totalSteps }).map((_, i) => (
                  <div key={i} className={`cp ${i < c.progress ? "done" : ""} ${i === c.progress ? "current" : ""}`} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {c.steps.map((step, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 9,
                      color: i === c.progress ? "#FF6B00" : "#8E8E93",
                      fontWeight: i === c.progress ? 700 : 400,
                    }}
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="case-step">
            <span style={{ fontWeight: 700, color: "#1C1C1E" }}>{t("cases.timeline")} — {c.nextHearing}</span>
            <br />
            {c.court} · {c.hearingNote}
          </div>
          <div className="case-action">
            <div className="case-action-text">⚠ {c.actionDue}</div>
            <Link href="/case-passport" className="case-action-btn">{t("cases.prepare_documents_ai")}</Link>
          </div>
        </div>
      ))}

      {/* AI Chat Preview */}
      <div className="sec-header">
        <div className="sec-title">{t("chat.title")}</div>
        <Link href="/chat" className="sec-more">{t("common.see_all")}</Link>
      </div>
      <Link href="/chat" className="chat-preview">
        <div className="chat-preview-label">{t("chat.title")} · UAE law · 6 languages</div>
        <div className="chat-bubble-ai">Hello {mockUser.name}! What legal question can I help you with today?</div>
        <div className="chat-bubble-user">{chatSuggestions[0]}</div>
        <div className="chat-bubble-ai" style={{ marginBottom: 0 }}>
          Under UAE Rental Law Art. 25, your landlord must give <strong style={{ color: "#FF6B00" }}>12 months</strong> written notice. With 6 months remaining you have full right to stay. Want me to prepare a formal response letter?
        </div>
        <div style={{ marginTop: 10 }}>
          <div className="chat-input-mock">
            <span>{t("chat.placeholder")}</span>
            <div className="chat-send">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1.5 10.5L11 6 1.5 1.5v3.5L8 6l-6.5.5V10.5z" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>
      </Link>

      {/* Government Services */}
      <div className="sec-header">
        <div className="sec-title">{t("services.gov_services")}</div>
        <Link href="/services" className="sec-more">{t("services.all_services")} →</Link>
      </div>
      <div className="gov-grid">
        {mockGovServices.map((s) => (
          <Link href="/submit" key={s.id} className="gc">
            <div className="gc-top">
              <div className="gc-icon" style={{ background: s.color }}>{s.icon}</div>
              <div className="gc-price">{s.price}</div>
            </div>
            <div>
              <div className="gc-name">{s.name}</div>
              <div className="gc-sub">{s.sub}</div>
            </div>
            <div className="gc-cta">{t("common.submit")} →</div>
          </Link>
        ))}
      </div>

      {/* Legal News */}
      <div className="sec-header">
        <div className="sec-title">{t("news.title")}</div>
        <Link href="/news" className="sec-more">{t("common.see_all")}</Link>
      </div>
      <div className="news-scroll">
        {mockNews.map((n) => (
          <Link href="/news" key={n.id} className="nc">
            <div className="nc-img" style={{ background: n.color }}>
              <div className="nc-tag">{n.tag}</div>
            </div>
            <div className="nc-body">
              <div className="nc-title">{n.title}</div>
              <div className="nc-sub">{n.time} · {n.category}</div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ height: 16 }} />
    </div>
  );
}
