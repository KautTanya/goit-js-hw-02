// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
// •	Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// •	Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// const formatString = function(string) {
//   // твой код
// };

const formatString = function(string) {
    const maxString = 40;
    let newString;
  if (string.length > maxString){
    newString = string.slice( 0, maxString);
    string = newString + "...";
  }
  console.log(string);
};
/*

 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
