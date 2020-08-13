// Получить массив всех умений всех пользователей (поле skills),
//  при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

import users from "./user.js";

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((skills, user) => [...skills, ...user.skills], [])
    .filter((skills, index, uniqeSkills) => uniqeSkills.indexOf(skills) === index)
    .sort()
}

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex',
// 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
