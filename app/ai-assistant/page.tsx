"use client";
import { Send, Sparkles, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-shell";
import { findKnowledgeAnswer } from "@/lib/knowledge-base";

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

export default function Assistant() {
  const chatstreamRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState(""),
    [history, setHistory] = useState<{ role: string; text: string }[]>([
      {
        role: "ai",
        text: "您好 ♡ 我是 Kahwin-Kahwin AI Wedding Assistant。我可以帮您了解注册程序、寻找适合日期，以及推荐婚礼服务。",
      },
    ]);

  useEffect(() => {
    const stream = chatstreamRef.current;
    if (!stream) return;
    const frame = window.requestAnimationFrame(() => {
      stream.scrollTo({ top: stream.scrollHeight, behavior: "smooth" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [history.length]);

  function ask(q?: string) {
    const v = (q ?? message).trim();
    if (!v) return;
    const a = findKnowledgeAnswer(v);
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
          <div className="questionchoices">
            <p className="suggestlabel">您也可以这样问：</p>
            <div className="suggestions">
              {qs.map((q) => (
                <button key={q} onClick={() => ask(q)}>
                  {q}
                </button>
              ))}
            </div>
          </div>
          <div
            className="chatstream"
            ref={chatstreamRef}
            role="log"
            aria-live="polite"
            aria-label="AI Wedding Assistant 对话回复"
          >
            {history.map((x, i) => (
              <div key={i} className={`bubble ${x.role}`}>
                {x.text}
              </div>
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
            回复优先依据 Knowledge Base 与已确认的合作商家资料；不确定时不会自行编造价格、日期、商家或优惠。
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
