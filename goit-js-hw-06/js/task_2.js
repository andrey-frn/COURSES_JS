// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

import users from "./user.js";

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
}; 

// const getUsersWithEyeColor = function(users, color) {
//   const a = users.filter(function(user) {
//     return user.eyeColor === color
//   });
//   return a;
//  };

console.table(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
