// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';


// 1 example

// const string = 'Welcome to the future';
// let newString = " ";
// for ( let i = string.length - 1; i >= 0; i -= 1){
//     newString += string[i];
// }
// console.log(newString);


// 2 example

const string = 'Welcome to the future';

let reversedString = string.split("").reverse().join("");
console.log(reversedString);