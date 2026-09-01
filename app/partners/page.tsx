import {
  Camera,
  Flower2,
  Gem,
  Mic2,
  Palette,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-shell";
const cats = [
  [Camera, "摄影与录影", "service-photo-1"],
  [Palette, "婚纱与化妆", "service-photo-2"],
  [UtensilsCrossed, "餐厅与婚宴", "service-photo-3"],
  [Flower2, "花艺与布置", "service-photo-4"],
  [Gem, "珠宝与婚礼礼物", "service-photo-5"],
  [Mic2, "司仪与娱乐", "service-photo-6"],
];
export default function Partners() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        variant="partners"
        eyebrow="WEDDING PARTNER NETWORK"
        title="让准备结婚的新人找到您"
      >
        <p>加入 Kahwin-Kahwin Wedding Partner Network</p>
      </PageHero>
      <section className="partnerintro section">
        <div>
          <span className="kicker">AI-POWERED MATCHING</span>
          <h2>
            不只是展示商家，
            <br />
            而是让 AI 帮您配对顾客。
          </h2>
        </div>
        <p>
          合作商家资料会进入 AI Wedding Assistant Knowledge
          Base。当新人询问相关服务、预算与地区时，系统可以推荐符合条件的商家、配套及
          Kahwin-Kahwin 专属优惠。
        </p>
      </section>
      <section className="categories section">
        <div className="sectionhead">
          <span>WEDDING SERVICES</span>
          <h2>合作商家类别</h2>
        </div>
        <div className="catgrid">
          {cats.map(([Icon, n, photoClass]: any) => (
            <div className="service-category" key={n}>
              <div
                className={`service-photo ${photoClass}`}
                role="img"
                aria-label={`${n}婚礼服务图片`}
              />
              <div className="service-category-copy">
                <span className="service-category-icon">
                  <Icon />
                </span>
                <b>{n}</b>
                <span>AI 可按预算与日期推荐</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="partners section">
        <div className="sectionhead">
          <span>PARTNER LEVEL</span>
          <h2>选择适合您的合作方式</h2>
        </div>
        <div className="levels">
          {[
            ["BASIC", "建立品牌资料", "商家页面 · 服务介绍"],
            ["FEATURED", "获得更多曝光", "推荐标记 · 优惠展示"],
            ["PREMIUM", "AI 优先推荐", "首页精选 · 潜客分析"],
          ].map((x, i) => (
            <article className={i === 2 ? "premium" : ""} key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
              <a href="/contact">申请成为伙伴</a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
