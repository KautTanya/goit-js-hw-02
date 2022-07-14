// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';

const string = 'Welcome to the future';

const wordArray = string.split(" ");
// console.log(wordArray);
 
const newArray = wordArray.slice(1, wordArray.length-1);
// console.log(newArray);

console.log( newArray.join(" "));