// 10

// let array = [3, 8, 2, 5, 4, 10, 7, 6];
// let pass = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > pass) {
//     pass = array[i];
//   }
// }
// console.log(pass);

//12

// let array = [3, 8, 2, 5, 4, 10, 7, 6];
// let pass = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < pass) {
//     pass = array[i];
//   }
// }
// console.log(pass);

//11

// function LargestElement(arr) {
//   if (arr.length === 0) {
//     console.log("Array is empty");
//   }

//   return arr.reduce(function (a, b) {
//     return a > b ? a : b;
//   });
// }
// const arr = [3, 8, 2, 5, 4, 10, 7, 6];
// console.log("Largest in given array is " + LargestElement(arr));

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// function findLongestWord(arr) {
//   let longestWord = "";
//   arr.forEach((element) => {
//     if (typeof element === "string") {
//       if (element.length > longestWord.length) {
//         longestWord = element;
//       }
//     }
//   });
//   return longestWord;
// }

// console.log("Longest word:", findLongestWord(arr));

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// function qonsuelementitap(arr) {
//   let qonsuelementler = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "boolean") {
//       if (i > 0) {
//         qonsuelementler.push(arr[i - 1]);
//       }
//       if (i < arr.length - 1) {
//         qonsuelementler.push(arr[i + 1]);
//       }
//     }
//   }

//   return qonsuelementler;
// }

// console.log("qonsu elementler", qonsuelementitap(arr));
