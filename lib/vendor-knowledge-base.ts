export type KnowledgeLanguage = "zh" | "en";

type VendorCategory = {
  id: string;
  nameZh: string;
  nameEn: string;
  keywords: string[];
  relatedBrands: string[];
};

type Vendor = {
  name: string;
  categoryId: string;
  area: string;
  regions: string[];
  services: string;
  phone?: string;
  address?: string;
  note?: string;
};

const categories: VendorCategory[] = [
  {
    id: "photo-video",
    nameZh: "摄影与录影",
    nameEn: "Photography & Videography",
    keywords: [
      "摄影师",
      "婚礼摄影",
      "婚宴摄影",
      "注册摄影",
      "婚礼录影",
      "拍video",
      "videographer",
      "photographer",
      "live feed",
      "video production",
    ],
    relatedBrands: [
      "Studio Wonkyu+",
      "Ahboonhock Studio",
      "NDrew Photography",
      "Biglens Studio",
      "Manson Photo",
      "Jessielyee Photography",
      "Cliff Choong Photography",
      "Steven Leong Photography",
      "Live in The Moment Films by Koh",
      "Khingdom Production",
      "Stephen Yau Weddings",
      "Stories.my - Lifestyle Photography & Videography",
      "Kita.Berduo",
      "Farah Wedding Photographer",
      "Symbiotic Photography",
      "DEEN.grapher",
      "Karya Remy",
      "Amrvlens Photography",
      "Tawa Stories",
      "Steven Yam Photography",
      "CJ Bug Production",
      "Finale Studios",
      "Light Feather Studios",
    ],
  },
  {
    id: "bridal-makeup",
    nameZh: "婚纱与化妆",
    nameEn: "Bridal Gown & Makeup",
    keywords: [
      "找婚纱",
      "租婚纱",
      "婚纱店",
      "婚纱租借",
      "化妆师",
      "新娘化妆",
      "wedding gown",
      "wedding dress",
      "bridal",
      "makeup",
      "mua",
    ],
    relatedBrands: [
      "Celest Thoi",
      "The Aisle Academy",
      "Pretty In White",
      "Simply Gorgeous Bridal",
      "Jojo Bridal",
      "Rynee Tan Make Up Studio",
      "Xtina Image Studio",
      "Beauty Haven",
      "Keith Kee Couture",
      "Kenny Loh Couture",
    ],
  },
  {
    id: "venue-banquet",
    nameZh: "餐厅、婚宴与场地",
    nameEn: "Restaurant, Banquet & Wedding Venue",
    keywords: [
      "摆酒",
      "婚宴",
      "酒楼",
      "婚宴场地",
      "婚礼场地",
      "wedding dinner",
      "banquet",
      "wedding venue",
      "ballroom",
      "event hall",
    ],
    relatedBrands: [
      "Upper Palace Dining Group",
      "Iconic Hotel Penang",
      "The Chateau Spa & Wellness Resort",
    ],
  },
  {
    id: "floral-decoration",
    nameZh: "花艺与婚礼布置",
    nameEn: "Florist & Wedding Decoration",
    keywords: [
      "花店",
      "婚礼花艺",
      "婚礼布置",
      "注册场地布置",
      "场地布置",
      "florist",
      "wedding decoration",
      "wedding flowers",
      "event decoration",
    ],
    relatedBrands: [
      "Ohara Florist",
      "Nook Flowers",
      "Wishing Tree",
      "TeAmo Conceptual Event Designs",
      "My Deco Rental",
    ],
  },
  {
    id: "jewellery-gifts",
    nameZh: "珠宝、婚戒与婚礼礼物",
    nameEn: "Jewellery, Wedding Rings & Gifts",
    keywords: [
      "买婚戒",
      "婚戒",
      "求婚戒指",
      "钻戒",
      "金饰",
      "结婚礼物",
      "婚宴回礼",
      "伴手礼",
      "door gift",
      "wedding favour",
      "wedding favor",
      "wedding gift",
      "hantaran",
      "wedding band",
      "engagement ring",
      "jewellery",
      "jewelry",
    ],
    relatedBrands: ["Elfi Jewellery", "Lumea Atelier", "XI Craft"],
  },
  {
    id: "emcee-entertainment",
    nameZh: "司仪与婚宴娱乐",
    nameEn: "Wedding Emcee & Entertainment",
    keywords: [
      "找司仪",
      "婚宴司仪",
      "婚礼主持",
      "找mc",
      "婚宴表演",
      "婚礼歌手",
      "婚宴乐队",
      "live band",
      "wedding singer",
      "wedding entertainment",
      "sound & lighting",
      "emcee",
    ],
    relatedBrands: [
      "Emcee Jihan",
      "Zack Merican",
      "Emcee Ashraf Aziz",
      "Fine Dreamz Studio / Emcee Evon",
      "Emcee Joshua Lim",
      "Groof Music",
      "Wildflowers Music",
      "I-Dance Studio",
      "Psychoacoustic Sound & Lights",
    ],
  },
  {
    id: "traditional-pastry",
    nameZh: "传统饼家与中式嫁喜礼饼",
    nameEn: "Traditional Chinese Wedding Pastry",
    keywords: [
      "传统饼家",
      "嫁女饼",
      "结婚礼饼",
      "过大礼",
      "传统喜饼",
      "中式饼家",
      "龙凤饼",
      "chinese wedding pastry",
      "chinese wedding biscuits",
      "wedding pastry",
      "guo da li",
    ],
    relatedBrands: [],
  },
  {
    id: "wedding-cake",
    nameZh: "西式蛋糕与婚礼蛋糕",
    nameEn: "Wedding Cake & Western Bakery",
    keywords: [
      "婚礼蛋糕",
      "结婚蛋糕",
      "西式蛋糕",
      "wedding cake",
      "custom cake",
      "designer cake",
    ],
    relatedBrands: ["Ariana Raisya Sugar Art", "Little Cup", "R&N Bake"],
  },
];

