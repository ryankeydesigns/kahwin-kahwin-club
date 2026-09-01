"use client";

import { useEffect, useMemo, useState } from "react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-shell";

type Year = "2026" | "2027" | "2028" | "2029";
type AlmanacDate = { day: number; clash: string; lunar?: string };

const availableYears: Year[] = ["2026", "2027", "2028", "2029"];

const zodiacOptions = [
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
] as const;
type Zodiac = (typeof zodiacOptions)[number] | "";

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
  "2028": {
    1: "1鼠[腊月初二] 3虎[腊月初四] 6蛇[腊月初七] 7马[腊月初八] 11狗[腊月十二] 13鼠[腊月十四] 15虎[腊月十六] 17龙[腊月十八] 19马[腊月二十] 23狗[腊月廿四] 25鼠[腊月廿六] 28兔[腊月廿九]",
    2: "1马[正月初三] 2羊[正月初四] 6猪[正月初八] 7鼠[正月初九] 9虎[正月十一] 11龙[正月十三] 12蛇[正月十四] 16鸡[正月十八] 18猪[正月二十] 19鼠[正月廿一] 21虎[正月廿三] 26羊[正月廿八]",
    3: "1狗[二月初一] 3鼠[二月初三] 4牛[二月初四] 8蛇[二月初八] 11猴[二月十一] 12鸡[二月十二] 14猪[二月十四] 18兔[二月十八] 19龙[二月十九] 21马[二月廿一] 25狗[二月廿五] 29虎[二月廿九]",
    4: "1龙[三月初一] 4羊[三月初四] 6鸡[三月初六] 7狗[三月初七] 11虎[三月十一] 14蛇[三月十四] 15马[三月十五] 17猴[三月十七] 19狗[三月十九] 23虎[三月廿三] 26蛇[三月廿六] 28羊[三月廿八]",
    5: "2猪[四月初二] 3鼠[四月初三] 6兔[四月初六] 8蛇[四月初八] 10羊[四月十日] 13狗[四月十三] 16牛[四月十六] 18兔[四月十八] 19龙[四月十九] 22羊[四月廿二] 26猪[四月廿六] 28牛[四月廿八]",
    6: "1龙[五月初一] 3马[五月初三] 6鸡[五月初六] 9鼠[五月初九] 11虎[五月十一] 12兔[五月十二] 14蛇[五月十四] 18鸡[五月十八] 21鼠[五月廿一] 23虎[五月廿三] 26蛇[五月廿六] 28羊[五月廿八]",
    7: "1狗[閏五月初一] 3鼠[閏五月初三] 6兔[閏五月初六] 8蛇[閏五月初八] 11猴[閏五月十一] 14猪[閏五月十四] 16牛[閏五月十六] 18兔[閏五月十八] 21马[閏五月廿一] 24鸡[閏五月廿四] 26猪[閏五月廿六] 28牛[閏五月廿八]",
    8: "1蛇[六月初二] 3羊[六月初四] 6狗[六月初七] 8鼠[六月九日] 10虎[六月十一] 13蛇[六月十四] 16猴[六月十七] 17鸡[六月十八] 19猪[六月二十] 22虎[六月廿三] 25蛇[六月廿六] 27羊[六月廿八]",
    9: "1鼠[七月初一] 3虎[七月初三] 6蛇[七月初六] 8羊[七月初八] 11狗[七月十一] 13鼠[七月十三] 15虎[七月十五] 18蛇[七月十八] 22鸡[七月廿二] 24猪[七月廿四] 26牛[七月廿六] 29龙[七月廿九]",
    10: "1马[八月初一] 4鸡[八月初四] 6猪[八月初六] 8牛[八月初八] 11龙[八月十一] 14羊[八月十四] 15猴[八月十五] 18猪[八月十八] 21虎[八月廿一] 23龙[八月廿三] 26羊[八月廿六] 29狗[八月廿九]",
    11: "1鼠[九月初一] 3虎[九月初三] 6蛇[九月初六] 9猴[九月初九] 12猪[九月十二] 13鼠[九月十三] 15虎[九月十五] 18蛇[九月十八] 21猴[九月廿一] 24猪[九月廿四] 27虎[九月廿七] 29龙[九月廿九]",
    12: "2羊[十月初二] 4鸡[十月初四] 6猪[十月初六] 9虎[十月初九] 12蛇[十月十二] 13马[十月十三] 16鸡[十月十六] 19鼠[十月十九] 21虎[十月廿一] 24蛇[十月廿四] 26羊[十月廿六] 29狗[十月廿九]",
  },
  "2029": {
    1: "1鼠[十一月初二] 2牛[十一月初三] 5龙[十一月初六] 9猴[十一月十日] 12猪[十一月十三] 14牛[十一月十五] 16兔[十一月十七] 18蛇[十一月十九] 20羊[十一月廿一] 24猪[十一月廿五] 26牛[十一月廿七] 28兔[十一月廿九]",
    2: "1马[腊月初二] 2羊[腊月初三] 5狗[腊月初六] 7鼠[腊月初八] 10兔[腊月十一] 12蛇[腊月十三] 14羊[腊月十五] 17狗[腊月十八] 19鼠[腊月二十] 21虎[腊月廿二] 24蛇[腊月廿五] 26羊[腊月廿七]",
    3: "2鼠[正月初一] 5兔[正月初四] 6龙[正月初五] 9羊[正月初八] 12狗[正月十一] 14鼠[正月十三] 16虎[正月十五] 19蛇[正月十八] 21羊[正月二十] 23鸡[正月廿二] 26鼠[正月廿五] 29兔[正月廿八]",
    4: "1马[二月初一] 2羊[二月初二] 5狗[二月初五] 7鼠[二月初七] 10兔[二月十日] 13马[二月十三] 14羊[二月十四] 16鸡[二月十六] 19鼠[二月十九] 21虎[二月廿一] 24蛇[二月廿四] 27猴[二月廿七]",
    5: "1鼠[三月初一] 3虎[三月初三] 6蛇[三月初六] 8羊[三月初八] 11狗[三月十一] 12猪[三月十二] 15虎[三月十五] 17龙[三月十七] 19马[三月十九] 22鸡[三月廿二] 25鼠[三月廿五] 29龙[三月廿九]",
    6: "1马[四月初一] 4鸡[四月初四] 6猪[四月初六] 8牛[四月初八] 11龙[四月十一] 14羊[四月十四] 15猴[四月十五] 17狗[四月十七] 19鼠[四月十九] 22兔[四月廿二] 26羊[四月廿六] 29狗[四月廿九]",
    7: "1鼠[五月初一] 4兔[五月初四] 7马[五月初七] 8羊[五月初八] 11狗[五月十一] 13鼠[五月十三] 15虎[五月十五] 18蛇[五月十八] 20羊[五月二十] 22鸡[五月廿二] 25鼠[五月廿五] 28兔[五月廿八]",
    8: "1马[六月初二] 2羊[六月初三] 5狗[六月初六] 7鼠[六月初八] 10兔[六月十一] 12蛇[六月十三] 13马[六月十四] 15猴[六月十六] 18猪[六月十九] 21虎[六月廿二] 24蛇[六月廿五] 27猴[六月廿八]",
    9: "1鼠[七月初一] 3虎[七月初三] 6蛇[七月初六] 7马[七月初七] 10鸡[七月十日] 12猪[七月十二] 14牛[七月十四] 18蛇[七月十八] 19马[七月十九] 22猴[七月廿二] 25鼠[七月廿五] 28兔[七月廿八]",
    10: "2羊[八月初二] 4鸡[八月初四] 6猪[八月初六] 10兔[八月十日] 12蛇[八月十二] 13马[八月十三] 16猴[八月十六] 19鼠[八月十九] 21虎[八月廿一] 24蛇[八月廿四] 27猴[八月廿七] 29狗[八月廿九]",
    11: "1鼠[九月初二] 3虎[九月初四] 6蛇[九月初七] 7马[九月初八] 10猴[九月十一] 13猪[九月十四] 15牛[九月十六] 17兔[九月十八] 18龙[九月十九] 21羊[九月廿二] 24狗[九月廿五] 27牛[九月廿八]",
    12: "1龙[十月初一] 3马[十月初三] 6猴[十月初六] 8狗[十月初八] 11牛[十月十一] 13兔[十月十三] 14龙[十月十四] 16马[十月十六] 20狗[十月二十] 23牛[十月廿三] 26龙[十月廿六] 29羊[十月廿九]",
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
    .map((item) => {
      const match = item.match(/^(\d+)([^\[\]]+)(?:\[(.+)\])?$/);
      if (!match) throw new Error(`Invalid almanac date: ${item}`);
      return {
        day: Number(match[1]),
        clash: match[2],
        lunar: match[3],
      };
    });
}

