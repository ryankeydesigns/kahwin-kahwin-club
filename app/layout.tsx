import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "网站维修中｜Kahwin-Kahwin.club",
  description: "Kahwin-Kahwin.club 正在进行系统维修与更新。",
  robots: {
    index: false,
    follow: false,
  },
  keywords: [
    "Marriage Registration Malaysia",
    "Marriage Registration Kuala Lumpur",
    "Tong Sheng Wedding Date",
    "Wedding Services Malaysia",
    "Kahwin-Kahwin",
  ],
  icons: {
    icon: "/site-logo-heart-v2.svg",
    shortcut: "/site-logo-heart-v2.svg",
    apple: "/site-logo-heart-v2.svg",
  },
};
export default function RootLayout() {
  return (
    <html lang="zh-Hans">
      <body className="maintenance-body">
        <main className="maintenance-page">
          <div className="maintenance-glow maintenance-glow-one" />
          <div className="maintenance-glow maintenance-glow-two" />
          <section className="maintenance-card" aria-labelledby="maintenance-title">
            <img
              className="maintenance-logo"
              src="/site-logo-heart-v2.svg"
              alt="Kahwin-Kahwin.club"
            />
            <p className="maintenance-brand">KAHWIN-KAHWIN.CLUB</p>
            <div className="maintenance-divider" aria-hidden="true">
              <span>♡</span>
            </div>
            <h1 id="maintenance-title">网站正在维修中</h1>
            <p className="maintenance-en">WEBSITE UNDER MAINTENANCE</p>
            <p className="maintenance-message">
              我们正在进行系统更新与优化，网站将于完成后重新开放。
              <br />
              感谢您的耐心等候。
            </p>
            <div className="maintenance-status">
              <span aria-hidden="true" />
              系统维护进行中
            </div>
          </section>
          <p className="maintenance-footer">© 2026 Kahwin-Kahwin.club</p>
        </main>
      </body>
    </html>
  );
}