export const vendors: Vendor[] = [
  {
    name: "Mystudio Photographer Videographer Livefeed MCP",
    categoryId: "photo-video",
    area: "Sentul, Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "婚礼摄影 / Videography / Live Feed",
    phone: "+60 19-203 6269",
    address:
      "C-25-3A Maxim Citylights, Jalan Sentul Pasar, 51100 Sentul, Kuala Lumpur",
  },
  {
    name: "Digital Kreatif",
    categoryId: "photo-video",
    area: "Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "摄影 / Videography / Video Production / Event Photography",
    phone: "+60 18-974 4985",
    address:
      "Level 7, Menara Arina Uniti, Jalan Raja Muda Abdul Aziz, 50300 Kuala Lumpur",
  },
  {
    name: "Gelly Wee Wedding Gown Sdn Bhd",
    categoryId: "bridal-makeup",
    area: "Mid Valley, Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "Wedding Gown / Bridal",
    phone: "+60 12-666 1348",
    address:
      "Suite 22.01, Level 22, Centerpoint South, Lingkaran Syed Putra, Mid Valley City, 59200 Kuala Lumpur",
  },
  {
    name: "DSV KL / Dressaville KL",
    categoryId: "bridal-makeup",
    area: "Taman Desa, Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "婚纱租赁 / Bridal Gown Rental",
    phone: "+60 16-745 8767",
    address:
      "5-1, Wisma Laxton, Jalan Desa, Off Old Klang Road, Taman Desa, 58100 Kuala Lumpur",
  },
  {
    name: "My Dream Wedding",
    categoryId: "bridal-makeup",
    area: "George Town, Penang",
    regions: ["penang"],
    services: "婚纱 / Bridal",
    phone: "+60 4-297 0950",
    address:
      "163D-3-34, Gurney Paragon, Persiaran Gurney, 10250 George Town, Penang",
  },
  {
    name: "The Qing Banquet & Restaurant",
    categoryId: "venue-banquet",
    area: "Bamboo Hills, Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "Restaurant / Banquet",
    phone: "+60 17-601 6808",
    address:
      "Unit P03, Bamboo Hills, Taman Bamboo, 51200 Kuala Lumpur",
  },
  {
    name: "The Luna Grand Ballroom",
    categoryId: "venue-banquet",
    area: "Pudu, Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "Ballroom / Wedding Venue",
    phone: "+60 10-200 6233",
    address: "Level 7, Wisma IAV, 86 Jalan Pasar, Pudu, 55100 Kuala Lumpur",
  },
  {
    name: "Arabella Event Hall",
    categoryId: "venue-banquet",
    area: "Puncak Alam, Selangor",
    regions: ["selangor"],
    services: "Wedding Venue / Event Hall",
    phone: "+60 13-318 3114",
    address:
      "50, 52, 52A, Jalan Eco Perindustrian 1/2A, Eco Business Park 5, Bandar Puncak Alam, Selangor",
  },
  {
    name: "ONLY LOVE Florist",
    categoryId: "floral-decoration",
    area: "Pandan Indah, Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "Florist",
    phone: "+60 17-507 3844",
    address: "15-G, Jalan Perubatan 3, Pandan Indah, 55100 Kuala Lumpur",
  },
  {
    name: "YY Memories / YY Luminous Florals & Events",
    categoryId: "floral-decoration",
    area: "Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "Florals / Event Decoration",
    phone: "+60 10-310 8392",
    address: "24, Jalan Burung Kuang, Taman Bukit Maluri, 52100 Kuala Lumpur",
  },
  {
    name: "White On White Florist Penang",
    categoryId: "floral-decoration",
    area: "George Town, Penang",
    regions: ["penang"],
    services: "Florist / Wedding Flowers",
    phone: "+60 17-677 5691",
    address: "62, Jalan Dato Keramat, 10150 George Town, Penang",
  },
  {
    name: "Carat Sage",
    categoryId: "jewellery-gifts",
    area: "Damansara Utama, Petaling Jaya, Selangor",
    regions: ["petaling-jaya", "selangor"],
    services: "Engagement Ring / Wedding Bands / Fine Jewellery",
    phone: "+60 3-7731 2735",
    address:
      "60-M, Jalan SS21/58, Damansara Utama, 47400 Petaling Jaya, Selangor",
  },
  {
    name: "TAMAKITO Jewellery",
    categoryId: "jewellery-gifts",
    area: "KLCC, Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "Custom Jewellery / Engagement Ring",
    phone: "+60 10-426 5898",
    address: "Wisma UOA Centre KLCC, 19 Jalan Pinang, 50450 Kuala Lumpur",
  },
  {
    name: "Bombay Jewellery",
    categoryId: "jewellery-gifts",
    area: "Masjid India, Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "Jewellery / Wedding Jewellery",
    address:
      "2009-2011, Malayan Mansion, Jalan Masjid India, 50100 Kuala Lumpur",
  },
  {
    name: "Emcee Voon",
    categoryId: "emcee-entertainment",
    area: "Desa ParkCity, Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "Wedding Emcee / Event Emcee",
    phone: "+60 12-903 7660",
  },
  {
    name: "Emcee Jojo",
    categoryId: "emcee-entertainment",
    area: "Malaysia",
    regions: ["malaysia"],
    services: "Professional Event Emcee",
    phone: "+60 10-291 4088",
  },
  {
    name: "凤凰饼家",
    categoryId: "traditional-pastry",
    area: "Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "传统中式糕点 / Chinese Pastry",
    phone: "+60 3-2072 8888",
    address: "85, Jalan Sultan, City Centre, 50000 Kuala Lumpur",
    note: "礼饼产品、礼盒、数量及过大礼习俗可能因籍贯与家庭传统而不同。",
  },
  {
    name: "My BakeBay",
    categoryId: "wedding-cake",
    area: "Old Klang Road, Kuala Lumpur",
    regions: ["kuala-lumpur"],
    services: "Custom Cake / Designer Cake",
    phone: "+60 16-473 5014",
    address:
      "1-3, Tiara Mutiara Service Apartment, Jalan Puchong, Old Klang Road, 58200 Kuala Lumpur",
  },
  {
    name: "Lalie's Cakes & Cream",
    categoryId: "wedding-cake",
    area: "Puchong, Selangor",
    regions: ["puchong", "selangor"],
    services: "Wedding Cake / Custom Cake",
    phone: "+60 14-313 2726",
    address:
      "No. 50, Lake Vista, Jalan Tasik Prima 4/4, Taman Tasik Prima, 47150 Puchong, Selangor",
    note: "By Preorder Only",
  },
];

