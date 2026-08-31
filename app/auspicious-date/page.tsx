"use client";

import { useEffect, useMemo, useState } from "react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-shell";

type Year = "2026" | "2027";
type AlmanacDate = { day: number; clash: string };

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
const zodiacs = [
  "不提供",
  "鼠",
  "牛",
  "虎",
  "兔",
  "龙",
  "蛇",
  "马",
  "羊",
  "猴",
  "鸡",
  "狗",
  "猪",
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
  const [zodiac, setZodiac] = useState("不提供");
  const dates = useMemo(() => parseDates(year, month), [year, month]);
  const [selected, setSelected] = useState(dates[0].day);
  useEffect(() => setSelected(dates[0].day), [dates]);

  const firstWeekday = new Date(Number(year), month - 1, 1).getDay();
  const daysInMonth = new Date(Number(year), month, 0).getDate();
  const cellCount = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;
  const selectedInfo = dates.find((item) => item.day === selected) ?? dates[0];
  const selectedDate = new Date(Number(year), month - 1, selectedInfo.day);
  const isWeekend = [0, 6].includes(selectedDate.getDay());
  const hasClash = zodiac !== "不提供" && zodiac === selectedInfo.clash;
  const weekday = new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(
    selectedDate,
  );

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
        <p>2026–2027 通胜宜嫁娶参考 × 生肖相冲提示 × 注册时段确认</p>
      </PageHero>
      <section className="date section">
        <div className="datecopy">
          <span className="kicker">传统文化参考</span>
          <h2>
            选择适合你们的
            <br />
            结婚好日子
          </h2>
          <p>
            选择年份、月份和生肖偏好，查看传统通胜标示的宜嫁娶日期，再向注册中心确认开放时段。
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
              新人生肖
              <select
                value={zodiac}
                onChange={(e) => setZodiac(e.target.value)}
              >
                {zodiacs.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
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
            <span>
              <i className="high" /> 通胜宜嫁娶
            </span>
            <span>
              <i className="recommended" /> 周末好日子
            </span>
            <span>
              <i className="limited" /> 注意生肖相冲
            </span>
          </div>
        </div>
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
              const clash =
                info && zodiac !== "不提供" && zodiac === info.clash;
              return (
                <button
                  key={index}
                  disabled={!info}
                  className={`${info ? (weekend ? "high" : "recommended") : ""} ${clash ? "limited clash" : ""} ${selected === day ? "selected" : ""}`}
                  onClick={() => info && setSelected(day)}
                >
                  {day > 0 && day <= daysInMonth ? day : ""}
                  {info && <small>{clash ? "!" : weekend ? "✦" : "♡"}</small>}
                </button>
              );
            })}
          </div>
          <div className={`datechoice ${hasClash ? "has-clash" : ""}`}>
            <span>
              {hasClash
                ? "⚠ 注意生肖相冲"
                : isWeekend
                  ? "✦ 通胜宜嫁娶 · 周末"
                  : "♡ 通胜宜嫁娶"}
            </span>
            <h3>
              {selectedInfo.day} {monthNames[month - 1]} {year}
            </h3>
            <p>
              {weekday} · 避忌生肖：{selectedInfo.clash} · {preference}
            </p>
            <div className="tongsheng-note">
              <b>注册时段</b>
              <span>请向陈氏书院婚姻注册中心查询及确认</span>
            </div>
            <a href="/contact">查询注册时段 ♡</a>
          </div>
          <p className="disclaimer">
            日期根据传统通胜「宜嫁娶」资料整理，仅供民俗文化与一般参考，并非专业命理择日，也不代表任何结果保证。生肖相冲提示不等同个人八字合婚；注册日期及时间以陈氏书院婚姻注册中心最终确认为准。
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
      </section>
      <SiteFooter />
    </main>
  );
}
