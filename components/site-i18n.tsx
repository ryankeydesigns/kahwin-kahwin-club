"use client";

import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

type Lang = "zh" | "en";

const zhToEn: Record<string, string> = {
  "陈氏书院婚姻注册中心": "Chan Clan Association Marriage Registration Centre",
  "首页": "Home",
  "关于中心": "About",
  "注册询问": "Registration Help",
  "良辰吉日": "Auspicious Dates",
  "商家合作": "Partners",
  "联络我们": "Contact",
  "开始注册询问 ♡": "Start Registration Help ♡",
  "从「我要注册结婚」开始": "Start with “We Want to Get Married”",
  "婚姻注册、良辰吉日、婚礼服务，": "Marriage registration, auspicious dates and wedding services—",
  "一个平台帮您准备。": "everything you need, in one place.",
  "开始我们的幸福旅程": "Begin Our Happy Journey",
  "寻找良辰吉日": "Find an Auspicious Date",
  "问 AI": "Ask AI",
  "选日子": "Choose a Date",
  "找服务": "Find Services",
  "今天想先准备什么？": "What Would You Like to Prepare First?",
  "由第一次查询开始，一步一步完成你们的注册与婚礼准备。": "Start with your first question and complete your registration and wedding preparations step by step.",
  "我要注册结婚": "We Want to Get Married",
  "AI 为您解答注册步骤": "AI explains the registration steps",
  "查询注册程序": "Check Registration Process",
  "了解文件、费用与预约": "Learn about documents, fees and appointments",
  "筛选适合你们的日子": "Shortlist dates that suit you",
  "寻找婚礼商家": "Find Wedding Vendors",
  "配对服务与专属优惠": "Match services and exclusive offers",
  "问 AI、选日子、找服务，": "Ask AI, choose a date and find services—",
  "不再是三个分开的步骤。": "all in one connected journey.",
  "了解怎样注册": "Learn how to register",
  "寻找适合日期": "Find a suitable date",
  "配对婚礼商家": "Match with wedding vendors",
  "关于陈氏书院婚姻注册中心": "About the Chan Clan Association Marriage Registration Centre",
  "为新人提供温馨、庄重而清楚的婚姻注册体验。": "A warm, dignified and clear marriage registration experience for every couple.",
  "让注册这一刻，": "Make the moment of registration",
  "成为幸福的开始。": "the beginning of happiness.",
  "从第一次查询、准备文件、选择日期，到当天完成注册，我们希望让每一对新人都能清楚掌握流程，轻松准备人生重要的一天。": "From your first enquiry and document preparation to choosing a date and completing registration, we help every couple understand the process and prepare confidently for this important day.",
  "注册地点": "Registration Venue",
  "注册时段": "Registration Sessions",
  "请先查询及确认预约": "Please enquire and confirm an appointment first",
  "所需文件": "Required Documents",
  "以中心确认资料为准": "Subject to confirmation by the centre",
  "注册服务": "Registration Services",
  "咨询、预约与到场指引": "Enquiries, appointments and arrival guidance",
  "咨询注册程序": "Enquire About the Process",
  "准备所需文件": "Prepare Required Documents",
  "选择注册日期": "Choose a Registration Date",
  "确认预约时段": "Confirm Your Appointment",
  "到场完成注册": "Attend and Complete Registration",
  "展开幸福旅程 ♡": "Begin Your Happy Journey ♡",
  "还有注册问题？": "Still Have Registration Questions?",
  "让 AI Wedding Assistant 先为您整理重点。": "Let the AI Wedding Assistant organise the key details for you.",
  "有什么关于注册结婚想了解？": "What would you like to know about marriage registration?",
  "在线 · 随时为您解答": "Online · Ready to Help",
  "清除对话": "Clear Chat",
  "您也可以这样问：": "You can also ask:",
  "注册需要什么文件？": "What documents are required?",
  "怎样预约注册？": "How do we book a registration?",
  "注册费用是多少？": "How much is the registration fee?",
  "有什么日期可以注册？": "Which registration dates are available?",
  "有摄影师推荐吗？": "Can you recommend a photographer?",
  "有什么婚纱配套？": "What bridal packages are available?",
  "附近有什么婚宴餐厅？": "Which wedding banquet venues are nearby?",
  "有什么专属优惠？": "Are there any exclusive offers?",
  "您好 ♡ 我是 Kahwin-Kahwin AI Wedding Assistant。我可以帮您了解注册程序、寻找适合日期，以及推荐婚礼服务。": "Hello ♡ I’m the Kahwin-Kahwin AI Wedding Assistant. I can explain the registration process, help find suitable dates and recommend wedding services.",
  "这项资料目前还没有在系统资料库中，建议直接联系陈氏书院婚姻注册中心确认。": "This information is not yet available in our knowledge base. Please contact the Chan Clan Association Marriage Registration Centre for confirmation.",
  "您可以进入良辰吉日页面，按年份、月份与平日／周末偏好筛选。系统只使用管理员确认的日期资料。": "Visit the Auspicious Dates page and filter by year, month and weekday or weekend preference. The system only uses dates confirmed by the administrator.",
  "可以 ♡ 请告诉我预算、日期及地区，系统将从合作商家资料中筛选适合的服务和专属优惠。": "Yes ♡ Tell me your budget, date and area, and the system will shortlist suitable services and exclusive offers from our partner vendors.",
  "资料只依据注册中心与合作商家确认的内容，不会自行编造费用、条例或优惠。": "Information is based only on content confirmed by the registration centre and partner vendors. Fees, rules and offers are never invented.",
  "为我们寻找一个好日子 ♡": "Find a Beautiful Date for Us ♡",
  "告诉我们你们的": "Tell Us Your",
  "日期偏好": "Date Preferences",
  "系统结合注册中心开放时段与管理员确认的传统日期资料，提供清楚、安全的参考。": "The system combines the centre’s available sessions with administrator-confirmed traditional date information to provide clear, responsible guidance.",
  "计划年份": "Preferred Year",
  "计划月份": "Preferred Month",
  "十月": "October",
  "十一月": "November",
  "十二月": "December",
  "偏好周末": "Prefer Weekend",
  "偏好平日": "Prefer Weekday",
  "无特别偏好": "No Preference",
  "高度推荐": "Highly Recommended",
  "推荐": "Recommended",
  "名额有限": "Limited",
  "✦ 高度推荐": "✦ HIGHLY RECOMMENDED",
  "星期日 · 尚有注册时段 ·": "Sunday · Registration sessions available ·",
  "选择这个日子 ♡": "Choose This Date ♡",
  "良辰吉日资料属于传统文化及一般参考，不代表任何结果保证。": "Auspicious-date information is a traditional and general reference and does not guarantee any outcome.",
  "日": "Sun", "一": "Mon", "二": "Tue", "三": "Wed", "四": "Thu", "五": "Fri", "六": "Sat",
  "让准备结婚的新人找到您": "Help Couples Discover Your Business",
  "不只是展示商家，": "More Than Listing Vendors—",
  "而是让 AI 帮您配对顾客。": "Let AI Match You with Customers.",
  "合作商家资料会进入 AI Wedding Assistant Knowledge Base。当新人询问相关服务、预算与地区时，系统可以推荐符合条件的商家、配套及 Kahwin-Kahwin 专属优惠。": "Partner vendor information is added to the AI Wedding Assistant Knowledge Base. When couples ask about services, budgets and locations, the system can recommend suitable vendors, packages and Kahwin-Kahwin exclusive offers.",
  "合作商家类别": "Wedding Partner Categories",
  "摄影与录影": "Photography & Videography",
  "婚纱与化妆": "Bridalwear & Makeup",
  "餐厅与婚宴": "Restaurants & Banquets",
  "花艺与布置": "Florals & Styling",
  "珠宝与婚礼礼物": "Jewellery & Wedding Gifts",
  "司仪与娱乐": "Emcee & Entertainment",
  "AI 可按预算与日期推荐": "AI recommendations by budget and date",
  "选择适合您的合作方式": "Choose the Right Partnership",
  "建立品牌资料": "Create a Brand Profile",
  "商家页面 · 服务介绍": "Vendor page · Service introduction",
  "获得更多曝光": "Gain More Exposure",
  "推荐标记 · 优惠展示": "Featured badge · Offer display",
  "AI 优先推荐": "Priority AI Recommendation",
  "首页精选 · 潜客分析": "Homepage feature · Lead insights",
  "申请成为伙伴": "Apply to Become a Partner",
  "开始我们的幸福旅程 ♡": "Begin Our Happy Journey ♡",
  "注册查询或商家合作，我们都乐意为您提供方向。": "Whether you need registration help or want to partner with us, we’re happy to guide you.",
  "地址": "Address",
  "资料确认后更新": "To be updated after confirmation",
  "电话": "Phone",
  "开放时间": "Opening Hours",
  "请先查询及预约": "Please enquire and book in advance",
  "婚姻注册询问": "Marriage Registration Enquiry",
  "进入 AI Wedding Assistant": "Open AI Wedding Assistant",
  "申请加入合作伙伴网络": "Apply to join the partner network",
  "问问我们的 Wedding Assistant…": "Ask our Wedding Assistant…",
  "发送": "Send",
  "打开菜单": "Open menu"
};