const locations = [
  { id: "kuala-lumpur", zh: "吉隆坡", en: "Kuala Lumpur", aliases: ["kuala lumpur", "吉隆坡", "kl", "sentul", "mid valley", "taman desa", "pudu", "bamboo hills", "pandan indah", "old klang road", "klcc", "masjid india", "desa parkcity"] },
  { id: "selangor", zh: "雪兰莪", en: "Selangor", aliases: ["selangor", "雪兰莪", "puncak alam"] },
  { id: "petaling-jaya", zh: "八打灵再也", en: "Petaling Jaya", aliases: ["petaling jaya", "八打灵再也", "pj", "damansara utama"] },
  { id: "puchong", zh: "蒲种", en: "Puchong", aliases: ["puchong", "蒲种"] },
  { id: "cheras", zh: "蕉赖", en: "Cheras", aliases: ["cheras", "蕉赖"] },
  { id: "klang", zh: "巴生", en: "Klang", aliases: ["klang", "巴生"] },
  { id: "shah-alam", zh: "莎阿南", en: "Shah Alam", aliases: ["shah alam", "莎阿南"] },
  { id: "subang-jaya", zh: "梳邦再也", en: "Subang Jaya", aliases: ["subang jaya", "梳邦再也"] },
  { id: "kajang", zh: "加影", en: "Kajang", aliases: ["kajang", "加影"] },
  { id: "putrajaya", zh: "布城", en: "Putrajaya", aliases: ["putrajaya", "布城"] },
  { id: "penang", zh: "槟城", en: "Penang", aliases: ["penang", "槟城", "george town", "butterworth"] },
  { id: "johor", zh: "柔佛", en: "Johor", aliases: ["johor", "柔佛", "johor bahru", "jb"] },
  { id: "melaka", zh: "马六甲", en: "Melaka", aliases: ["melaka", "malacca", "马六甲"] },
  { id: "negeri-sembilan", zh: "森美兰", en: "Negeri Sembilan", aliases: ["negeri sembilan", "森美兰", "seremban"] },
  { id: "perak", zh: "霹雳", en: "Perak", aliases: ["perak", "霹雳", "ipoh", "怡保"] },
  { id: "kedah", zh: "吉打", en: "Kedah", aliases: ["kedah", "吉打", "alor setar"] },
  { id: "pahang", zh: "彭亨", en: "Pahang", aliases: ["pahang", "彭亨", "kuantan", "关丹"] },
  { id: "sabah", zh: "沙巴", en: "Sabah", aliases: ["sabah", "沙巴", "kota kinabalu", "kk"] },
  { id: "sarawak", zh: "砂拉越", en: "Sarawak", aliases: ["sarawak", "砂拉越", "kuching", "古晋"] },
  { id: "kelantan", zh: "吉兰丹", en: "Kelantan", aliases: ["kelantan", "吉兰丹"] },
  { id: "terengganu", zh: "登嘉楼", en: "Terengganu", aliases: ["terengganu", "登嘉楼"] },
  { id: "perlis", zh: "玻璃市", en: "Perlis", aliases: ["perlis", "玻璃市"] },
  { id: "labuan", zh: "纳闽", en: "Labuan", aliases: ["labuan", "纳闽"] },
];

