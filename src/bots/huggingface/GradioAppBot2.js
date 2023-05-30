import AsyncLock from "async-lock";
import GradioBot2 from "./GradioBot2";
import store from "@/store";

export default class GradioAppBot2 extends GradioBot2 {
  static _className = "GradioAppBot2"; // Class name of the bot
  static _loginUrl = "";
  static _settingsComponent = "GradioAppBotSettings2"; // Vue component filename for settings
  static _lock = new AsyncLock(); // AsyncLock for prompt requests

  constructor() {
    super();
    this.constructor._loginUrl = store.state.gradio2.url;
    this.constructor._fnIndexes[0] = store.state.gradio2.fnIndex;
  }

  checkAvailability() {
    this.constructor._loginUrl = store.state.gradio2.url;
    this.constructor._fnIndexes[0] = store.state.gradio2.fnIndex;
    return super.checkAvailability();
  }

  makeData(fn_index, prompt) {
    return Array(prompt);
  }

  parseData(fn_index, data) {
    return data[0];
  }
}
