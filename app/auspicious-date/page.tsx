"use client";

import { useEffect, useMemo, useState } from "react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-shell";

type Year = "2026" | "2027";
type AlmanacDate = { day: number; clash: string };

const clashDetails: Record<string, { dayBranch: string; direction: string }> = {
  马: { dayBranch: "子日", direction: "南" },
  羊: { dayBranch: "丑日", direction: "东" },
  猴: { dayBranch: "寅日", direction: "北" },
  鸡: { dayBranch: "卯日", direction: "西" },
  狗: { dayBranch: "辰日", direction: "南" },
  猪: { dayBranch: "巳日", direction: "东" },
  鼠: { dayBranch: "午日", direction: "北" },
  牛: { dayBranch: "未日", direction: "西" },
  虎: { dayBranch: "申日", direction: "南" },
  兔: { dayBranch: "酉日", direction: "东" },
  龙: { dayBranch: "戌日", direction: "北" },
  蛇: { dayBranch: "亥日", direction: "西" },
};

const rawDates: Record<Year, Record<number, string>> = {
  "2026": {
    1: "5鸡 7猪 8鼠 10虎 17鸡 19猪 20鼠 22虎 28猴 29鸡 31猪",
    2: "7马 10鸡 11狗 14牛 19马 22鸡 25鼠 26牛",
    3: "3马 6鸡 9鼠 11虎 13龙 15马 16羊 18鸡 21鼠 22牛 23虎 28羊",
    4: "2鼠 3牛 10猴 14鼠 22猴 25猪 26鼠",
    5: "4猴 5鸡 6狗 11兔 12龙 14马 18狗 20鼠 22虎 24龙 26马 29鸡 30狗",
    6: "1鼠 2牛 5龙 14牛 15虎 16兔 17龙 23狗 24猪 26牛 29龙",
    7: "2羊 6猪 9虎 10兔 15猴 16鸡 18猪 20牛 22兔 23龙 27猴 28鸡 29狗 30猪",
    8: "10狗 12鼠 18马 21鸡 23猪 24鼠 26虎 28龙 30马",
    9: "3狗 4猪 5鼠 6牛 7虎 9龙 12羊 15狗 17鼠 19虎 21龙 27狗 28猪",
    10: "3龙 6羊 10猪 11鼠 12牛 13虎 14兔 20鸡 23鼠 25虎 26兔",
    11: "1鸡 4鼠 6虎 10马 12猴 13鸡 16鼠 19兔 20龙 22马 25鸡 26狗",
    12: "4马 17羊 21猪 24虎",
  },
  "2027": {
    1: "1狗 2猪 5虎 12鸡 14猪 15鼠 17虎 23猴 24鸡 26猪 31龙",
    2: "5鸡 6狗 9牛 14马 17鸡 20鼠 21牛 26马",
    3: "4鼠 5牛 6虎 8龙 10马 11羊 13鸡 16鼠 17牛 18虎 23羊 28鼠 29牛",
    4: "1龙 3马 5猴 9鼠 17猴 20猪 21鼠 29猴",
    5: "3鼠 6兔 7龙 9马 13狗 15鼠 17虎 19龙 21马 24鸡 25狗 27鼠 28牛 31龙",
    6: "5鸡 9牛 10虎 11兔 12龙 18狗 19猪 21牛 24龙 27羊",
    7: "1猪 3牛 4虎 5兔 10猴 11鸡 13猪 15牛 17兔 18龙 22猴 23鸡 24狗 25猪",
    8: "3猴 6猪 13马 16鸡 18猪 19鼠 21虎 23龙 25马 29狗 30猪 31鼠",
    9: "1牛 2虎 4龙 6马 10狗 12鼠 14虎 16龙 22狗 23猪 28龙",
    10: "1羊 5猪 6鼠 8虎 9兔 15鸡 18鼠 20虎 21兔 27鸡 30鼠",
    11: "1虎 3龙 7猴 8鸡 11鼠 14兔 15龙 17马 20鸡 21狗 29马",
    12: "3狗 5鼠 12羊 16猪 19虎 27狗 28猪",
  },
};

