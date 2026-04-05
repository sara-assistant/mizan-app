import type { Metadata } from "next";
import "../styles/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import BottomNav from "../components/layout/BottomNav";

export const metadata: Metadata = {
  title: "MIZAN — Legal Services App",
  description: "Your trusted Arabic & English legal assistant for UAE law",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <div className="app-shell">
            <main className="app-main">
              {children}
            </main>
            <BottomNav />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