function containsAlias(input: string, alias: string) {
  const normalizedAlias = alias.toLowerCase();
  if (/^[a-z]{2,3}$/.test(normalizedAlias)) {
    const escaped = normalizedAlias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z])${escaped}([^a-z]|$)`).test(input);
  }
  return input.includes(normalizedAlias);
}

function categoryFor(input: string) {
  return categories.find((category) =>
    category.keywords.some((keyword) =>
      containsAlias(input, keyword.toLowerCase()),
    ),
  );
}

function locationFor(input: string) {
  return locations.find((location) =>
    location.aliases.some((alias) => containsAlias(input, alias)),
  );
}

function vendorDetails(vendor: Vendor, language: KnowledgeLanguage) {
  if (language === "en") {
    return [
      vendor.name,
      `Area: ${vendor.area}`,
      `Services: ${vendor.services}`,
      vendor.phone ? `Phone: ${vendor.phone}` : null,
      vendor.address ? `Address: ${vendor.address}` : null,
      vendor.note ? `Note: ${vendor.note}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  return [
    vendor.name,
    `地区：${vendor.area}`,
    `服务：${vendor.services}`,
    vendor.phone ? `电话：${vendor.phone}` : null,
    vendor.address ? `地址：${vendor.address}` : null,
    vendor.note ? `备注：${vendor.note}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

function confirmation(language: KnowledgeLanguage) {
  return language === "en"
    ? "Business status, services, contact details, prices, packages, promotions and availability may change. Please confirm the latest information directly with the vendor before booking, paying or signing an agreement."
    : "商家的营业状态、服务、联络资料、价格、配套、优惠及档期可能改变。正式预约、付款或签约前，请直接向商家确认最新资料。";
}

function relatedBrandAnswer(
  category: VendorCategory,
  brands: string[],
  language: KnowledgeLanguage,
) {
  const brandList = brands.join(", ");
  return language === "en"
    ? `The Knowledge Base lists the following brands under ${category.nameEn}: ${brandList}. Detailed locations and contact information are not currently provided. Please confirm each brand's latest services, prices and availability directly before booking.`
    : `Knowledge Base 在「${category.nameZh}」分类收录了以下相关品牌：${brandList}。目前资料库未提供这些品牌的详细地点与联络资料，预约前请直接确认最新服务、价格及档期。`;
}