export default function DatePage() {
  const [year, setYear] = useState<Year>("2026");
  const [month, setMonth] = useState(10);
  const [zodiacOne, setZodiacOne] = useState<Zodiac>("");
  const [zodiacTwo, setZodiacTwo] = useState<Zodiac>("");
  const dates = useMemo(() => parseDates(year, month), [year, month]);
  const filteredDates = useMemo(
    () =>
      dates.filter(
        (item) => item.clash !== zodiacOne && item.clash !== zodiacTwo,
      ),
    [dates, zodiacOne, zodiacTwo],
  );
  const [selected, setSelected] = useState(dates[0].day);
  useEffect(() => {
    setSelected((current) =>
      filteredDates.some((item) => item.day === current)
        ? current
        : filteredDates[0]?.day ?? dates[0].day,
    );
  }, [dates, filteredDates]);

  const firstWeekday = new Date(Number(year), month - 1, 1).getDay();
  const daysInMonth = new Date(Number(year), month, 0).getDate();
  const cellCount = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;
  const selectedInfo =
    filteredDates.find((item) => item.day === selected) ??
    filteredDates[0] ??
    dates[0];
  const selectedDate = new Date(Number(year), month - 1, selectedInfo.day);
  const isWeekend = [0, 6].includes(selectedDate.getDay());
  const weekday = new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(
    selectedDate,
  );
  const lunarDate =
    selectedInfo.lunar ??
    new Intl.DateTimeFormat("zh-CN-u-ca-chinese", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(selectedDate);
  const clashDetail = clashDetails[selectedInfo.clash];

  function previousMonth() {
    const index = availableYears.indexOf(year) * 12 + month - 1;
    if (index <= 0) return;
    const target = index - 1;
    setYear(availableYears[Math.floor(target / 12)]);
    setMonth((target % 12) + 1);
  }
  function nextMonth() {
    const index = availableYears.indexOf(year) * 12 + month - 1;
    if (index >= availableYears.length * 12 - 1) return;
    const target = index + 1;
    setYear(availableYears[Math.floor(target / 12)]);
    setMonth((target % 12) + 1);
  }

  return (
    <main>
      <SiteHeader />
      <PageHero
        variant="details"
        eyebrow="TONG SHENG WEDDING DATE GUIDE"
        title="寻找结婚好日子 ♡"
      >
        <p>2026–2029 通胜宜嫁娶参考 × 当天通胜详情 × 注册时段确认</p>
      </PageHero>
      <section className="date section">
        <div className="datecopy">
          <span className="kicker">传统文化参考</span>
          <h2>选择适合你们的结婚好日子</h2>
          <p>
            选择年份、月份和两位新人生肖，系统会避开相冲日期，再向注册中心确认开放时段。
          </p>
          <div className="selectors date-filters">
            <label>
              计划年份
              <select
                value={year}
                onChange={(e) => setYear(e.target.value as Year)}
              >
                {availableYears.map((availableYear) => (
                  <option key={availableYear}>{availableYear}</option>
                ))}
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
            <fieldset className="zodiac-pair">
              <legend>新人生肖</legend>
              <div>
                <select
                  aria-label="新人一生肖"
                  value={zodiacOne}
                  onChange={(e) => setZodiacOne(e.target.value as Zodiac)}
                >
                  <option value="">新人一</option>
                  {zodiacOptions.map((zodiac) => (
                    <option
                      value={zodiac}
                      key={zodiac}
                      disabled={zodiac === zodiacTwo}
                    >
                      {zodiac}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="新人二生肖"
                  value={zodiacTwo}
                  onChange={(e) => setZodiacTwo(e.target.value as Zodiac)}
                >
                  <option value="">新人二</option>
                  {zodiacOptions.map((zodiac) => (
                    <option
                      value={zodiac}
                      key={zodiac}
                      disabled={zodiac === zodiacOne}
                    >
                      {zodiac}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>
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
                const originalInfo = dates.find((item) => item.day === day);
                const info = filteredDates.find((item) => item.day === day);
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
                        : originalInfo
                          ? `${year}年${month}月${day}日，与新人生肖相冲，已避开`
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
            <div className="legend">
              <b>颜色说明</b>
              <span>
                <i className="high" /> 通胜宜嫁娶
              </span>
              <span>
                <i className="recommended" /> 周末好日子
              </span>
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
              {weekday} · 冲生肖：{selectedInfo.clash}
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
            参考资料：2026–2029《结婚吉日一览》（用户 RyanKey 提供资料）{" "}
            · 最后核对：2026年8月31日
          </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
