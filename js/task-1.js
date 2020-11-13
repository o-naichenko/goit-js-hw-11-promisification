// Завдання 1
// Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд.
// Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.

setTimeout(() => {
  console.log("task-1");
}, 999);

const delay = (ms) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return promise;
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

// // Виклич функції для перевірки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

setTimeout(() => {
  console.log("/task-1");
}, 2500);
