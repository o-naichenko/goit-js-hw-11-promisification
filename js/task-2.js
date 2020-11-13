// Завдання 2
// Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback,
// а приймала всього два параметри allUsers і userName і повертала проміс.
console.log("task-2");
const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const promise = new Promise((resolve) => {
    let updatedUsers = [];
    resolve(
      (updatedUsers = allUsers.map((user) =>
        user.name === userName ? { ...user, active: !user.active } : user
      ))
    );
  });
  return promise;
};

const logger = (updatedUsers) => console.table(updatedUsers);

// /*
//  * Зараз працює так
//  */
// toggleUserState(users, "Mango", logger);
// toggleUserState(users, "Lux", logger);

// /*
//  * Повинно працювати так
//  */
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
