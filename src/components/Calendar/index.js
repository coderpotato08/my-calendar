import {
  getDateInfo
} from "./utils";
import {
  render,
  update,
} from "./render"
import "./index.scss";
import event from "./event";
import eventHandler from "./eventHandler"

export default () => {
  const oContainer = document.createElement('div');
  oContainer.className = "my-calendar";

  event(oContainer, eventHandler);
  return {
    render: render(oContainer),
    update,
    getDateInfo,
  }
}
