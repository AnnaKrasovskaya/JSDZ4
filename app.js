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

// Задание 9
// const str = "badWord";
// chekSpam = (str) => {
//   const newStr = str.toLowerCase();
//   if (newStr.includes("badword") || newStr.includes("xxx")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(chekSpam(str));

// Задание 10
// const string = "привет, Женя";
// func = (string) => {
//   const newString = string.split("");
//   return newString.reverse().join("");
// };
// console.log(func(string));

// Задание 11
// let stations = [
//   "MAN675847583748sjt567654;Manchester Piccadilly",

//   "GNF576746573fhdg4737dh4;Greenfield",

//   "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",

//   "SYB4f65hf75f736463;Stalybridge",

//   "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
// ];

// for (const element of stations) {
//   const code = element.slice(0, 3);
//   const symbol = element.indexOf(";");
//   const readable = element.split(";")[1];
//   console.log(code + ": " + readable);
// }

// Задание 12
// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];

// const newString = [];
// strings.forEach(function (element) {
//   if (newString.indexOf(element) < 0) {
//     newString.push(element);
//   }
// });
// console.log(newString);

// Задание 13

// const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
// const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
// const catsJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
// const catsJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];
// const verifyCats = (arr1, arr2) => {
//   arr1.pop();
//   arr1.shift();
//   const newArr = arr1.concat(arr2);
//   newArr.forEach(function (element, index) {
//     if (element >= 2) {
//       console.log(`Кошка №${index + 1} взрослая, ей ${element} лет`);
//     } else {
//       console.log(`Кошка №${index + 1} еще котенок`);
//     }
//   });
// };
// verifyCats(catsJane, catsJulia);
// verifyCats(catsJane2, catsJulia2);

//Задание 14

// let arr = [5, 4, 3, 8, 0];
// const filterFor = (arr, a) => {
//   return arr.filter(function (item) {
//     return item >= a;
//   });
// };
// console.log(filterFor(arr, 5));

// Задание 15

// const string = ["yes", "hello", "no", "easycode", "what"];
// const newString = (item) => {
//   return item.filter(function (item) {
//     return item.length > 3;
//   });
// };
// console.log(newString(string));

// Задание 16

// const arr = [[14, 45], [1], ["a", "c", "d"]];
// const sortedArr = arr.sort(function (a, b) {
//   return a.length - b.length;
// });
// console.log(sortedArr);

// Задание 17

// const catAges = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
// const catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
// const getAverageHumanAge = (arr) => {
//   const ageHuman = arr.map(function (element) {
//     if (element <= 2) {
//       return element * 10;
//     } else {
//       return element * 7;
//     }
//   });
//   const bigCats = ageHuman.filter(function (element) {
//     return element > 18;
//   });
//   const summOfAges = bigCats.reduce(function (acc, element) {
//     return acc + element;
//   }, 0);
//   const middleAge = summOfAges / bigCats.length;
//   return middleAge;
// };
// console.log(getAverageHumanAge(catAges));
// console.log(getAverageHumanAge(catAges2));

//Math

// const result = Math.round(5.4); //Классическое округление
// console.log(result);

// const result2 = Math.round(5.5);
// console.log(result2);

// const result3 = Math.round(5.6);
// console.log(result3);

// const result4 = Math.ceil(5.4); //Округление вверх до 6
// console.log(result4);

// const result5 = Math.ceil(5.5);
// console.log(result5);

// const result6 = Math.ceil(5.6);
// console.log(result6);

// const result7 = Math.floor(5.4); //Округление вниз до 5
// console.log(result7);

// const result8 = Math.floor(5.5);
// console.log(result8);

// const result9 = Math.floor(5.6);
// console.log(result9);

//Date

// const date = new Date();
// const options = { year: "numeric", month: "long", day: "numeric" };
// const newDate = date.toLocaleDateString("ru-RU", options);
// const hours = date.getHours();
// const minutes = date.getMinutes();
// console.log(`Сегодня ${newDate}`);
// console.log(`${hours} часов ${minutes} минут`);
