"use client";

import { Languages } from "lucide-react";
import { useEffect, useState } from "react";
import {
  knowledgeBaseTranslations,
  knowledgeFallbackEn,
  knowledgeFallbackZh,
} from "@/lib/knowledge-base";

type Lang = "zh" | "en";

const zhToEn: Record<string, string> = {
  ...knowledgeBaseTranslations,
  [knowledgeFallbackZh]: knowledgeFallbackEn,
  马来西亚婚姻注册资讯平台:
    "Malaysia Marriage Registration & Wedding Guide",
  首页: "Home",
  关于我们: "About Us",
  "AI 助手": "AI Assistant",
  结婚好日子: "Wedding Dates",
  商家合作: "Partners",
  联络我们: "Contact",
  "开始注册询问 ♡": "Start Registration Help ♡",
  "让婚姻注册资讯，变得更简单。":
    "Making Marriage Registration Information Simpler.",
  "一个为准备结婚的新人而设的一站式婚姻资讯平台。":
    "A one-stop marriage information platform for couples preparing to marry.",
  "从婚姻注册流程、所需文件、日期与常见问题，到婚纱、摄影、婚宴、花艺、珠宝、喜饼、司仪及娱乐等婚礼服务，我们希望把原本分散的资讯重新整理，让新人能够更简单、更快速地找到真正需要的内容。":
    "From marriage registration procedures, required documents, dates and common questions to bridalwear, photography, banquets, florals, jewellery, wedding pastries, emcees and entertainment, we organise scattered information so couples can find what they truly need more simply and quickly.",
  "结合 AI 助手 × AI Knowledge Base × 婚礼服务资讯，让筹备婚姻这件事，少一点复杂，多一点期待。":
    "Combining an AI Assistant, AI Knowledge Base and wedding service information to make marriage preparation less complicated and more exciting.",
  "询问 AI 助手": "Ask the AI Assistant",
  "结婚已经有很多事情要准备，找资料不应该再这么复杂。":
    "There is already so much to prepare for a wedding. Finding information should not be this complicated.",
  "准备注册结婚时，新人往往需要浏览不同网站、询问不同单位，再自行整理各种资料。":
    "When preparing to register a marriage, couples often need to browse different websites, contact different organisations and organise all the information themselves.",
  "费用是多少？": "How much does it cost?",
  "什么日期可以注册？": "Which dates are available for registration?",
  "怎样预约？": "How do we make an appointment?",
  "哪里可以找到摄影师、婚纱、婚宴或司仪？":
    "Where can we find photographers, bridalwear, wedding banquets or emcees?",
  "因此，我们建立了马来西亚婚姻注册资讯平台，希望把婚姻注册与婚礼筹备相关资讯集中在一个地方，并透过更清楚的内容架构及 AI 技术，让新人更容易找到答案。":
    "That is why we created the Malaysia Marriage Registration Information Platform: to bring marriage registration and wedding preparation information together in one place, with clearer content and AI technology that make answers easier to find.",
  "平台的 6 大好处": "6 Key Benefits of the Platform",
  婚姻注册资讯集中整理: "Organised Marriage Registration Information",
  "将注册流程、所需文件、日期、费用及常见问题集中整理，减少四处寻找资料的时间。":
    "Registration procedures, required documents, dates, fees and common questions are organised in one place, reducing the time spent searching across multiple sources.",
  "AI 智能查询": "AI-Powered Enquiries",
  "结合 AI 助手与 AI Knowledge Base，让新人可以直接提出问题，更快速找到相关资讯。":
    "The AI Assistant and AI Knowledge Base let couples ask questions directly and find relevant information faster.",
  婚礼服务一站式探索: "One-Stop Wedding Service Discovery",
  "从婚纱、化妆、摄影、录影到婚宴、花艺、珠宝、喜饼、司仪与娱乐，让婚礼筹备更加方便。":
    "Explore bridalwear, makeup, photography, videography, banquets, florals, jewellery, wedding pastries, emcees and entertainment in one place.",
  专注马来西亚新人: "Focused on Malaysian Couples",
  "以马来西亚婚姻注册及本地婚礼需求为核心，持续整理和扩充实用资讯。":
    "Built around Malaysian marriage registration and local wedding needs, with practical information that continues to grow.",
  简化繁琐的搜寻过程: "A Simpler Search Experience",
  "将复杂及分散的内容重新整理，以简单、清楚、容易理解的方式呈现。":
    "Complex and scattered content is reorganised and presented in a simple, clear and easy-to-understand way.",
  持续成长的婚礼资讯生态: "A Growing Wedding Information Ecosystem",
  "未来将连接更多婚礼相关商家、专业人士及服务，让新人拥有更完整的婚姻与婚礼资讯平台。":
    "The platform will connect more wedding vendors, professionals and services to create a more complete information ecosystem for couples.",
  "不只是找资料，": "More than finding information,",
  "你也可以直接问。": "you can ask directly.",
  "平台结合 AI 助手及 AI Knowledge Base，把大量婚姻注册与婚礼相关资料重新整理。使用者不需要逐页寻找内容，只需要直接提出问题。":
    "The platform combines an AI Assistant and AI Knowledge Base to organise extensive marriage registration and wedding information. Instead of searching page by page, users can simply ask a question.",
  "我们的目标，是让 AI 成为新人筹备婚姻过程中的资讯助手，协助使用者更快找到相关资料。":
    "Our goal is for AI to become an information assistant throughout the marriage preparation journey, helping users find relevant information faster.",
  "开始询问 AI": "Start Asking AI",
  "AI 助手问题示例": "Example Questions for the AI Assistant",
  "注册结婚需要准备什么文件？":
    "What documents are needed to register a marriage?",
  "有婚礼摄影师推荐吗？": "Can you recommend a wedding photographer?",
  "哪里可以找婚宴场地？": "Where can we find a wedding venue?",
  "不同专业，一起完成一个平台。":
    "Different expertise, working together to build one platform.",
  "马来西亚婚姻注册资讯平台由网站开发、设计、AI、市场策略等不同专业领域的成员共同策划与开发。":
    "The Malaysia Marriage Registration Information Platform is planned and developed by team members across web development, design, AI and marketing strategy.",
  "我们相信，一个真正实用的平台，不只是把网站做好看，而是让资讯 × 技术 × 设计 × 使用体验真正结合起来。":
    "We believe a truly useful platform is not just visually appealing; it brings information, technology, design and user experience together.",
  总开发与设计: "Lead Development & Design",
  市场策略: "Marketing Strategy",
  "AI 知识库": "AI Knowledge Base",
  美术与设计: "Art & Design",
  网站开发: "Web Development",
  "负责平台整体规划、网站架构、功能开发、UI/UX 与视觉设计，并统筹平台从概念、技术开发到实际应用的整体方向。":
    "Leads overall platform planning, website architecture, feature development, UI/UX and visual design, while coordinating the direction from concept and technical development to real-world use.",
  "负责平台市场定位、推广策略及发展方向，从市场与使用者需求出发，协助建立更清晰的发展模式。":
    "Oversees market positioning, promotional strategy and development direction, helping establish a clearer growth model based on market and user needs.",
  "负责 AI Knowledge Base 的资料整理、分类与内容架构，让 AI 助手能够更有效理解及回应使用者的问题。":
    "Organises, classifies and structures the AI Knowledge Base so the AI Assistant can understand and respond to user questions more effectively.",
  "负责平台美术方向、视觉元素与设计支援，让整体品牌拥有一致、清晰及友善的视觉体验。":
    "Supports the platform's art direction, visual elements and design so the brand maintains a consistent, clear and welcoming visual experience.",
  "负责网站功能开发、页面制作及技术支援，并持续优化网站功能、稳定性及跨装置使用体验。":
    "Handles website feature development, page production and technical support while continuously improving functionality, stability and the cross-device experience.",
  "我们想做的，不只是一个网站。": "We want to build more than a website.",
  "我们希望建立一个真正对新人有帮助的马来西亚婚姻注册资讯平台。":
    "We want to build a Malaysia marriage registration information platform that genuinely helps couples.",
  "“我要怎样注册结婚？”": "“How do I register my marriage?”",
  "到寻找好日子、摄影师、婚纱、婚宴餐厅、花艺、珠宝、喜饼、司仪与婚礼娱乐，我们希望新人在不同筹备阶段，都能够在这里找到适合自己的资讯与服务。":
    "From finding an auspicious date, photographer, bridalwear or banquet venue to florals, jewellery, wedding pastries, emcees and entertainment, we want couples to find suitable information and services at every stage of preparation.",
  "未来，我们也会持续结合 AI 技术、婚姻资讯及本地婚礼服务生态，让平台随着新人真正的需要不断成长。":
    "We will continue combining AI technology, marriage information and the local wedding service ecosystem so the platform grows with the real needs of couples.",
  "准备结婚，从这里开始。": "Preparing to Marry Starts Here.",
  "不确定从哪里开始？直接告诉我们的 AI 助手你的问题。":
    "Not sure where to begin? Tell our AI Assistant your question.",
  "让结婚少一点繁琐，多一点期待。":
    "Make marriage preparation less complicated and more exciting.",
  "从「我要注册结婚」开始": "Start with “We Want to Get Married”",
  "婚姻注册、结婚好日子、婚礼服务，":
    "Marriage registration, wedding dates and wedding services—",
  "一个平台帮您准备。": "everything you need, in one place.",
  开始我们的幸福旅程: "Begin Our Happy Journey",
  寻找结婚好日子: "Find Wedding Dates",
  "问 AI": "Ask AI",
  选日子: "Choose a Date",
  找服务: "Find Services",
  "今天想先准备什么？": "What Would You Like to Prepare First?",
  "由第一次查询开始，一步一步完成你们的注册与婚礼准备。":
    "Start with your first question and complete your registration and wedding preparations step by step.",
  我要注册结婚: "We Want to Get Married",
  "AI 为您解答注册步骤": "AI explains the registration steps",
  查询注册程序: "Check Registration Process",
  "了解文件、费用与预约": "Learn about documents, fees and appointments",
  筛选适合你们的日子: "Shortlist dates that suit you",
  寻找婚礼商家: "Find Wedding Vendors",
  配对服务与专属优惠: "Match services and exclusive offers",
  "问 AI、选日子、找服务，": "Ask AI, choose a date and find services—",
  "不再是三个分开的步骤。": "all in one connected journey.",
  了解怎样注册: "Learn how to register",
  寻找适合日期: "Find a suitable date",
  配对婚礼商家: "Match with wedding vendors",
  关于马来西亚婚姻注册资讯平台:
    "About Malaysia Marriage Registration & Wedding Guide",
  "为新人提供温馨、庄重而清楚的婚姻注册体验。":
    "A warm, dignified and clear marriage registration experience for every couple.",
  "让注册这一刻，": "Make the moment of registration",
  "成为幸福的开始。": "the beginning of happiness.",
  "从第一次查询、准备文件、选择日期，到当天完成注册，我们希望让每一对新人都能清楚掌握流程，轻松准备人生重要的一天。":
    "From your first enquiry and document preparation to choosing a date and completing registration, we help every couple understand the process and prepare confidently for this important day.",
  注册地点: "Registration Venue",
  注册时段: "Registration Sessions",
  请先查询及确认预约: "Please enquire and confirm an appointment first",
  所需文件: "Required Documents",
  以中心确认资料为准: "Subject to confirmation by the centre",
  注册服务: "Registration Services",
  "咨询、预约与到场指引": "Enquiries, appointments and arrival guidance",
  咨询注册程序: "Enquire About the Process",
  准备所需文件: "Prepare Required Documents",
  选择注册日期: "Choose a Registration Date",
  确认预约时段: "Confirm Your Appointment",
  到场完成注册: "Attend and Complete Registration",
  "展开幸福旅程 ♡": "Begin Your Happy Journey ♡",
  "还有注册问题？": "Still Have Registration Questions?",
  "让 AI Wedding Assistant 先为您整理重点。":
    "Let the AI Wedding Assistant organise the key details for you.",
  "有什么关于注册结婚想了解？":
    "What would you like to know about marriage registration?",
  "在线 · 随时为您解答": "Online · Ready to Help",
  清除对话: "Clear Chat",
  "您也可以这样问：": "You can also ask:",
  "注册需要什么文件？": "What documents are required?",
  "怎样预约注册？": "How do we book a registration?",
  "注册费用是多少？": "How much is the registration fee?",
  "有什么日期可以注册？": "Which registration dates are available?",
  "有摄影师推荐吗？": "Can you recommend a photographer?",
  "有什么婚纱配套？": "What bridal packages are available?",
  "附近有什么婚宴餐厅？": "Which wedding banquet venues are nearby?",
  "有什么专属优惠？": "Are there any exclusive offers?",
  寻找婚宴摄影与录影: "Find Wedding Photography & Videography",
  婚纱与化妆介绍: "Bridal Gown & Makeup Introduction",
  餐厅婚宴: "Restaurant Wedding Banquet",
  花艺与布置场地: "Floral Design & Venue Styling",
  珠宝与金饰: "Jewellery & Gold",
  婚礼礼物: "Wedding Gifts",
  寻婚宴找司仪: "Find a Wedding Emcee",
  婚宴当晚娱乐与表演: "Wedding Entertainment & Performances",
  传统嫁喜礼饼: "Traditional Chinese Wedding Pastry",
  西式婚礼蛋糕: "Western Wedding Cakes",
  "您好 ♡ 我是 Kahwin-Kahwin AI Wedding Assistant。我可以帮您了解注册程序、寻找适合日期，以及推荐婚礼服务。":
    "Hello ♡ I’m the Kahwin-Kahwin AI Wedding Assistant. I can explain the registration process, help find suitable dates and recommend wedding services.",
  "这项资料目前还没有在系统资料库中，建议通过马来西亚婚姻注册资讯平台查询确认。":
    "This information is not yet available in our knowledge base. Please check the Malaysia Marriage Registration & Wedding Guide for confirmation.",
  "您可以进入结婚好日子页面，按年份、月份与平日／周末偏好筛选。系统只使用经过核对的通胜参考资料。":
    "Visit the Wedding Dates page and filter by year, month and weekday or weekend preference. The system uses reviewed traditional almanac references.",
  "您可以进入结婚好日子页面，按年份、月份与两位新人生肖筛选。系统只使用经过核对的通胜参考资料。":
    "Visit the Wedding Dates page and filter by year, month and both partners’ zodiac signs. The system uses reviewed traditional almanac references.",
  "可以 ♡ 请告诉我预算、日期及地区，系统将从合作商家资料中筛选适合的服务和专属优惠。":
    "Yes ♡ Tell me your budget, date and area, and the system will shortlist suitable services and exclusive offers from our partner vendors.",
  "资料只依据注册中心与合作商家确认的内容，不会自行编造费用、条例或优惠。":
    "Information is based only on content confirmed by the registration centre and partner vendors. Fees, rules and offers are never invented.",
  "回复优先依据 Knowledge Base 与已确认的合作商家资料；不确定时不会自行编造价格、日期、商家或优惠。":
    "Replies prioritise the Knowledge Base and verified partner information. Prices, dates, vendors and offers will not be invented when information is uncertain.",
  "寻找结婚好日子 ♡": "Find a Wedding Date ♡",
  "2026–2027 通胜宜嫁娶参考 × 当天通胜详情 × 注册时段确认":
    "2026–2027 Almanac Reference × Daily Details × Registration Confirmation",
  "2026–2029 通胜宜嫁娶参考 × 当天通胜详情 × 注册时段确认":
    "2026–2029 Almanac Reference × Daily Details × Registration Confirmation",
  传统文化参考: "TRADITIONAL CULTURAL REFERENCE",
  选择适合你们的: "Choose a Date That Suits You",
  结婚好日子: "Wedding Dates",
  "选择年份、月份和日期偏好，查看传统通胜标示的宜嫁娶日期，再向注册中心确认开放时段。":
    "Choose a year, month and date preference to view dates marked suitable for marriage in the traditional almanac, then confirm availability with the centre.",
  "选择年份、月份和两位新人生肖，系统会避开相冲日期，再向注册中心确认开放时段。":
    "Choose the year, month and both partners’ zodiac signs. The system will avoid clashing dates before you confirm availability with the centre.",
  计划年份: "Preferred Year",
  计划月份: "Preferred Month",
  新人生肖: "Couple’s Zodiac Signs",
  新人一: "Partner One",
  新人二: "Partner Two",
  不提供: "Prefer Not to Say",
  一月: "January",
  二月: "February",
  三月: "March",
  四月: "April",
  五月: "May",
  六月: "June",
  七月: "July",
  八月: "August",
  九月: "September",
  十月: "October",
  十一月: "November",
  十二月: "December",
  偏好周末: "Prefer Weekend",
  偏好平日: "Prefer Weekday",
  无特别偏好: "No Preference",
  通胜宜嫁娶: "Suitable for Marriage",
  周末好日子: "Weekend Wedding Date",
  颜色说明: "Colour Guide",
  "请在下方月历点击带有 ♡ 或 ✦ 的粉红色日期。":
    "Tap a pink date marked ♡ or ✦ in the calendar below.",
  "✦ 通胜宜嫁娶 · 周末": "✦ SUITABLE FOR MARRIAGE · WEEKEND",
  "♡ 通胜宜嫁娶": "♡ SUITABLE FOR MARRIAGE",
  避忌生肖: "Clashing Zodiac",
  请通过马来西亚婚姻注册资讯平台查询及确认:
    "Please check the Malaysia Marriage Registration & Wedding Guide",
  "查询注册时段 ♡": "Check Registration Sessions ♡",
  当天通胜详情: "Daily Almanac Details",
  "选择其他日期，资料会即时更新":
    "Choose another date to update these details instantly",
  公历日期: "Gregorian Date",
  农历日期: "Lunar Date",
  星期: "Weekday",
  日支: "Day Branch",
  生肖冲煞: "Zodiac Clash & Direction",
  生肖: "Zodiac",
  冲生肖: "Clashing Zodiac",
  日期属性: "Date Type",
  平日好日子: "Weekday Wedding Date",
  宜: "Suitable",
  嫁娶: "Marriage",
  "传统通胜标示为适合结婚、举行婚礼的参考日期。":
    "The traditional almanac marks this as a reference date suitable for marriage and wedding ceremonies.",
  冲: "Clash",
  煞: "Direction",
  当天通胜显示: "The daily almanac shows",
  "相关生肖可自行考虑或咨询专业择日人士。":
    "Couples concerned about the related zodiac may consider another date or consult a professional.",
  忌与吉时: "Restrictions & Auspicious Hours",
  "本资料源只核对「宜嫁娶」及生肖冲煞；其他宜忌、吉神凶神、彭祖百忌和吉时，应查阅当天完整通胜或由专业择日人士进一步确认。":
    "This source verifies only suitability for marriage and the zodiac clash. Consult the complete daily almanac or a professional for other activities, auspicious and inauspicious influences, Peng Zu taboos and auspicious hours.",
  注册提醒: "Registration Reminder",
  "通胜好日子不等同注册中心开放日期，请通过马来西亚婚姻注册资讯平台查询实际时段。":
    "An auspicious almanac date does not mean the registration centre is open. Please confirm the actual sessions separately.",
  南: "South",
  东: "East",
  北: "North",
  西: "West",
  "日期根据传统通胜「宜嫁娶」资料整理，仅供民俗文化与一般参考，并非专业命理择日，也不代表任何结果保证。冲煞资料不等同个人八字合婚；注册日期及时间须向相关注册中心最终确认。":
    "Dates are compiled from traditional almanac references marked suitable for marriage. They are for cultural and general reference only, not professional date selection or a guarantee of outcomes. Clash details are not a personal birth-chart assessment; registration dates and times must be confirmed with the relevant registration centre.",
  参考资料: "Reference",
  "2026–2029《结婚吉日一览》（用户 RyanKey 提供资料）":
    "2026–2029 Wedding Date List (Reference Provided by RyanKey)",
  "最后核对：2026年8月31日": "Last reviewed: 31 August 2026",
  星期日: "Sunday",
  星期一: "Monday",
  星期二: "Tuesday",
  星期三: "Wednesday",
  星期四: "Thursday",
  星期五: "Friday",
  星期六: "Saturday",
  鼠: "Rat",
  牛: "Ox",
  虎: "Tiger",
  兔: "Rabbit",
  龙: "Dragon",
  蛇: "Snake",
  马: "Horse",
  羊: "Goat",
  猴: "Monkey",
  鸡: "Rooster",
  狗: "Dog",
  猪: "Pig",
  日: "Sun",
  一: "Mon",
  二: "Tue",
  三: "Wed",
  四: "Thu",
  五: "Fri",
  六: "Sat",
  让准备结婚的新人找到您: "Help Couples Discover Your Business",
  "不只是展示商家，": "More Than Listing Vendors—",
  "而是让 AI 帮您配对顾客。": "Let AI Match You with Customers.",
  "合作商家资料会进入 AI Wedding Assistant Knowledge Base。当新人询问相关服务、预算与地区时，系统可以推荐符合条件的商家、配套及 Kahwin-Kahwin 专属优惠。":
    "Partner vendor information is added to the AI Wedding Assistant Knowledge Base. When couples ask about services, budgets and locations, the system can recommend suitable vendors, packages and Kahwin-Kahwin exclusive offers.",
  合作商家类别: "Wedding Partner Categories",
  摄影与录影: "Photography & Videography",
  婚纱与化妆: "Bridalwear & Makeup",
  餐厅与婚宴: "Restaurants & Banquets",
  花艺与布置: "Florals & Styling",
  珠宝与婚礼礼物: "Jewellery & Wedding Gifts",
  司仪与娱乐: "Emcee & Entertainment",
  摄影与录影婚礼服务图片: "Wedding photography and videography",
  婚纱与化妆婚礼服务图片: "Bridalwear and makeup",
  餐厅与婚宴婚礼服务图片: "Wedding banquet restaurant",
  花艺与布置婚礼服务图片: "Wedding florals and venue styling",
  珠宝与婚礼礼物婚礼服务图片: "Wedding jewellery and gifts",
  司仪与娱乐婚礼服务图片: "Wedding emcee and entertainment",
  "AI 可按预算与日期推荐": "AI recommendations by budget and date",
  选择适合您的合作方式: "Choose the Right Partnership",
  建立品牌资料: "Create a Brand Profile",
  "商家页面 · 服务介绍": "Vendor page · Service introduction",
  获得更多曝光: "Gain More Exposure",
  "推荐标记 · 优惠展示": "Featured badge · Offer display",
  "AI 优先推荐": "Priority AI Recommendation",
  "首页精选 · 潜客分析": "Homepage feature · Lead insights",
  申请成为伙伴: "Apply to Become a Partner",
  "开始我们的幸福旅程 ♡": "Begin Our Happy Journey ♡",
  "注册查询或商家合作，我们都乐意为您提供方向。":
    "Whether you need registration help or want to partner with us, we’re happy to guide you.",
  地址: "Address",
  资料确认后更新: "To be updated after confirmation",
  电话: "Phone",
  开放时间: "Opening Hours",
  请先查询及预约: "Please enquire and book in advance",
  婚姻注册询问: "Marriage Registration Enquiry",
  "进入 AI Wedding Assistant": "Open AI Wedding Assistant",
  申请加入合作伙伴网络: "Apply to join the partner network",
  "问问我们的 Wedding Assistant…": "Ask our Wedding Assistant…",
  发送: "Send",
  打开菜单: "Open menu",
  "AI Wedding Assistant 对话回复": "AI Wedding Assistant conversation replies",
};

