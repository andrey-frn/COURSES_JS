// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

let deltaTime = null;
const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};
const targetDate = new Date("28 october 2020");

const timerFunction = () => {
  setInterval(() => {
    const currentDate = new Date();
    const deltaTime = targetDate.getTime() - currentDate.getTime();

    const stringTimer = (time) => {
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      refs.days.textContent = `${days}`;
      refs.hours.textContent = `${hours}`;
      refs.mins.textContent = `${mins}`;
      refs.secs.textContent = `${secs}`;
    };

    stringTimer(deltaTime);
    function pad(value) {
      return String(value).padStart(2, "0");
    }
  }, 1000);
};

timerFunction(targetDate);
