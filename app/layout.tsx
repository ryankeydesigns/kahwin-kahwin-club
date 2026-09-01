import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Kahwin-Kahwin.club｜陈氏书院婚姻注册中心",
  description:
    "婚姻注册、AI Wedding Assistant、结婚好日子与婚礼服务，一个平台帮您准备。",
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
