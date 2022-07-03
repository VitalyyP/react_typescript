// console.log(undefined == 0); // false
// console.log(undefined === 0); // false
// console.log(undefined >= 0); // false
// console.log(null == 0); // false
// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null <= 0); // true
// console.log(null >= 0); // true
// console.log(false == 0); // true

const { ElementFlags } = require("typescript");

// const foo = (a, b) => {
//   let storage = {};
//   for (let i = 0; i < a.length; i += 1) {
//     storage[a[i]] = storage[a[i]] ? storage[a[i]] + 1 : 1;
//     storage[b[i]] = storage[b[i]] ? storage[b[i]] - 1 : -1;
//   }
//   return Object.values(storage).every((el) => el === 0);
// };

// console.log(foo("dog", "dgo"));
// console.log(foo("dog", "dfo"));
// console.log(foo("doog", "ddgo"));

const array = [1, [1, 2, [3, 4]], [2, 4]];

// const flat = (arr) => {
//   let result = [];
//   arr.forEach((el) => {
//     if (Array.isArray(el)) {
//       result = [...result, ...flat(el)];
//     } else {
//       result = [...result, el];
//     }
//   });
//   return result;
// };
// const flat = (arr) => {
//   let result = [];
//   arr.forEach((el) => {
//     if (Array.isArray(el)) {
//       result.push(...flat(el));
//     } else {
//       result.push(el);
//     }
//   });
//   return result;
// };

// console.log(flat(array));

// const isPalindrom = (str) => str === str.split("").reverse().join("");
// console.log(isPalindrom("stant"));
// console.log(isPalindrom("stats"));
// const a = null;
// const b = undefined;
// console.log(5 / a);
// console.log(5 / b);
// console.log(parseInt(a));
// console.log(parseInt(b));

// const findShort = (str) =>
//   str.split(" ").sort((a, b) => a.length - b.length)[0];
// console.log(findShort("The smallest word in sentence"));

// const toInitials = (str) =>
//   str
//     .split(" ")
//     .map((el) => el[0].toUpperCase() + ".")
//     .join("");
// console.log(toInitials("elon mask"));

// const sumDigits = (str) =>
//   Math.abs(str)
//     .toString()
//     .split("")
//     .reduce((acc, el) => acc + Number(el), 0);
// console.log(sumDigits(-32));
// console.log(sumDigits(999));

// const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];
// console.log(minMax([2, 1, 5, 7, 4, 3]));
// console.log(minMax([3]));

// const obj1 = {
//   prop1: 23432,
//   prop2: 35353,
// };

// const obj2 = Object.create(obj1);
// const obj2 = {};

// console.log("prop1" in obj1);
// console.log("prop1" in obj2);
// console.log("-----------------");
// console.log(obj1.hasOwnProperty("prop1"));
// console.log(obj2.hasOwnProperty("prop1"));
// console.log("-----------------");

// const accum = (str) =>
//   str
//     .toUpperCase()
//     .split("")
//     .map((el, i) => el + el.toLowerCase().repeat(i))
//     .join("-");

// console.log(accum("cwAt"));

// const capitals = (str) =>
//   str
//     .split("")
//     .reduce((acc, el, i) => (el === el.toUpperCase() ? [...acc, i] : acc), []);

// console.log(capitals("CodEWaRs"));

// function f1() {
//   let k = 7;
//   f2();
// }
// k = 9;
// f2 = () => {
//   k++;
//   console.log(k);
// };
// f1();

const arr = [10, 3, 1, 2, 99, 5];
// const findMinIndex = (arr) => {
//   let min = arr[0];
//   let indexOfMin = 0;
//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i] < min) {
//       min = arr[i];
//       indexOfMin = i;
//     }
//   }
//   return indexOfMin;
// };
// const findMinIndex = (arr) =>
//   arr.indexOf(arr.reduce((acc, el, index) => (el < acc ? el : acc)));
// const findMinIndex = (arr) =>
//   arr.reduce((index, accum, item) => {
//     if (accum < arr[index]) index = item;
//     return index;
//   }, 0);

// const findMinIndex = (arr) =>
//   arr.reduce((acc, el, index) => (el < arr[acc] ? index : acc), 0);
// console.log(findMinIndex(arr));

// const fooBar = (num) => {
//   for (let i = 1; i <= num; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fooBar");
//     } else if (i % 3 === 0) {
//       console.log("foo");
//     } else if (i % 5 === 0) {
//       console.log("Bar");
//     } else {
//       console.log(i);
//     }
//   }
// };
// console.log(fooBar(15));

// const uniteUnique = (...arr) =>
//   arr
//     .flat(Infinity)
//     .reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), []);
// console.log(uniteUnique([1, 2, 3], [4, 1, 5], [6, 7, 8, 5])); //[1, 2, 3, 4, 5, 6, 7, 8]

// const createPhoneNumber = (num) => {
//   const str = num.toString();
//   return `(${str.substr(0, 3)}) ${str.substr(3, 3)}-${str.substr(
//     6,
//     2
//   )}-${str.substr(8, 2)}`;
// };
// console.log(createPhoneNumber(1234567890));

// const findVowels = (str) =>
//   str
//     .split("")
//     .reduce(
//       (acc, el) => (["a", "e", "i", "o", "u"].includes(el) ? acc + 1 : acc),
//       0
//   );

// const findVowels = (str) => str.match(/[aeiou]/gi)?.length || 0;
// console.log(findVowels("hello"));
// console.log(findVowels("htpps"));

const str =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur, eveniet.Commodi nisi, atque praesentium consequuntur culpa reprehenderit.Laudantium, adipisci.Nam quam aut eaque quo, voluptatem cupiditate exercitationem quidem deleniti cum?";
const toCapitalCase = (str) =>
  str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
// console.log(toCapitalCase(str));
alert("WOW");