export function findVendorAnswer(
  input: string,
  language: KnowledgeLanguage,
): string | null {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return null;

  const exactVendor = vendors.find((vendor) =>
    normalized.includes(vendor.name.toLowerCase()),
  );
  if (exactVendor) {
    return `${vendorDetails(exactVendor, language)}\n\n${confirmation(language)}`;
  }

  for (const category of categories) {
    const relatedBrand = category.relatedBrands.find((brand) =>
      normalized.includes(brand.toLowerCase()),
    );
    if (relatedBrand) {
      return language === "en"
        ? `${relatedBrand} is listed in the Knowledge Base under ${category.nameEn}. Detailed contact information is not currently provided. Please verify its latest location, services, prices and availability directly before booking.`
        : `${relatedBrand} 已收录在 Knowledge Base 的「${category.nameZh}」分类，目前资料库未提供详细联络资料。预约前请直接确认其最新地点、服务、价格及档期。`;
    }
  }

  const category = categoryFor(normalized);
  if (!category) return null;

  if (
    category.id === "bridal-makeup" &&
    ["化妆师", "新娘化妆", "makeup", "mua"].some((keyword) =>
      containsAlias(normalized, keyword),
    )
  ) {
    return relatedBrandAnswer(
      category,
      ["Rynee Tan Make Up Studio", "Xtina Image Studio", "Beauty Haven"],
      language,
    );
  }

  if (
    category.id === "emcee-entertainment" &&
    [
      "婚宴表演",
      "婚礼歌手",
      "婚宴乐队",
      "live band",
      "wedding singer",
      "dj",
      "舞蹈",
      "魔术",
      "sound & lighting",
    ].some((keyword) => containsAlias(normalized, keyword))
  ) {
    return relatedBrandAnswer(
      category,
      [
        "Groof Music",
        "Wildflowers Music",
        "I-Dance Studio",
        "Psychoacoustic Sound & Lights",
      ],
      language,
    );
  }

  if (
    category.id === "jewellery-gifts" &&
    [
      "结婚礼物",
      "婚宴回礼",
      "伴手礼",
      "door gift",
      "wedding favour",
      "wedding favor",
      "wedding gift",
    ].some((keyword) => containsAlias(normalized, keyword))
  ) {
    return language === "en"
      ? "The Knowledge Base does not currently have a verified dedicated wedding-gift or door-gift vendor. I will not invent one. Tell me the gift purpose, quantity, budget and area so the requirement can be recorded for future matching."
      : "目前 Knowledge Base 还没有已确认的婚礼礼物或 Door Gift 专门商家，我不会自行创造商家资料。请告诉我礼物用途、数量、预算及地区，系统可以先整理你的需求，待资料库扩充后再配对。";
  }

  const location = locationFor(normalized);
  if (!location) {
    const available = vendors
      .filter((vendor) => vendor.categoryId === category.id)
      .map((vendor) => vendor.name)
      .join("、");
    const related = category.relatedBrands.slice(0, 6).join("、");
    return language === "en"
      ? `Yes. The Knowledge Base currently includes verified entries for ${category.nameEn}${available ? `, including ${available}` : ""}${related ? `. Other recorded brands include ${related}` : ""}.\n\nPlease tell me your preferred area, wedding date, budget, wedding style and any special requirements so I can narrow the options without inventing information.`
      : `可以。Knowledge Base 已收录「${category.nameZh}」相关资料${available ? `，包括 ${available}` : ""}${related ? `；其他已记录品牌包括 ${related}` : ""}。\n\n请告诉我地区、婚礼日期、预算、婚礼类型或风格及特别要求，我可以根据现有资料进一步筛选，不会自行虚构商家资料。`;
  }

  const matches = vendors.filter(
    (vendor) =>
      vendor.categoryId === category.id &&
      (vendor.regions.includes(location.id) || vendor.regions.includes("malaysia")),
  );

  if (!matches.length) {
    const locationName = language === "en" ? location.en : location.zh;
    const categoryName =
      language === "en" ? category.nameEn : category.nameZh;
    return language === "en"
      ? `The Knowledge Base does not currently have a verified ${categoryName} listing for ${locationName}. I will not invent a vendor. You may provide another nearby area, or check again after the database is expanded.`
      : `目前 Knowledge Base 没有找到「${locationName}」已确认的「${categoryName}」商家，我不会自行创造商家资料。你可以提供邻近地区，或待资料库扩充后再查询。`;
  }

  const heading =
    language === "en"
      ? `The Knowledge Base currently has the following ${category.nameEn} options for ${location.en}:`
      : `目前 Knowledge Base 有以下「${location.zh}」的「${category.nameZh}」商家：`;
  return `${heading}\n\n${matches
    .map((vendor, index) => `${index + 1}. ${vendorDetails(vendor, language)}`)
    .join("\n\n")}\n\n${confirmation(language)}`;
}
