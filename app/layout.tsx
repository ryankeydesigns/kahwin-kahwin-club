import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Kahwin-Kahwin.club｜陈氏书院婚姻注册中心",description:"婚姻注册、AI Wedding Assistant、良辰吉日与婚礼服务，一个平台帮您准备。",keywords:["Marriage Registration Malaysia","Marriage Registration Kuala Lumpur","Auspicious Wedding Date","Wedding Services Malaysia","Kahwin-Kahwin"],icons:{icon:"/site-logo.svg",shortcut:"/site-logo.svg",apple:"/site-logo.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hans"><body>{children}</body></html>}
