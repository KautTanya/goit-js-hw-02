// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
// const findLongestWord = function(string) {
//   // твой код
// };
const findLongestWord = function(string) {
     let wordArray = string.split(" ");
     let maxWord = wordArray[0];
    
     for( let i = 0; i < wordArray.length; i += 1){
        
        if(maxWord.length < wordArray[i].length){
            maxWord = wordArray[i]
           
        }
     }
        return maxWord;
    };
    
    







/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
