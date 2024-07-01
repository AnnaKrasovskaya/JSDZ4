// Задание 1
// const c = (a, b) => {
//   if (a === undefined || b === undefined) {
//     return "Введите два параметра";
//   } else if (typeof a == "number" && typeof b == "number") {
//     return a + b;
//   } else if (typeof a !== "number" || typeof b !== "number") {
//     return "Введенные данные не являются числами";
//   }
// };
// console.log(c("и", 3));

//Задание 2

// function square(a) {
//   if (a === undefined) {
//     console.log("Uncaught Error");
//   } else {
//     console.log(a * a);
//   }
// }
// square();

// Задание 3
// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const guessNumber = (num) => {
//   if (num >= 0 && num <= 10) {
//     const randomNamber = getRandomInteger(1, 10);
//     console.log(
//       num === randomNamber
//         ? "Вы выйграли"
//         : `Вы не угадали, Ваше число ${num}, а выпало число ${randomNamber}`
//     );
//   }
// };
// const request = prompt("Введите число");
// guessNumber(request);
// Задание 4

// const nums = [3, 6, 9, 39, 46, 24];
// const copyArr = nums.map(function (element) {
//   return element;
// });
// console.log(copyArr);

// Задание 5
// const names = ["Anna", "Oleg", "Pavel", "Victoria"];
// const newNames = names.map(function (element) {
//   return "Hello " + element;
// });
// console.log(newNames);

// Задание 6
// const objects = [
//   { name: "Василий", surname: "Васильев" },
//   { name: "Иван", surname: "Иванов" },
//   { name: "Пётр", surname: "Петров" },
// ];
// const names = objects.map(function (element) {
//   return element.name;
// });
// console.log(names);

// Задание 7
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: "string",
//   d: 12,
// };
// const sumObjectValues = (object) => {
//   let sum = 0;
//   for (const key in object) {
//     if (typeof object[key] === "number") {
//       sum += object[key];
//     }
//   }
//   return sum;
// };
// console.log(sumObjectValues(objectWithNumbers));

// Задание 8

// let string = "string";
// const ucFirst = (str) => {
//   let firstLet = string.charAt(0);
//   let upperFirst = firstLet.toUpperCase();
//   let restOfStr = string.slice(1);
//   let result = upperFirst + restOfStr;
//   return result;
// };
// console.log(ucFirst(string));
