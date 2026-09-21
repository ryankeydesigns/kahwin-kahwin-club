export type KnowledgeBaseEntry = {
  question: string;
  keywords: string[];
  answerZh: string;
  answerEn: string;
};

export const knowledgeBase: KnowledgeBaseEntry[] = [
  {
    question: "有什么专属优惠？",
    keywords: [
      "专属优惠",
      "优惠",
      "promotion",
      "promo",
      "discount",
      "折扣",
      "婚礼优惠",
      "注册优惠",
      "配套优惠",
      "exclusive offer",
    ],
    answerZh:
      "Kahwin-Kahwin.club 会不定期提供婚姻注册及婚礼相关的专属优惠，包括婚纱摄影、婚宴、化妆、花艺布置、珠宝金饰、婚礼礼物、司仪及娱乐表演等。\n\n实际优惠以当时公布的活动及合作商家配套为准。\n\n如果你告诉我正在寻找哪一种婚礼服务，我可以根据现有资料为你介绍。",
    answerEn:
      "Kahwin-Kahwin.club periodically features exclusive marriage registration and wedding offers, including bridal photography, banquets, makeup, floral styling, jewellery, wedding gifts, emcees and entertainment.\n\nActual offers are subject to the promotions and partner packages available at the time.\n\nTell me which wedding service you are looking for and I can introduce the options currently available.",
  },
  {
    question: "注册需要什么文件？",
    keywords: [
      "注册文件",
      "结婚文件",
      "需要什么文件",
      "婚姻注册文件",
      "结婚注册",
      "证件",
      "身份证",
      "registration document",
      "marriage document",
      "documents required",
      "what documents",
      "identity card",
    ],
    answerZh:
      "婚姻注册所需要的文件会根据申请人的国籍、婚姻状况及注册方式而有所不同。\n\n一般可能需要准备身份证明、相关申请文件及其他婚姻注册所需资料。由于政府规定及个别情况可能有所不同，建议在正式提交申请前确认最新要求。\n\n如果你告诉我是“马来西亚公民双方注册”、“马来西亚人与外国人注册”或其他情况，我可以进一步提供相关资讯。",
    answerEn:
      "Documents required for marriage registration vary according to the applicants’ nationalities, marital status and registration method.\n\nYou may generally need identification, relevant application forms and other supporting documents. As government requirements and individual circumstances may differ, please confirm the latest requirements before submitting an application.\n\nTell me whether this is between two Malaysian citizens, a Malaysian and a foreign national, or another situation, and I can provide more relevant information.",
  },
  {
    question: "有摄影师推荐吗？",
    keywords: [
      "摄影师",
      "摄影推荐",
      "婚礼摄影",
      "注册摄影",
      "photographer",
      "wedding photographer",
      "photography recommendation",
    ],
    answerZh:
      "可以。Kahwin-Kahwin.club 会整理婚姻注册及婚礼摄影相关服务，包括注册仪式摄影、婚礼当天摄影、Pre-Wedding 婚纱摄影及活动摄影等。\n\n目前相关摄影师资料正在整理中。你可以告诉我婚礼日期、地区及需要的摄影类型，我可以先记录你的需求；有已确认的合作摄影师时，系统会根据你的需要介绍。",
    answerEn:
      "Yes. Kahwin-Kahwin.club organises information on marriage registration and wedding photography, including registration ceremony coverage, wedding-day photography, pre-wedding photography and event photography.\n\nPhotographer listings are currently being prepared. Tell me your wedding date, location and preferred type of photography so I can record your needs. When a verified partner is available, the system can introduce a suitable option.",
  },
  {
    question: "注册费用是多少？",
    keywords: [
      "注册费用",
      "婚姻注册多少钱",
      "结婚费用",
      "多少钱",
      "收费",
      "registration fee",
      "registration price",
      "how much",
    ],
    answerZh:
      "婚姻注册费用会根据注册地点、注册方式及相关服务而有所不同。\n\n部分费用可能属于官方注册费用，部分则可能涉及场地、仪式或其他附加服务。为了避免提供错误价格，请以最新公布或负责人确认的收费为准。\n\n如果你告诉我想了解哪一种注册方式，我可以进一步协助。",
    answerEn:
      "Marriage registration fees vary according to the registration venue, registration method and related services.\n\nSome charges may be official registration fees, while others may cover the venue, ceremony or additional services. To avoid giving an incorrect price, please refer to the latest published fee or confirm it with the person in charge.\n\nTell me which registration method you are considering and I can assist further.",
  },
  {
    question: "有什么日期可以注册？",
    keywords: [
      "注册日期",
      "有什么日期",
      "哪一天可以注册",
      "良辰吉日",
      "结婚好日子",
      "注册好日子",
      "registration date",
      "wedding date",
      "auspicious date",
      "available date",
    ],
    answerZh:
      "你可以通过 Kahwin-Kahwin.club 查询适合婚姻注册的日期。\n\n如果希望选择良辰吉日，可以使用网站的“结婚好日子”功能，根据年份及双方生肖查询适合的结婚或注册日期。目前可查询 2026 至 2029 年的相关日期资料。\n\n实际可预约的注册日期及时间，仍需要以相关注册单位最终确认为准。",
    answerEn:
      "You can use Kahwin-Kahwin.club to check dates that may be suitable for marriage registration.\n\nFor an auspicious date, use the Wedding Dates feature and filter by year and both partners’ zodiac signs. Reference dates from 2026 to 2029 are currently available.\n\nActual registration dates and appointment times remain subject to final confirmation by the relevant registration authority.",
  },
  {
    question: "怎样预约注册？",
    keywords: [
      "预约注册",
      "怎样预约",
      "如何预约",
      "怎样注册",
      "booking",
      "appointment",
      "book registration",
      "registration booking",
    ],
    answerZh:
      "如果准备预约婚姻注册，可以先提供基本资料及希望注册的日期。\n\n一般流程：\n选择预计注册日期\n→ 准备双方基本资料\n→ 提交注册询问\n→ 确认日期及相关要求\n→ 准备所需文件\n→ 完成预约确认\n\n实际流程可能根据注册方式及个别情况有所不同。",
    answerEn:
      "To arrange a marriage registration appointment, first prepare your basic information and preferred registration date.\n\nGeneral process:\nChoose a preferred registration date\n→ Prepare both partners’ basic information\n→ Submit a registration enquiry\n→ Confirm the date and requirements\n→ Prepare the required documents\n→ Complete the appointment confirmation\n\nThe actual process may vary according to the registration method and individual circumstances.",
  },
  {
    question: "寻找婚宴摄影与录影",
    keywords: [
      "婚宴摄影",
      "婚礼录影",
      "摄影录影",
      "婚礼影片",
      "婚宴摄影师",
      "videographer",
      "wedding video",
      "wedding videography",
    ],
    answerZh:
      "Kahwin-Kahwin.club 可以协助你寻找婚宴摄影及录影服务。\n\n常见服务包括：\n• 婚礼当天摄影\n• 婚宴摄影\n• 婚礼全程录影\n• 注册仪式摄影\n• Highlight Video\n• Same Day Edit\n• Pre-Wedding Photography\n\n如有已确认的合作商家，系统会优先根据你的地区、日期及需求进行介绍。",
    answerEn:
      "Kahwin-Kahwin.club can help you look for wedding banquet photography and videography services.\n\nCommon services include:\n• Wedding-day photography\n• Banquet photography\n• Full wedding videography\n• Registration ceremony photography\n• Highlight videos\n• Same-day edits\n• Pre-wedding photography\n\nWhen verified partners are available, the system will prioritise options based on your location, date and requirements.",
  },
  {
    question: "婚纱与化妆介绍",
    keywords: [
      "婚纱",
      "化妆师",
      "新娘化妆",
      "试妆",
      "wedding gown",
      "bridal gown",
      "makeup",
      "mua",
      "bridal makeup",
    ],
    answerZh:
      "Kahwin-Kahwin.club 会提供婚纱及新娘化妆相关资讯。\n\n服务可能包括：\n• 婚纱与礼服租借\n• 新娘化妆\n• 新郎造型\n• 发型设计\n• 注册当天造型\n• 婚宴当天造型\n• Pre-Wedding 造型\n\n你可以告诉我婚礼日期、地区及需要的服务，我可以根据现有合作商家资料为你介绍。",
    answerEn:
      "Kahwin-Kahwin.club provides information on bridal gowns and bridal makeup services.\n\nServices may include:\n• Bridal gown and formalwear rental\n• Bridal makeup\n• Groom styling\n• Hairstyling\n• Registration-day styling\n• Wedding banquet styling\n• Pre-wedding styling\n\nTell me your wedding date, location and required services, and I can introduce options from the verified partner information currently available.",
  },
  {
    question: "餐厅婚宴",
    keywords: [
      "婚宴餐厅",
      "婚宴场地",
      "餐厅婚宴",
      "酒楼",
      "摆酒",
      "wedding dinner",
      "banquet restaurant",
      "wedding venue",
      "banquet venue",
    ],
    answerZh:
      "如果你正在寻找婚宴餐厅或婚宴场地，Kahwin-Kahwin.club 可以根据现有商家资料提供相关选择。\n\n请告诉我：\n• 婚宴地区\n• 预计日期\n• 预计桌数或人数\n• 中式或西式婚宴\n• 预算范围\n\n有了这些资料后，可以更容易找到适合的婚宴场地。",
    answerEn:
      "If you are looking for a wedding banquet restaurant or venue, Kahwin-Kahwin.club can suggest options based on the vendor information currently available.\n\nPlease tell me:\n• Preferred area\n• Expected date\n• Estimated number of tables or guests\n• Chinese or Western-style banquet\n• Budget range\n\nThese details will make it easier to identify a suitable venue.",
  },
  {
    question: "花艺与布置场地",
    keywords: [
      "花艺",
      "婚礼布置",
      "场地布置",
      "鲜花",
      "wedding decoration",
      "florist",
      "floral design",
      "venue styling",
    ],
    answerZh:
      "婚礼花艺及场地布置可以根据婚礼主题、颜色及场地进行设计。\n\n常见服务包括：\n• 注册仪式布置\n• 婚宴舞台设计\n• 迎宾区布置\n• 鲜花与桌花设计\n• Photo Booth\n• Backdrop\n• 入口装饰\n• 主题婚礼设计\n\n如果已经有喜欢的婚礼风格或颜色，也可以告诉我。",
    answerEn:
      "Wedding florals and venue styling can be designed around your wedding theme, colour palette and venue.\n\nCommon services include:\n• Registration ceremony styling\n• Wedding stage design\n• Reception-area styling\n• Floral and table arrangements\n• Photo booths\n• Backdrops\n• Entrance decorations\n• Themed wedding design\n\nIf you already have a preferred wedding style or colour palette, tell me about it.",
  },
  {
    question: "珠宝与金饰",
    keywords: [
      "珠宝",
      "金饰",
      "结婚金饰",
      "钻戒",
      "婚戒",
      "龙凤镯",
      "wedding ring",
      "jewellery",
      "jewelry",
      "diamond ring",
      "gold",
    ],
    answerZh:
      "Kahwin-Kahwin.club 会整理婚礼珠宝、婚戒及金饰相关商家资讯。\n\n常见选择包括：\n• 结婚戒指与钻戒\n• 黄金首饰\n• 龙凤镯\n• 项链与耳环\n• 新娘珠宝\n• 传统结婚金饰\n\n如有已确认的合作珠宝或金饰商家，系统可根据你的预算及需求进行介绍。",
    answerEn:
      "Kahwin-Kahwin.club organises vendor information for wedding jewellery, wedding rings and gold jewellery.\n\nCommon choices include:\n• Wedding rings and diamond rings\n• Gold jewellery\n• Dragon-and-phoenix bangles\n• Necklaces and earrings\n• Bridal jewellery\n• Traditional wedding gold jewellery\n\nWhen verified jewellery partners are available, the system can introduce options based on your budget and needs.",
  },
  {
    question: "婚礼礼物",
    keywords: [
      "婚礼礼物",
      "结婚礼物",
      "回礼",
      "伴手礼",
      "喜饼",
      "wedding gift",
      "door gift",
      "wedding favour",
      "wedding favor",
    ],
    answerZh:
      "婚礼礼物可以分为送给新人、宾客回礼及伴郎伴娘礼物。\n\n常见选择包括：\n• 婚宴 Door Gift\n• 客制化礼物\n• 喜饼与巧克力\n• 香氛产品\n• 纪念品\n• 伴郎伴娘礼物\n• 新人结婚礼物\n\n如果你告诉我是“送新人”还是“婚宴回礼”，我可以提供更适合的方向。",
    answerEn:
      "Wedding gifts may be for the couple, guest favours, or bridesmaid and groomsman gifts.\n\nCommon choices include:\n• Wedding banquet door gifts\n• Personalised gifts\n• Wedding pastries and chocolates\n• Fragrance products\n• Souvenirs\n• Bridesmaid and groomsman gifts\n• Gifts for the newlyweds\n\nTell me whether you need a gift for the couple or guest favours, and I can suggest a more suitable direction.",
  },
  {
    question: "寻婚宴找司仪",
    keywords: [
      "婚宴司仪",
      "婚礼主持人",
      "找司仪",
      "主持人",
      "emcee",
      "wedding emcee",
      "wedding mc",
      "wedding host",
    ],
    answerZh:
      "Kahwin-Kahwin.club 可以提供婚宴司仪及婚礼主持相关资讯。\n\n司仪服务一般包括：\n• 婚宴流程主持\n• 新人进场与敬酒环节\n• 互动游戏\n• 双方家长环节\n• 现场气氛带动\n• 婚礼流程协调\n\n部分司仪可提供中文、英文、广东话或多语言主持。如果你告诉我婚宴日期、地区及需要的语言，可以根据现有商家资料寻找适合的司仪。",
    answerEn:
      "Kahwin-Kahwin.club provides information on wedding banquet emcees and wedding hosts.\n\nEmcee services generally include:\n• Hosting the banquet programme\n• Couple entrance and toasting sessions\n• Interactive games\n• Family segments\n• Building the atmosphere\n• Coordinating the wedding programme\n\nSome emcees host in Mandarin, English, Cantonese or multiple languages. Tell me your banquet date, location and language requirements so suitable options can be identified from available vendor information.",
  },
  {
    question: "婚宴当晚娱乐与表演",
    keywords: [
      "婚宴表演",
      "婚礼表演",
      "婚宴娱乐",
      "婚宴节目",
      "乐队",
      "歌手",
      "魔术",
      "舞蹈",
      "wedding entertainment",
      "live band",
      "wedding performance",
      "dj",
    ],
    answerZh:
      "婚宴当晚可以安排不同类型的娱乐及现场表演，让整个婚宴气氛更加丰富。\n\n常见选择包括：\n• Live Band 与现场歌手\n• 音乐演奏\n• DJ\n• 魔术或舞蹈表演\n• 互动游戏\n• 特色演出\n• 婚礼节目策划\n\n可以根据婚宴场地、宾客人数、婚礼风格及预算选择适合的节目。如果你想要“浪漫”、“热闹”、“年轻化”或“传统”的气氛，我可以根据现有资料提供相关建议。",
    answerEn:
      "Different types of entertainment and live performances can make the wedding banquet atmosphere more engaging.\n\nCommon choices include:\n• Live bands and singers\n• Instrumental performances\n• DJs\n• Magic or dance performances\n• Interactive games\n• Specialty acts\n• Wedding programme planning\n\nChoose according to the venue, guest count, wedding style and budget. Tell me whether you prefer a romantic, lively, youthful or traditional atmosphere, and I can offer suggestions based on the information available.",
  },
  {
    question: "可以介绍婚礼商家吗？",
    keywords: [
      "有推荐吗",
      "介绍商家",
      "推荐商家",
      "婚礼服务",
      "合作商家",
      "recommend a vendor",
      "wedding vendor",
      "wedding service",
      "recommendation",
    ],
    answerZh:
      "可以。请告诉我以下资料，我会先判断你需要的服务类别：\n\n1. 婚礼或注册日期\n2. 地区\n3. 预算\n4. 需要的服务\n5. 预计人数（适用于婚宴）\n6. 语言要求（适用于司仪等服务）\n\n如果 Knowledge Base 已有符合条件的合作商家，我会根据已确认资料介绍；如果暂时没有相关商家，我会明确告诉你，不会自行虚构商家资料。",
    answerEn:
      "Yes. Please share the details below so I can first identify the service category you need:\n\n1. Wedding or registration date\n2. Location\n3. Budget\n4. Required service\n5. Estimated guest count (for banquets)\n6. Language requirements (for emcees and similar services)\n\nIf the Knowledge Base contains a suitable verified partner, I can introduce it using confirmed information. If no relevant partner is currently listed, I will say so clearly and will not invent vendor details.",
  },
];

export const knowledgeBaseTranslations: Record<string, string> =
  Object.fromEntries(
    knowledgeBase.map(({ answerZh, answerEn }) => [answerZh, answerEn]),
  );

export const knowledgeFallbackZh =
  "这项资料可能会有更新，我可以协助你进一步查询或联系相关负责人确认。";
export const knowledgeFallbackEn =
  "This information may be updated from time to time. I can help you make a further enquiry or contact the relevant person for confirmation.";

export function findKnowledgeAnswer(input: string) {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return knowledgeFallbackZh;

  let bestMatch: KnowledgeBaseEntry | undefined;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    if (normalized === entry.question.toLowerCase()) return entry.answerZh;

    let score = 0;
    for (const keyword of entry.keywords) {
      const normalizedKeyword = keyword.toLowerCase();
      if (normalized.includes(normalizedKeyword)) {
        score += Math.max(4, normalizedKeyword.length);
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestMatch?.answerZh ?? knowledgeFallbackZh;
}
