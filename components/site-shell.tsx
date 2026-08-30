"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links=[["首页","/"],["关于中心","/about"],["注册询问","/ai-assistant"],["良辰吉日","/auspicious-date"],["商家合作","/partners"],["联络我们","/contact"]];

function HeartAtmosphere(){
  useEffect(()=>{let last=0,index=0;const shapes=["♡","♥","❤","ෆ","❥"];const move=(event:PointerEvent)=>{if(event.pointerType==="touch"||Date.now()-last<42)return;last=Date.now();const heart=document.createElement("span");heart.className="cursor-heart";heart.textContent=shapes[index++%shapes.length];heart.style.left=`${event.clientX}px`;heart.style.top=`${event.clientY}px`;heart.style.fontSize=`${12+Math.random()*22}px`;heart.style.setProperty("--heart-x",`${(Math.random()-.5)*70}px`);heart.style.setProperty("--heart-rotate",`${(Math.random()-.5)*80}deg`);document.body.appendChild(heart);window.setTimeout(()=>heart.remove(),1200)};window.addEventListener("pointermove",move,{passive:true});return()=>window.removeEventListener("pointermove",move)},[]);
  const floaters=[{s:"♡",x:5,y:18,z:18,d:0},{s:"❤",x:13,y:70,z:12,d:2},{s:"ෆ",x:27,y:37,z:22,d:4},{s:"♥",x:44,y:82,z:10,d:1},{s:"❥",x:61,y:22,z:17,d:5},{s:"♡",x:74,y:65,z:26,d:3},{s:"❤",x:88,y:32,z:13,d:1.5},{s:"ෆ",x:96,y:78,z:19,d:4.5}];
  return <div className="heart-atmosphere" aria-hidden="true">{floaters.map((h,i)=><span key={i} style={{left:`${h.x}%`,top:`${h.y}%`,fontSize:h.z,animationDelay:`-${h.d}s`}}>{h.s}</span>)}</div>;
}

export function SiteHeader(){const [open,setOpen]=useState(false);return <><HeartAtmosphere/><nav className="nav"><a className="brand" href="/"><img src="/site-logo.svg" alt="KK"/>Kahwin-Kahwin.club</a><div className={open?"navlinks open":"navlinks"}>{links.map(([n,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{n}</a>)}</div><a className="navcta" href="/ai-assistant">开始注册询问 ♡</a><button className="menubtn" aria-label="打开菜单" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav></>}
export function SiteFooter(){return <footer><a className="brand" href="/"><img src="/site-logo.svg" alt="KK"/>Kahwin-Kahwin.club</a><p>Registration × AI × Auspicious Date × Wedding Marketplace</p><div className="footerlinks">{links.map(([n,h])=><a key={h} href={h}>{n}</a>)}</div><small>© 2026 Kahwin-Kahwin.club · 陈氏书院婚姻注册中心</small></footer>}
export function PageHero({eyebrow,title,children}:{eyebrow:string,title:string,children?:React.ReactNode}){return <section className="pagehero"><span>{eyebrow}</span><h1>{title}</h1>{children}</section>}
