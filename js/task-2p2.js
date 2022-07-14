// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1


// 1 example
// function min(a,b){
    // if (isNaN(a) || isNaN(b)) return false;
//     return Math.min(a,b);
// }


// 2 example

function min(a, b){

    if (isNaN(a) || isNaN(b)) return NaN;

    if (a > b) return b;

    return a;
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1