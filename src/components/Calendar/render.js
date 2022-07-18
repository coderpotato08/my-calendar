import {
  createDateNode, createDateOptionHead,
  createWeekDaysNode
} from "./creator"
// 渲染
export function render(container) {
  const oHead =  document.createElement('div'); // 日期切换头部
  const oTable = document.createElement('table'); // 日期表
  const oThead = document.createElement("thead"); // 日期表头
  const oTbody = document.createElement("tbody"); // 日期表体
  const weekHeadNode = createWeekDaysNode();

  oTbody.className = "my-calendar-body"
  oHead.className = "my-calendar-head"

  return function (year, month) {
    const dateTrs = createDateNode(year, month);
    const headOption = createDateOptionHead(year, month);
    oThead.appendChild(weekHeadNode);
    dateTrs.forEach((tr) => oTbody.appendChild(tr));
    oTable.appendChild(oThead);
    oTable.appendChild(oTbody);
    oHead.appendChild(headOption)

    container.appendChild(oHead);
    container.appendChild(oTable);

    return container;
  }
}
// 更新
export function update(year, month) {
  const oTbody = document.querySelector(".my-calendar-body");
  const oHead = document.querySelector(".my-calendar-head");
  const dateTrs = createDateNode(year, month);
  const headOption = createDateOptionHead(year, month);
  oTbody.innerHTML = '';
  oHead.innerHTML = '';
  dateTrs.forEach((tr) => oTbody.appendChild(tr));
  oHead.appendChild(headOption);
}
