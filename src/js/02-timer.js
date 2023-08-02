import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dataTime = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

let timerId = null;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(dataTime, options);

startBtn.addEventListener('click', onClick);

function onClick(evt) {
  timerId = setInterval(() => {
    let timeDate = new Date(dataTime.value) - Date.now();
    let countDownTime = convertMs(timeDate);
    console.log(
      '🚀 ~ file: 02-timer.js:38 ~ setInterval ~ countDownTime:',
      countDownTime
    );
    dataDays.textContent = padValue(countDownTime.days);
    dataHours.textContent = padValue(countDownTime.hours);
    dataMinutes.textContent = padValue(countDownTime.minutes);
    dataSeconds.textContent = padValue(countDownTime.seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//функція добавляє другій елемнт до таймера,в нашому віпадку 0 (01 04 2023)
function padValue(value) {
  return String(value).padStart(2, 0);
}

// const timer = {
//   start() {
//     const startDate = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startDate;
//       const { days, hours, minutes, seconds } = convertMs(deltaTime);
//       console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
//     }, 8000);
//   },
// };
// timer.start();
