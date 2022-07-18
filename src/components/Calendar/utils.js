function getFirstWeekDay (year, month) {
  const date = new Date(year, month - 1, 1);
  return date.getDay() === 0 ? 7 : date.getDay();
}

function getCurrentMonthDays (year, month) {
  const date = new Date(year, month, 0);
  return date.getDate();
}

function getLastMonthLastDay (year, month) {
  return getCurrentMonthDays(year, month);
}

function getLastWeekDay (year, month) {
  const date = new Date(year, month, 0);
  return date.getDay();
}

function getLastMonthRestDays (year, month) {
  let firstWeekDay = getFirstWeekDay(year, month);
  let lastMonthLastDay = getLastMonthLastDay(year, month - 1);
  const restDays = [];
  while (restDays.length + 1 < firstWeekDay) {
    restDays.unshift(lastMonthLastDay--);
  }
  return restDays;
}

function getNextMonthRestDays (year, month) {
  const lastMonthRestDaysCount = getFirstWeekDay(year, month) - 1;
  const currentMonthDaysCount = getCurrentMonthDays(year, month);
  const nextMonthRestDaysCount = 42 - lastMonthRestDaysCount - currentMonthDaysCount
  const restDays = [];
  for (let i = 1; i <= nextMonthRestDaysCount; i++) {
    restDays.push(i);
  }
  return restDays;
}

function getDateInfo (timeStamp) {
  const date = timeStamp ? new Date(timeStamp) : new Date();
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}

function getFormatDate (...arg) {
  return `${arg[0]}-${arg[1] < 10 ? "0" + (arg[1]) : arg[1]}-${arg[2] < 10 ? "0" + (arg[2]) : arg[2]}`
}

function getNextYearAndMonth (year, month) { // 获取下个月的年月
  const numYear = Number(year), numMonth = Number(month);
  const yearOfNextMonth = numMonth + 1 > 12 ? numYear + 1 : numYear;
  const nextMonth = numMonth + 1 > 12 ? 1 : numMonth + 1;
  return [yearOfNextMonth, nextMonth];
}

function getLastYearAndMonth (year, month) { // 获取上个月的年月
  const numYear = Number(year), numMonth = Number(month);
  const yearOfLastMonth = numMonth - 1 < 1 ? numYear - 1 : numYear;
  const lastMonth = numMonth - 1 < 1 ? 12 : numMonth - 1;
  return [yearOfLastMonth, lastMonth];
}

export {
  getFormatDate,
  getDateInfo,
  getNextMonthRestDays,
  getCurrentMonthDays,
  getLastMonthRestDays,
  getLastWeekDay,
  getFirstWeekDay,
  getLastMonthLastDay,
  getNextYearAndMonth,
  getLastYearAndMonth,
}
