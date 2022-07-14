// Example 5 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"


function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;

    const resultHours = String(hours).padStart(2, "0");
    const resultMin = String(min).padStart(2, "0");

    return (`${resultHours} : ${resultMin}`);
    

}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"