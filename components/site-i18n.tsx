"use client";

import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

type Lang = "zh" | "en";

const zhToEn: Record<string, string> = {
  陈氏书院婚姻注册中心: "Chan Clan Association Marriage Registration Centre",
  首页: "Home",
  关于中心: "About",
  注册询问: "Registration Help",
  结婚好日子: "Wedding Dates",
  商家合作: "Partners",
  联络我们: "Contact",
  "开始注册询问 ♡": "Start Registration Help ♡",
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
  关于陈氏书院婚姻注册中心:
    "About the Chan Clan Association Marriage Registration Centre",
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
  "这是 Demo 回复 ♡ 正式版本可根据合作商家提供的优惠、有效期和新人需求进行推荐。目前请先联系中心确认最新优惠。":
    "Demo reply ♡ The full version can recommend offers based on vendor promotions, validity periods and the couple’s needs. Please contact the centre for the latest offers.",
  "这是 Demo 回复：一般会先确认双方身份证明、照片及相关申请文件；实际清单请以注册中心最新要求为准。":
    "Demo reply: Identity documents, photos and relevant application forms are generally required. Please follow the registration centre’s latest checklist.",
  "这是 Demo 回复 ♡ 可以按婚礼日期、地区、风格和预算示范筛选摄影师；目前尚未连接真实商家资料。":
    "Demo reply ♡ Photographers can be shortlisted by wedding date, area, style and budget. Live vendor data is not connected yet.",
  "这是 Demo 回复：费用会按注册安排及服务内容而不同，正式金额请向注册中心查询确认。":
    "Demo reply: Fees vary according to the registration arrangement and services. Please confirm the official amount with the centre.",
  "这是 Demo 回复：可以前往「结婚好日子」查看通胜参考日期，再向注册中心确认可预约时段。":
    "Demo reply: Visit Wedding Dates to review almanac reference dates, then confirm available appointment sessions with the centre.",
  "这是 Demo 回复：可先准备双方基本资料、希望日期与联络方式，再联系注册中心确认预约。":
    "Demo reply: Prepare both partners’ basic details, preferred date and contact information, then contact the centre to confirm an appointment.",
  "这是 Demo 回复 ♡ 可按日期、地区、预算和拍摄风格筛选婚宴摄影与录影团队；目前为测试示范。":
    "Demo reply ♡ Wedding photography and videography teams can be shortlisted by date, area, budget and shooting style. This is a test demonstration.",
  "这是 Demo 回复 ♡ 可示范介绍婚纱款式、新娘化妆、试妆及造型配套；目前未连接真实商家资料。":
    "Demo reply ♡ The system can introduce gown styles, bridal makeup, trial makeup and styling packages. Live vendor data is not connected yet.",
  "这是 Demo 回复：可按地区、桌数、预算和菜式示范筛选婚宴餐厅；实际档期与价格需向商家确认。":
    "Demo reply: Banquet restaurants can be shortlisted by area, table count, budget and cuisine. Availability and prices must be confirmed with vendors.",
  "这是 Demo 回复 ♡ 可按婚礼主题、色系、场地和预算示范推荐花艺与布置服务。":
    "Demo reply ♡ Floral design and styling services can be recommended by wedding theme, colour palette, venue and budget.",
  "这是 Demo 回复：可示范介绍结婚戒指、龙凤镯及婚嫁金饰类别；价格与库存需向商家确认。":
    "Demo reply: The system can introduce wedding rings, dragon-and-phoenix bangles and bridal gold jewellery. Prices and stock require vendor confirmation.",
  "这是 Demo 回复 ♡ 可按宾客人数、预算和婚礼主题示范推荐回礼、喜饼及定制婚礼礼物。":
    "Demo reply ♡ Favours, wedding pastries and personalised gifts can be recommended by guest count, budget and wedding theme.",
  "这是 Demo 回复：可按语言、主持风格、婚宴日期和地点示范寻找合适司仪；目前为测试回复。":
    "Demo reply: Suitable emcees can be shortlisted by language, hosting style, banquet date and venue. This is a test response.",
  "这是 Demo 回复 ♡ 可示范推荐现场乐队、歌手、舞蹈、魔术及互动表演；实际演出内容与报价需向商家确认。":
    "Demo reply ♡ The system can suggest live bands, singers, dance, magic and interactive performances. Content and quotations require vendor confirmation.",
  "您好 ♡ 我是 Kahwin-Kahwin AI Wedding Assistant。我可以帮您了解注册程序、寻找适合日期，以及推荐婚礼服务。":
    "Hello ♡ I’m the Kahwin-Kahwin AI Wedding Assistant. I can explain the registration process, help find suitable dates and recommend wedding services.",
  "这项资料目前还没有在系统资料库中，建议直接联系陈氏书院婚姻注册中心确认。":
    "This information is not yet available in our knowledge base. Please contact the Chan Clan Association Marriage Registration Centre for confirmation.",
  "您可以进入结婚好日子页面，按年份、月份与平日／周末偏好筛选。系统只使用经过核对的通胜参考资料。":
    "Visit the Wedding Dates page and filter by year, month and weekday or weekend preference. The system uses reviewed traditional almanac references.",
  "您可以进入结婚好日子页面，按年份、月份与两位新人生肖筛选。系统只使用经过核对的通胜参考资料。":
    "Visit the Wedding Dates page and filter by year, month and both partners’ zodiac signs. The system uses reviewed traditional almanac references.",
  "可以 ♡ 请告诉我预算、日期及地区，系统将从合作商家资料中筛选适合的服务和专属优惠。":
    "Yes ♡ Tell me your budget, date and area, and the system will shortlist suitable services and exclusive offers from our partner vendors.",
  "资料只依据注册中心与合作商家确认的内容，不会自行编造费用、条例或优惠。":
    "Information is based only on content confirmed by the registration centre and partner vendors. Fees, rules and offers are never invented.",
  "寻找结婚好日子 ♡": "Find a Wedding Date ♡",
  "2026–2027 通胜宜嫁娶参考 × 当天通胜详情 × 注册时段确认":
    "2026–2027 Almanac Reference × Daily Details × Registration Confirmation",
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
  "颜色说明（不是选择按钮）": "Colour Guide (Not Selection Buttons)",
  "请在下方月历点击带有 ♡ 或 ✦ 的粉红色日期。":
    "Tap a pink date marked ♡ or ✦ in the calendar below.",
  "请点击带有 ♡ 或 ✦ 的粉红色日期。":
    "Tap a pink date marked ♡ or ✦.",
  "已自动隐藏与新人生肖相冲的日期。":
    "Dates that clash with either partner’s zodiac sign are automatically hidden.",
  "✦ 通胜宜嫁娶 · 周末": "✦ SUITABLE FOR MARRIAGE · WEEKEND",
  "♡ 通胜宜嫁娶": "♡ SUITABLE FOR MARRIAGE",
  避忌生肖: "Clashing Zodiac",
  请向陈氏书院婚姻注册中心查询及确认:
    "Please enquire with the Chan Clan Association Marriage Registration Centre",
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
  "通胜好日子不等同注册中心开放日期，请另外查询陈氏书院婚姻注册中心的实际时段。":
    "An auspicious almanac date does not mean the registration centre is open. Please confirm the actual sessions separately.",
  南: "South",
  东: "East",
  北: "North",
  西: "West",
  "日期根据传统通胜「宜嫁娶」资料整理，仅供民俗文化与一般参考，并非专业命理择日，也不代表任何结果保证。冲煞资料不等同个人八字合婚；注册日期及时间以陈氏书院婚姻注册中心最终确认为准。":
    "Dates are compiled from traditional almanac references marked suitable for marriage. They are for cultural and general reference only, not professional date selection or a guarantee of outcomes. Clash details are not a personal birth-chart assessment; registration dates and times remain subject to final confirmation by the centre.",
  参考资料: "Reference",
  "2026–2027 传统通胜结婚日期整理":
    "2026–2027 Traditional Almanac Wedding Date Reference",
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
