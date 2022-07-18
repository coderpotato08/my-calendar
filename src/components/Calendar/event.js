import {getLastYearAndMonth, getNextYearAndMonth} from "./utils"

let target = null;
export default (container, handler) => {
  const {handleClickDate, handleUpdate} = handler || {}
  container.addEventListener('click', function (e) {
    const tar = e.target;
    const className = tar.className;
    const oYear = document.querySelector(".year");
    const oMonth = document.querySelector(".month");

    const currentYear = oYear.innerHTML;
    const currentMonth = oMonth.innerHTML;
    if (className.includes("date-day")) {
      if (target) {
        target.className = target.className.replace(" selected", "");
      }
      target = tar;
      tar.className += ' selected';
      handleClickDate && handleClickDate(tar.dataset.date);
    }

    if (className.includes("last-month")) {
      const lastDate = getLastYearAndMonth(currentYear, currentMonth);
      handleUpdate && handleUpdate(...lastDate)
    }

    if (className.includes("next-month")) {
      const nextDate = getNextYearAndMonth(currentYear, currentMonth);
      handleUpdate && handleUpdate(...nextDate)
    }

    if (className.includes("last-year")) {
      handleUpdate && handleUpdate(Number(currentYear) - 1, currentMonth)
    }

    if (className.includes("next-year")) {
      handleUpdate && handleUpdate(Number(currentYear) + 1, currentMonth)
    }
  }, false);
}
