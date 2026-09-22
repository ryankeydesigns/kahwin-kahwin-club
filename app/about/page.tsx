import {
  ArrowRight,
  Bot,
  FileCheck2,
  MapPinned,
  Network,
  SearchCheck,
  Store,
} from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-shell";

const benefits = [
  {
    icon: FileCheck2,
    title: "婚姻注册资讯集中整理",
    description: "将注册流程、所需文件、日期、费用及常见问题集中整理，减少四处寻找资料的时间。",
  },
  {
    icon: Bot,
    title: "AI 智能查询",
    description: "结合 AI 助手与 AI Knowledge Base，让新人可以直接提出问题，更快速找到相关资讯。",
  },
  {
    icon: Store,
    title: "婚礼服务一站式探索",
    description: "从婚纱、化妆、摄影、录影到婚宴、花艺、珠宝、喜饼、司仪与娱乐，让婚礼筹备更加方便。",
  },
  {
    icon: MapPinned,
    title: "专注马来西亚新人",
    description: "以马来西亚婚姻注册及本地婚礼需求为核心，持续整理和扩充实用资讯。",
  },
  {
    icon: SearchCheck,
    title: "简化繁琐的搜寻过程",
    description: "将复杂及分散的内容重新整理，以简单、清楚、容易理解的方式呈现。",
  },
  {
    icon: Network,
    title: "持续成长的婚礼资讯生态",
    description: "未来将连接更多婚礼相关商家、专业人士及服务，让新人拥有更完整的婚姻与婚礼资讯平台。",
  },
];

