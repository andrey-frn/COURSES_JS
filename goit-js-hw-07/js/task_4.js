
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение
// счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения
// счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
{
  /* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */
}

const spanValue = document.querySelector("#value");
let counterValue = 0;
const increment = () => {
  return counterValue += 1;
};
const decrement = () => {
  return  counterValue -= 1;
};
const value = () => {
    return spanValue.textContent = counterValue;

};


const decrementBtn = document.querySelector(".js-decrement-btn");
decrementBtn.addEventListener('click', decrement);
decrementBtn.addEventListener('click', value);

const incrementBtn = document.querySelector(".js-increment-btn");
incrementBtn.addEventListener('click', increment);
incrementBtn.addEventListener('click', value); 
