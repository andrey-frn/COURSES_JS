// Получить общую сумму баланса (поле balance) всех пользователей.

import users from "./user.js";

const calculateTotalBalance = (users) => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
