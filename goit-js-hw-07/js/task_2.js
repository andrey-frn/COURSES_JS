// В HTML есть пустой список ul#ingredients.

{
  /* <ul id="ingredients"></ul> */
}
// В JS есть массив строк.

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// Напиши скрипт, который для каждого элемента массива
// ingredients создаст отдельный li, после чего вставит
// все li за одну операцию в список ul.ingredients.
//  Для создания DOM-узлов используй document.createElement().'
// const liRef = ingredients.forEach(ingredient => document.createElement('li'))

const liRef = ingredients.map((ingredient) => {
  const createLiElem = document.createElement("li");
  createLiElem.textContent = ingredient;
  return createLiElem;
});

const ingridientsListRef = document.querySelector("#ingredients");
ingridientsListRef.append(...liRef);

// ingredients.forEach(ingredient => liRef.textContent = ingredient)
// liRef.textContent = ingredients;
