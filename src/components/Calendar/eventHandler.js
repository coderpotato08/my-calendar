import {
  update,
} from "./render";

function handleClickDate (date) {
  console.log(date);
}
function handleUpdate (year, month) {
  update(year, month);
}

export default {
  handleClickDate,
  handleUpdate,
}
