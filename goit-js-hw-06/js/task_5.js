// Получить пользоваля (не массив) по email (поле email, он уникальный).
import users from "./user.js";

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.table(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.table(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
