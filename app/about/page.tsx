import { Check, Clock, FileText, MapPin } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-shell";
export default function About() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        variant="registration"
        eyebrow="ABOUT THE CENTRE"
        title="关于陈氏书院婚姻注册中心"
      >
        <p>为新人提供温馨、庄重而清楚的婚姻注册体验。</p>
      </PageHero>
      <section className="about section">
        <div className="aboutcopy">
          <span className="kicker">OUR PURPOSE</span>
          <h2>
            让注册这一刻，
            <br />
            成为幸福的开始。
          </h2>
          <p>
            从第一次查询、准备文件、选择日期，到当天完成注册，我们希望让每一对新人都能清楚掌握流程，轻松准备人生重要的一天。
          </p>
          <div className="infocards">
            <div>
              <MapPin />
              <b>注册地点</b>
              <span>陈氏书院婚姻注册中心</span>
            </div>
            <div>
              <Clock />
              <b>注册时段</b>
              <span>请先查询及确认预约</span>
            </div>
            <div>
              <FileText />
              <b>所需文件</b>
              <span>以中心确认资料为准</span>
            </div>
            <div>
              <Check />
              <b>注册服务</b>
              <span>咨询、预约与到场指引</span>
            </div>
          </div>
        </div>
        <div className="timeline">
          {[
            "咨询注册程序",
            "准备所需文件",
            "选择注册日期",
            "确认预约时段",
            "到场完成注册",
            "展开幸福旅程 ♡",
          ].map((x, i) => (
            <div className="step" key={x}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <span>{x}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="nextcta">
        <h2>还有注册问题？</h2>
        <p>让 AI Wedding Assistant 先为您整理重点。</p>
        <a className="primary" href="/ai-assistant">
          开始注册询问 ♡
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
