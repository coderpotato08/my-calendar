import {
  getCurrentMonthDays,
  getDateInfo, getFormatDate,
  getLastMonthRestDays,
  getNextMonthRestDays
} from "./utils"
// 创建星期表头
export function createWeekDaysNode() {
  const oTr = document.createElement("tr");
  oTr.className = "my-calendar-week-head";
  const weekHead = ["一", "二", "三", "四", "五", "六", "日"];
  weekHead.map((item) => {
    const oTd = document.createElement("td");
    oTd.className = "my-calendar-week-head-item";
    oTd.innerHTML = item;
    oTr.appendChild(oTd);
  })
  return oTr;
}
// 创建日期表内容
export function createDateNode(year, month) {
  const lastMonthRestDays = getLastMonthRestDays(year, month);
  const currentMonthDays = getCurrentMonthDays(year, month);
  const nextMonthRestDays = getNextMonthRestDays(year, month);
  const dateTrArr = createDateOtrs(6);

  const lastMonthRestDaysTDs = createRestDaysOtds(lastMonthRestDays, year, month - 1);
  const nextMonthRestDaysTDs = createRestDaysOtds(nextMonthRestDays, year, month + 1);
  const currentMonthDaysTDs = createCurrentDaysOtds(currentMonthDays, year, month);
  const tdArr = [...lastMonthRestDaysTDs, ...currentMonthDaysTDs, ...nextMonthRestDaysTDs];
  let index = 0;
  dateTrArr.forEach((tr) => {
    for(let i = 0; i < 7; i++) {
      tr.appendChild(tdArr[index]);
      index ++;
    }
  })
  return dateTrArr;
}
// 创建7个元素的日期tr
function createDateOtrs (count) {
  const trArr = [];
  for(let i = 0; i < count; i++) {
    const oTr = document.createElement("tr");
    trArr.push(oTr);
  }
  return trArr;
}
// 创建上个月/下个月需要多展示的天数节点td
function createRestDaysOtds (restDays, year, month) {
  const tdArr = []
  restDays.map((item) => {
    const oTd = document.createElement("td");
    oTd.className = "my-calendar-date-day rest";
    oTd.innerHTML = item;
    oTd.setAttribute("data-date", getFormatDate(year, month, item))
    tdArr.push(oTd);
  })
  return tdArr;
}
// 创建当月节点td
function createCurrentDaysOtds (currentDays, year, month) {
  const tdArr = []
  const [
    currentYear,
    currentMonth,
    currentDate,
  ] = getDateInfo();
  for (let i = 1; i <= currentDays; i++) {
    const oTd = document.createElement("td")
    if (currentYear === year && currentMonth === month && currentDate === i) {
      oTd.className = 'my-calendar-date-day current';
    } else {
      oTd.className = 'my-calendar-date-day';
    }
    oTd.innerHTML = i;
    oTd.setAttribute("data-date", getFormatDate(year, month, i))
    tdArr.push(oTd);
  }
  return tdArr;
}
// 创建日期框头部
export function createDateOptionHead (year, month) {
  const dateText = `<span class="year">${year}</span>年<span class="month">${month}</span>月`;
  const oContainer = document.createElement("div"); // 容器
  const oHeadText = document.createElement("div");  // xx年xx月
  const oLastMonthBtn = document.createElement("div"); // 上个月按钮
  const oNextMonthBtn = document.createElement("div"); // 下个月按钮
  const oLastYearBtn = document.createElement("div"); // 上个月按钮
  const oNextYearBtn = document.createElement("div"); // 下个月按钮

  oHeadText.className = "my-calendar-head-title";
  oContainer.className = "my-calendar-option";
  oLastMonthBtn.className = "my-calendar-option-btn last-month";
  oNextMonthBtn.className = "my-calendar-option-btn next-month";
  oLastYearBtn.className = "my-calendar-option-btn last-year";
  oNextYearBtn.className = "my-calendar-option-btn next-year";

  oLastMonthBtn.innerHTML = "<"
  oNextMonthBtn.innerHTML = ">"
  oLastYearBtn.innerHTML = "<<"
  oNextYearBtn.innerHTML = ">>"
  oHeadText.innerHTML = dateText;
  oContainer.appendChild(oLastYearBtn);
  oContainer.appendChild(oLastMonthBtn);
  oContainer.appendChild(oHeadText);
  oContainer.appendChild(oNextMonthBtn);
  oContainer.appendChild(oNextYearBtn);

  return oContainer;
}
