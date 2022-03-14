import * as process from "process";
import { EventEmitter } from "events";
import moment from "moment";

import { outputInterval, TIME_FORMAT } from "./Utils/constants.js";
import { timerTick } from "./Components/Timer/Timer.js";

const eventsEmitter = new EventEmitter();

const parseTimers = (dates) => {
   return dates.map((date, idx) => {
      const timerLabel = `Timer ${idx + 1}`;
      const timerEnd = moment(date, TIME_FORMAT, true);

      const timer = { label: timerLabel, id: idx, ends: timerEnd };
      return timer;
   });
};
const getTimers = () => timers;

const timersHandler = (handleTimers) => {
   handleTimers.forEach((handleTimer) => {
      const timerHandle = timerTick(handleTimer);

      if (!timerHandle) {
         timers = handleTimers.filter((timer) => timer.id !== handleTimer.id);
      }
   });
};

const dates = process.argv.splice(2);
let timers = parseTimers(dates);

eventsEmitter.on("timersHandler", timersHandler);
eventsEmitter.on("error", (e) => console.error(e));

const run = (getTimers) => {
   let interval = setInterval(() => {
      let timers = getTimers();
      if (!timers.length) clearInterval(interval);
      eventsEmitter.emit("timersHandler", timers);
   }, outputInterval);
};

run(getTimers);