const enToZh = Object.fromEntries(
  Object.entries(zhToEn).map(([zh, en]) => [en, zh]),
);

function cookieLanguage(): Lang | null {
  const match = document.cookie.match(
    /(?:^|;\s*)kahwin-language=(en|zh)(?:;|$)/,
  );
  return match?.[1] === "en" ? "en" : match?.[1] === "zh" ? "zh" : null;
}

function requestedLanguage(): Lang {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (query === "en" || query === "zh") return query;
  const cookie = cookieLanguage();
  if (cookie) return cookie;
  return localStorage.getItem("kahwin-language") === "en" ? "en" : "zh";
}

function persistLanguage(lang: Lang) {
  localStorage.setItem("kahwin-language", lang);
  document.cookie = `kahwin-language=${lang}; path=/; max-age=31536000; SameSite=Lax`;
}

function syncLanguageUrl(lang: Lang) {
  const url = new URL(window.location.href);
  if (lang === "en") url.searchParams.set("lang", "en");
  else url.searchParams.delete("lang");
  window.history.replaceState(
    {},
    "",
    `${url.pathname}${url.search}${url.hash}`,
  );
}

function syncInternalLinks(lang: Lang) {
  document
    .querySelectorAll<HTMLAnchorElement>('a[href^="/"]')
    .forEach((link) => {
      const url = new URL(
        link.getAttribute("href") || "/",
        window.location.origin,
      );
      if (lang === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      link.href = `${url.pathname}${url.search}${url.hash}`;
    });
}

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
  document
    .querySelectorAll<HTMLInputElement>("input[placeholder]")
    .forEach((input) => {
      const value = input.placeholder;
      if (dictionary[value]) input.placeholder = dictionary[value];
    });
  document.querySelectorAll<HTMLElement>("[aria-label]").forEach((element) => {
    const value = element.getAttribute("aria-label") ?? "";
    if (dictionary[value])
      element.setAttribute("aria-label", dictionary[value]);
  });
}

export function LanguageToggle() {
  const [lang, setLang] = useState<Lang>("zh");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = requestedLanguage();
    persistLanguage(saved);
    setLang(saved);
    translatePage(saved);
    syncLanguageUrl(saved);
    syncInternalLinks(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const update = () => {
      translatePage(lang);
      syncInternalLinks(lang);
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [lang, ready]);

  const changeLanguage = (next: Lang) => {
    if (next === lang) return;
    persistLanguage(next);
    setLang(next);
    translatePage(next);
    syncLanguageUrl(next);
    syncInternalLinks(next);
  };

  return (
    <div className="language-toggle" aria-label="Language selection">
      <Languages size={15} aria-hidden="true" />
      <button
        className={lang === "zh" ? "active" : ""}
        onClick={() => changeLanguage("zh")}
      >
        中文
      </button>
      <i />
      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
