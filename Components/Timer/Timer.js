import moment from "moment";
import { TIMER_SEP } from "../../Utils/constants.js";

const getTimeLeftText = (time) => {
   const { y, m, d, h, mn, s } = time;

   // const yearText = !!y ? `Years - ${y}` : y;
   // const monthText = !!m ? `Months - ${m}` : m;
   // const daysText = !!d ? `Days - ${d}` : d;
   // const hoursText = !!h ? `Hours - ${h}` : h;
   // const minutesText = !!mn ? `Minutes - ${mn}` : mn;
   // const secondsText = !!s ? `Seconds - ${s}` : s;
   const yearText = `Years - ${y}`;
   const monthText = `Months - ${m}`;
   const daysText = `Days - ${d}`;
   const hoursText = `Hours - ${h}`;
   const minutesText = `Minutes - ${mn}`;
   const secondsText = `Seconds - ${s}`;

   const timeLeftText =
      yearText +
      "\n" +
      monthText +
      "\n" +
      daysText +
      "\n" +
      hoursText +
      "\n" +
      minutesText +
      "\n" +
      secondsText;

   return timeLeftText;
};

const getTimeLeft = (timer) => {
   const timeDiff = timer.ends.diff(moment());

   if (isNaN(timeDiff)) {
      eventsEmitter.emit("error", "Incorrect date!");
      return null;
   }
   if (timeDiff < 0) return false;

   const duration = moment.duration(timeDiff);

   const y = duration.years();
   const m = duration.months();
   const d = duration.days();
   const h = duration.hours();
   const mn = duration.minutes();
   const s = duration.seconds();

   return { label: timer.label, y, m, d, h, mn, s };
};

export const timerTick = (timer) => {
   const timeLeft = getTimeLeft(timer);

   if (timeLeft === false) {
      console.warn(`Timer: ${timer.label} is over...`);

      return null;
   } else if (!timeLeft) {
      return null;
   }

   const timeLeftText = getTimeLeftText(timeLeft);

   console.log(`_______________
${timer.label}:
${timeLeftText}
_______________
	`);

   return timeLeft;
};