const enToZh = Object.fromEntries(Object.entries(zhToEn).map(([zh, en]) => [en, zh]));

function translatePage(lang: Lang) {
  const dictionary = lang === "en" ? zhToEn : enToZh;
  document.documentElement.lang = lang === "en" ? "en" : "zh-Hans";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    const raw = node.nodeValue ?? "";
    const value = raw.trim();
    if (!value || !dictionary[value]) continue;
    node.nodeValue = raw.replace(value, dictionary[value]);
  }
  document.querySelectorAll<HTMLInputElement>("input[placeholder]").forEach((input) => {
    const value = input.placeholder;
    if (dictionary[value]) input.placeholder = dictionary[value];
  });
  document.querySelectorAll<HTMLElement>("[aria-label]").forEach((element) => {
    const value = element.getAttribute("aria-label") ?? "";
    if (dictionary[value]) element.setAttribute("aria-label", dictionary[value]);
  });
}

export function LanguageToggle() {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("kahwin-language") === "en" ? "en" : "zh";
    setLang(saved);
    translatePage(saved);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => translatePage(lang));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [lang]);

  const changeLanguage = (next: Lang) => {
    if (next === lang) return;
    localStorage.setItem("kahwin-language", next);
    setLang(next);
    translatePage(next);
  };

  return (
    <div className="language-toggle" aria-label="Language selection">
      <Languages size={15} aria-hidden="true" />
      <button className={lang === "zh" ? "active" : ""} onClick={() => changeLanguage("zh")}>中文</button>
      <i />
      <button className={lang === "en" ? "active" : ""} onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}