const team = [
  {
    name: "RYAN",
    role: "Lead\u00a0Developer\u00a0&\u00a0Designer",
    roleZh: "总开发与设计",
    image: "/images/team-ryan.webp",
    description: "负责平台整体规划、网站架构、功能开发、UI/UX 与视觉设计，并统筹平台从概念、技术开发到实际应用的整体方向。",
  },
  {
    name: "SHUN",
    role: "Marketing\u00a0Strategy",
    roleZh: "市场策略",
    image: "/images/team-shun.webp",
    description: "负责平台市场定位、推广策略及发展方向，从市场与使用者需求出发，协助建立更清晰的发展模式。",
  },
  {
    name: "SZE YUAN",
    role: "AI\u00a0Knowledge\u00a0Base",
    roleZh: "AI 知识库",
    image: "/images/team-sze-yuan.webp",
    description: "负责 AI Knowledge Base 的资料整理、分类与内容架构，让 AI 助手能够更有效理解及回应使用者的问题。",
  },
  {
    name: "ALLYSON",
    role: "Art\u00a0&\u00a0Design",
    roleZh: "美术与设计",
    image: "/images/team-allyson.webp",
    description: "负责平台美术方向、视觉元素与设计支援，让整体品牌拥有一致、清晰及友善的视觉体验。",
  },
  {
    name: "YY",
    role: "Web\u00a0Development",
    roleZh: "网站开发",
    image: "/images/team-yy.webp",
    description: "负责网站功能开发、页面制作及技术支援，并持续优化网站功能、稳定性及跨装置使用体验。",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <SiteHeader />
      <PageHero variant="about" eyebrow="ABOUT US" title="让婚姻注册资讯，变得更简单。">
        <p>马来西亚婚姻注册资讯平台</p>
      </PageHero>

      <section className="about-intro section">
        <div className="about-intro-heading">
          <span className="kicker">MALAYSIA MARRIAGE REGISTRATION INFORMATION PLATFORM</span>
          <h2>一个为准备结婚的新人而设的一站式婚姻资讯平台。</h2>
        </div>
        <div className="about-intro-copy">
          <p>从婚姻注册流程、所需文件、日期与常见问题，到婚纱、摄影、婚宴、花艺、珠宝、喜饼、司仪及娱乐等婚礼服务，我们希望把原本分散的资讯重新整理，让新人能够更简单、更快速地找到真正需要的内容。</p>
          <p>结合 AI 助手 × AI Knowledge Base × 婚礼服务资讯，让筹备婚姻这件事，少一点复杂，多一点期待。</p>
          <a className="primary" href="/ai-assistant">询问 AI 助手 <ArrowRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="about-reason section">
        <div className="about-reason-card">
          <span className="kicker">WHY WE BUILT THIS PLATFORM</span>
          <h2>结婚已经有很多事情要准备，找资料不应该再这么复杂。</h2>
          <p>准备注册结婚时，新人往往需要浏览不同网站、询问不同单位，再自行整理各种资料。</p>
          <ul>
            <li>注册需要什么文件？</li>
            <li>费用是多少？</li>
            <li>什么日期可以注册？</li>
            <li>怎样预约？</li>
            <li>哪里可以找到摄影师、婚纱、婚宴或司仪？</li>
          </ul>
          <p>因此，我们建立了马来西亚婚姻注册资讯平台，希望把婚姻注册与婚礼筹备相关资讯集中在一个地方，并透过更清楚的内容架构及 AI 技术，让新人更容易找到答案。</p>
        </div>
      </section>

      <section className="about-benefits section">
        <div className="sectionhead">
          <span>WHY CHOOSE US</span>
          <h2>平台的 6 大好处</h2>
        </div>
        <div className="about-benefits-grid">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="about-benefit-card">
              <div><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-ai section">
        <div className="about-ai-copy">
          <span className="kicker">AI × MARRIAGE INFORMATION</span>
          <h2>不只是找资料，<br />你也可以直接问。</h2>
          <p>平台结合 AI 助手及 AI Knowledge Base，把大量婚姻注册与婚礼相关资料重新整理。使用者不需要逐页寻找内容，只需要直接提出问题。</p>
          <p>我们的目标，是让 AI 成为新人筹备婚姻过程中的资讯助手，协助使用者更快找到相关资料。</p>
          <a className="primary" href="/ai-assistant">开始询问 AI <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="about-ai-questions" aria-label="AI 助手问题示例">
          {["注册结婚需要准备什么文件？", "注册费用是多少？", "有什么日期可以注册？", "怎样预约注册？", "有婚礼摄影师推荐吗？", "哪里可以找婚宴场地？"].map((question) => (
            <div key={question}><Bot aria-hidden="true" /><span>{question}</span></div>
          ))}
        </div>
      </section>

      <section className="about-team section">
        <div className="sectionhead">
          <span>MEET THE TEAM</span>
          <h2>不同专业，一起完成一个平台。</h2>
          <p>马来西亚婚姻注册资讯平台由网站开发、设计、AI、市场策略等不同专业领域的成员共同策划与开发。</p>
          <p>我们相信，一个真正实用的平台，不只是把网站做好看，而是让资讯 × 技术 × 设计 × 使用体验真正结合起来。</p>
        </div>
        <div className="about-team-grid">
          {team.map((member) => (
            <article className="about-team-card" key={member.name}>
              <div className="about-team-photo"><img src={member.image} alt={`${member.name} 团队成员照片`} /></div>
              <div className="about-team-content">
                <span>{member.role}</span>
                <h3>{member.name}</h3>
                <b>{member.roleZh}</b>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-vision section">
        <span className="kicker">OUR VISION</span>
        <h2>我们想做的，不只是一个网站。</h2>
        <p>我们希望建立一个真正对新人有帮助的马来西亚婚姻注册资讯平台。</p>
        <blockquote>“我要怎样注册结婚？”</blockquote>
        <p>到寻找好日子、摄影师、婚纱、婚宴餐厅、花艺、珠宝、喜饼、司仪与婚礼娱乐，我们希望新人在不同筹备阶段，都能够在这里找到适合自己的资讯与服务。</p>
        <p>未来，我们也会持续结合 AI 技术、婚姻资讯及本地婚礼服务生态，让平台随着新人真正的需要不断成长。</p>
      </section>

      <section className="nextcta about-final-cta">
        <span className="kicker">BEGIN HERE</span>
        <h2>准备结婚，从这里开始。</h2>
        <p>不确定从哪里开始？直接告诉我们的 AI 助手你的问题。</p>
        <b>让结婚少一点繁琐，多一点期待。</b>
        <div>
          <a className="primary" href="/ai-assistant">询问 AI 助手</a>
          <a className="secondary" href="/auspicious-date">寻找结婚好日子</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
