import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "网站维修中｜Kahwin-Kahwin.club",
  applicationName: "Kahwin-Kahwin.club",
  creator: "Kahwin-Kahwin.club",
  description: "Kahwin-Kahwin.club 正在进行网站维护。",
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
      <body>
        <main className="maintenance-page">
          <div className="maintenance-card" role="status" aria-live="polite">
            <img
              className="maintenance-logo"
              src="/site-logo-heart-v2.svg"
              alt="Kahwin-Kahwin.club"
            />
            <p className="maintenance-label">KAHWIN-KAHWIN.CLUB</p>
            <h1>网站正在维修中</h1>
            <p className="maintenance-en">Website under maintenance</p>
            <div className="maintenance-line" aria-hidden="true" />
            <p className="maintenance-message">
              我们正在进行系统维护，请稍后再回来。
              <br />
              谢谢您的耐心等候。
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
