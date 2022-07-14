// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8


let indexMass = 0;
function calcBMI(weight, height){
    const parsedWeight = Number(weight.replace(',', "."));
    const parsedHeight = Number(height.replace(',', "."));
    
    if (isNaN(parsedHeight) || isNaN(parsedWeight)) return 0;


    let squareHeigth = parsedHeight ** 2;
    let indexMass = parsedWeight / squareHeigth;
    const result = indexMass.toFixed(1);

    return Number(result);

   

}


const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8