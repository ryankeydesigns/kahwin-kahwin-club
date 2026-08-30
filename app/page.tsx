import {
  CalendarDays,
  ChevronRight,
  Heart,
  Sparkles,
  Store,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="blossom one">♡</div>
        <div className="blossom two">✦</div>
        <div className="eyebrow">陈氏书院婚姻注册中心</div>
        <h1 className="hero-title-single">从「我要注册结婚」开始</h1>
        <p>
          婚姻注册、良辰吉日、婚礼服务，
          <br />
          一个平台帮您准备。
        </p>
        <div className="heroactions">
          <a className="primary" href="/ai-assistant">
            开始我们的幸福旅程 <Heart size={18} />
          </a>
          <a className="secondary" href="/auspicious-date">
            寻找良辰吉日 <CalendarDays size={18} />
          </a>
        </div>
        <div className="journey">
          <span>
            ASK <b>问 AI</b>
          </span>
          <i />
          <span>
            CHOOSE <b>选日子</b>
          </span>
          <i />
          <span>
            MATCH <b>找服务</b>
          </span>
        </div>
      </section>
      <section className="quick section">
        <div className="sectionhead">
          <span>YOUR WEDDING JOURNEY</span>
          <h2>今天想先准备什么？</h2>
          <p>由第一次查询开始，一步一步完成你们的注册与婚礼准备。</p>
        </div>
        <div className="quickgrid">
          {[
            [Heart, "我要注册结婚", "AI 为您解答注册步骤", "/ai-assistant"],
            [Sparkles, "查询注册程序", "了解文件、费用与预约", "/ai-assistant"],
            [
              CalendarDays,
              "寻找良辰吉日",
              "筛选适合你们的日子",
              "/auspicious-date",
            ],
            [Store, "寻找婚礼商家", "配对服务与专属优惠", "/partners"],
          ].map(([Icon, title, desc, href]: any) => (
            <a className="quickcard" href={href} key={title}>
              <Icon />
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <ChevronRight />
            </a>
          ))}
        </div>
      </section>
      <section className="homevision section">
        <span className="kicker">ONE CONNECTED JOURNEY</span>
        <h2>
          问 AI、选日子、找服务，
          <br />
          不再是三个分开的步骤。
        </h2>
        <div className="visionflow">
          <a href="/ai-assistant">
            <b>01</b>
            <h3>问 AI</h3>
            <p>了解怎样注册</p>
          </a>
          <a href="/auspicious-date">
            <b>02</b>
            <h3>选日子</h3>
            <p>寻找适合日期</p>
          </a>
          <a href="/partners">
            <b>03</b>
            <h3>找服务</h3>
            <p>配对婚礼商家</p>
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
