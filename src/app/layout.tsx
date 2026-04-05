import type { Metadata } from "next";
import "../styles/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import BottomNav from "../components/layout/BottomNav";
import PhoneShell from "../components/layout/PhoneShell";

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
          <PhoneShell>
            <div className="screen-content">
              <div className="scroll-area">
                {children}
              </div>
              <BottomNav />
            </div>
          </PhoneShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
