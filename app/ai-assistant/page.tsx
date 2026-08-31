"use client";
import { Send, Sparkles, Trash2 } from "lucide-react";
import { useState } from "react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-shell";

const qs = [
  "有什么专属优惠？",
  "注册需要什么文件？",
  "有摄影师推荐吗？",
  "注册费用是多少？",
  "有什么日期可以注册？",
  "怎样预约注册？",
  "寻找婚宴摄影与录影",
  "婚纱与化妆介绍",
  "餐厅婚宴",
  "花艺与布置场地",
  "珠宝与金饰",
  "婚礼礼物",
  "寻婚宴找司仪",
  "婚宴当晚娱乐与表演",
];

const demoReplies: Record<string, string> = {
  "有什么专属优惠？":
    "这是 Demo 回复 ♡ 正式版本可根据合作商家提供的优惠、有效期和新人需求进行推荐。目前请先联系中心确认最新优惠。",
  "注册需要什么文件？":
    "这是 Demo 回复：一般会先确认双方身份证明、照片及相关申请文件；实际清单请以注册中心最新要求为准。",
  "有摄影师推荐吗？":
    "这是 Demo 回复 ♡ 可以按婚礼日期、地区、风格和预算示范筛选摄影师；目前尚未连接真实商家资料。",
  "注册费用是多少？":
    "这是 Demo 回复：费用会按注册安排及服务内容而不同，正式金额请向注册中心查询确认。",
  "有什么日期可以注册？":
    "这是 Demo 回复：可以前往「结婚好日子」查看通胜参考日期，再向注册中心确认可预约时段。",
  "怎样预约注册？":
    "这是 Demo 回复：可先准备双方基本资料、希望日期与联络方式，再联系注册中心确认预约。",
  "寻找婚宴摄影与录影":
    "这是 Demo 回复 ♡ 可按日期、地区、预算和拍摄风格筛选婚宴摄影与录影团队；目前为测试示范。",
  "婚纱与化妆介绍":
    "这是 Demo 回复 ♡ 可示范介绍婚纱款式、新娘化妆、试妆及造型配套；目前未连接真实商家资料。",
  "餐厅婚宴":
    "这是 Demo 回复：可按地区、桌数、预算和菜式示范筛选婚宴餐厅；实际档期与价格需向商家确认。",
  "花艺与布置场地":
    "这是 Demo 回复 ♡ 可按婚礼主题、色系、场地和预算示范推荐花艺与布置服务。",
  "珠宝与金饰":
    "这是 Demo 回复：可示范介绍结婚戒指、龙凤镯及婚嫁金饰类别；价格与库存需向商家确认。",
  "婚礼礼物":
    "这是 Demo 回复 ♡ 可按宾客人数、预算和婚礼主题示范推荐回礼、喜饼及定制婚礼礼物。",
  "寻婚宴找司仪":
    "这是 Demo 回复：可按语言、主持风格、婚宴日期和地点示范寻找合适司仪；目前为测试回复。",
  "婚宴当晚娱乐与表演":
    "这是 Demo 回复 ♡ 可示范推荐现场乐队、歌手、舞蹈、魔术及互动表演；实际演出内容与报价需向商家确认。",
};

export default function Assistant() {
  const [message, setMessage] = useState(""),
    [history, setHistory] = useState<{ role: string; text: string }[]>([
      {
        role: "ai",
        text: "您好 ♡ 我是 Kahwin-Kahwin AI Wedding Assistant。我可以帮您了解注册程序、寻找适合日期，以及推荐婚礼服务。",
      },
    ]);
  function ask(q?: string) {
    const v = (q ?? message).trim();
    if (!v) return;
    let a = demoReplies[v];
    if (!a && v.includes("日期"))
      a =
        "您可以进入结婚好日子页面，按年份、月份与两位新人生肖筛选。系统只使用经过核对的通胜参考资料。";
    if (
      !a &&
      (v.includes("摄影") || v.includes("婚纱") || v.includes("餐厅"))
    )
      a =
        "可以 ♡ 请告诉我预算、日期及地区，系统将从合作商家资料中筛选适合的服务和专属优惠。";
    if (!a)
      a =
        "这项资料目前还没有在系统资料库中，建议直接联系陈氏书院婚姻注册中心确认。";
    setHistory((h) => [
      ...h,
      { role: "user", text: v },
      { role: "ai", text: a },
    ]);
    setMessage("");
  }
  return (
    <main>
      <SiteHeader />
      <PageHero
        variant="registration"
        eyebrow="ROMANTIC WEDDING AI"
        title="AI Wedding Assistant"
      >
        <p>有什么关于注册结婚想了解？</p>
      </PageHero>
      <section className="assistant assistantpage section">
        <div className="chatwrap">
          <div className="chatintro">
            <div className="avatar">
              <Sparkles />
            </div>
            <div>
              <b>Kahwin-Kahwin AI</b>
              <small>在线 · 随时为您解答</small>
            </div>
            <button
              className="clearbtn"
              onClick={() => setHistory(history.slice(0, 1))}
            >
              <Trash2 size={15} /> 清除对话
            </button>
          </div>
          <div className="chatstream">
            {history.map((x, i) => (
              <div key={i} className={`bubble ${x.role}`}>
                {x.text}
              </div>
            ))}
          </div>
          <p className="suggestlabel">您也可以这样问：</p>
          <div className="suggestions">
            {qs.map((q) => (
              <button key={q} onClick={() => ask(q)}>
                {q}
              </button>
            ))}
          </div>
          <div className="inputbar">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ask()}
              placeholder="问问我们的 Wedding Assistant…"
            />
            <button aria-label="发送" onClick={() => ask()}>
              <Send size={18} />
            </button>
          </div>
          <p className="safety">
            资料只依据注册中心与合作商家确认的内容，不会自行编造费用、条例或优惠。
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
