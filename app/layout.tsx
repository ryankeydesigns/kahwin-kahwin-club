import type { Metadata } from "next";
import "./globals.css";
import { SiteInteractions } from "@/components/site-interactions";
export const metadata:Metadata={title:"Kahwin-Kahwin.club｜陈氏书院婚姻注册中心",description:"婚姻注册、AI Wedding Assistant、良辰吉日与婚礼服务，一个平台帮您准备。",keywords:["Marriage Registration Malaysia","Marriage Registration Kuala Lumpur","Auspicious Wedding Date","Wedding Services Malaysia","Kahwin-Kahwin"],icons:{icon:"/site-logo.svg?v=20260831-heart",shortcut:"/site-logo.svg?v=20260831-heart",apple:"/site-logo.svg?v=20260831-heart"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hans"><body><SiteInteractions />{children}</body></html>}