const monthNames = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
];
function parseDates(year: Year, month: number): AlmanacDate[] {
  return rawDates[year][month]
    .split(" ")
    .map((item) => ({
      day: Number(item.match(/\d+/)?.[0]),
      clash: item.replace(/\d+/g, ""),
    }));
}

export default function DatePage() {
  const [year, setYear] = useState<Year>("2026");
  const [month, setMonth] = useState(10);
  const [preference, setPreference] = useState("无特别偏好");
  const dates = useMemo(() => parseDates(year, month), [year, month]);
  const [selected, setSelected] = useState(dates[0].day);
  useEffect(() => setSelected(dates[0].day), [dates]);

  const firstWeekday = new Date(Number(year), month - 1, 1).getDay();
  const daysInMonth = new Date(Number(year), month, 0).getDate();
  const cellCount = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;
  const selectedInfo = dates.find((item) => item.day === selected) ?? dates[0];
  const selectedDate = new Date(Number(year), month - 1, selectedInfo.day);
  const isWeekend = [0, 6].includes(selectedDate.getDay());
  const weekday = new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(
    selectedDate,
  );
  const lunarDate = new Intl.DateTimeFormat("zh-CN-u-ca-chinese", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(selectedDate);
  const clashDetail = clashDetails[selectedInfo.clash];

  function previousMonth() {
    if (month === 1) {
      if (year === "2027") setYear("2026");
      setMonth(12);
    } else setMonth(month - 1);
  }
  function nextMonth() {
    if (month === 12) {
      if (year === "2026") setYear("2027");
      setMonth(1);
    } else setMonth(month + 1);
  }

  return (
    <main>
      <SiteHeader />
      <PageHero
        variant="details"
        eyebrow="TONG SHENG WEDDING DATE GUIDE"
        title="寻找结婚好日子 ♡"
      >
        <p>2026–2027 通胜宜嫁娶参考 × 当天通胜详情 × 注册时段确认</p>
      </PageHero>
      <section className="date section">
        <div className="datecopy">
          <span className="kicker">传统文化参考</span>
          <h2>选择适合你们的结婚好日子</h2>
          <p>
            选择年份、月份和日期偏好，查看传统通胜标示的宜嫁娶日期，再向注册中心确认开放时段。
          </p>
          <div className="selectors">
            <label>
              计划年份
              <select
                value={year}
                onChange={(e) => setYear(e.target.value as Year)}
              >
                <option>2026</option>
                <option>2027</option>
              </select>
            </label>
            <label>
              计划月份
              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
              >
                {monthNames.map((name, index) => (
                  <option value={index + 1} key={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="selectors">
            <label>
              日期偏好
              <select
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
              >
                <option>偏好周末</option>
                <option>偏好平日</option>
                <option>无特别偏好</option>
              </select>
            </label>
          </div>
          <div className="legend">
            <b>颜色说明（不是选择按钮）</b>
            <span>
              <i className="high" /> 通胜宜嫁娶
            </span>
            <span>
              <i className="recommended" /> 周末好日子
            </span>
            <p>请在下方月历点击带有 ♡ 或 ✦ 的粉红色日期。</p>
          </div>
        </div>
        <div className="dateworkspace">
          <div className="calendar">
          <div className="calhead">
            <button aria-label="上一个月" onClick={previousMonth}>
              ‹
            </button>
            <b>
              {monthNames[month - 1]} {year}
            </b>
            <button aria-label="下一个月" onClick={nextMonth}>
              ›
            </button>
          </div>
          <div className="week">
            {["日", "一", "二", "三", "四", "五", "六"].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <div className="days">
            {Array.from({ length: cellCount }, (_, index) => {
              const day = index - firstWeekday + 1;
              const info = dates.find((item) => item.day === day);
              const weekend =
                day > 0 &&
                day <= daysInMonth &&
                [0, 6].includes(
                  new Date(Number(year), month - 1, day).getDay(),
                );
              return (
                <button
                  key={index}
                  disabled={!info}
                  aria-label={
                    info
                      ? `${year}年${month}月${day}日，可选择查看通胜详情`
                      : day > 0 && day <= daysInMonth
                        ? `${year}年${month}月${day}日，未列为通胜宜嫁娶日期`
                        : undefined
                  }
                  className={`${info ? (weekend ? "high" : "recommended") : ""} ${selected === day ? "selected" : ""}`}
                  onClick={() => info && setSelected(day)}
                >
                  {day > 0 && day <= daysInMonth ? day : ""}
                  {info && <small>{weekend ? "✦" : "♡"}</small>}
                </button>
              );
            })}
          </div>
        </div>
        <div className="dateinfo">
          <div className="datechoice">
            <span>
              {isWeekend ? "✦ 通胜宜嫁娶 · 周末" : "♡ 通胜宜嫁娶"}
            </span>
            <h3>
              {selectedInfo.day} {monthNames[month - 1]} {year}
            </h3>
            <p>
              {weekday} · 冲生肖：{selectedInfo.clash} · {preference}
            </p>
            <div className="tongsheng-note">
              <b>注册时段</b>
              <span>请向陈氏书院婚姻注册中心查询及确认</span>
            </div>
            <section className="almanac-detail" aria-live="polite">
              <div className="almanac-detail-head">
                <span>当天通胜详情</span>
                <small>选择其他日期，资料会即时更新</small>
              </div>
              <div className="almanac-facts">
                <article>
                  <span>公历日期</span>
                  <b>
                    {year}年{month}月{selectedInfo.day}日
                  </b>
                </article>
                <article>
                  <span>农历日期</span>
                  <b>{lunarDate}</b>
                </article>
                <article>
                  <span>星期</span>
                  <b>{weekday}</b>
                </article>
                <article>
                  <span>日支</span>
                  <b>{clashDetail.dayBranch}</b>
                </article>
                <article>
                  <span>生肖冲煞</span>
                  <b>
                    <span>冲</span> {selectedInfo.clash} · <span>煞</span>{" "}
                    {clashDetail.direction}
                  </b>
                </article>
                <article>
                  <span>日期属性</span>
                  <b>{isWeekend ? "周末好日子" : "平日好日子"}</b>
                </article>
              </div>
              <div className="almanac-guidance">
                <div className="auspicious">
                  <span>宜</span>
                  <div>
                    <b>嫁娶</b>
                    <p>传统通胜标示为适合结婚、举行婚礼的参考日期。</p>
                  </div>
                </div>
                <div className="caution">
                  <span>冲</span>
                  <div>
                    <b>生肖 {selectedInfo.clash}</b>
                    <p>
                      <span>当天通胜显示</span> <span>冲</span>
                      {selectedInfo.clash}、<span>煞</span>
                      {clashDetail.direction}，
                      <span>相关生肖可自行考虑或咨询专业择日人士。</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="almanac-extra">
                <p>
                  <b>忌与吉时</b>
                  <span>
                    本资料源只核对「宜嫁娶」及生肖冲煞；其他宜忌、吉神凶神、彭祖百忌和吉时，应查阅当天完整通胜或由专业择日人士进一步确认。
                  </span>
                </p>
                <p>
                  <b>注册提醒</b>
                  <span>
                    通胜好日子不等同注册中心开放日期，请另外查询陈氏书院婚姻注册中心的实际时段。
                  </span>
                </p>
              </div>
            </section>
            <a href="/contact">查询注册时段 ♡</a>
          </div>
          <p className="disclaimer">
            日期根据传统通胜「宜嫁娶」资料整理，仅供民俗文化与一般参考，并非专业命理择日，也不代表任何结果保证。冲煞资料不等同个人八字合婚；注册日期及时间以陈氏书院婚姻注册中心最终确认为准。
          </p>
          <p className="date-source">
            参考资料：
            <a
              href="https://hongkong.regenthotels.com/zh-hans/auspicious-wedding-dates-2026-2027-plan-your-perfect-hong-kong-celebration/"
              target="_blank"
              rel="noreferrer"
            >
              2026–2027 传统通胜结婚日期整理
            </a>{" "}
            · 最后核对：2026年8月31日
          </p>
        </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
