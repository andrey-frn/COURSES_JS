// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из
//  массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// warning Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение
// темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action = "start"]'),
  stopBtn: document.querySelector('button[data-action = "stop"]'),
};
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const functionStart = () => {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  refs.startBtn.setAttribute("disabled", "disabled");
};

const functionStop = () => {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute("disabled");
  refs.body.style.backgroundColor = '#FFFFFF';
};

const onStart = refs.startBtn.addEventListener("click", functionStart);
const onStop = refs.stopBtn.addEventListener("click", functionStop);
