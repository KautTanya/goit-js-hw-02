// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';
 
const values = '8 11';
const valuesArray = values.split(" ");
let square = Number(valuesArray[0]) * Number(valuesArray[1]);
console.log(square);