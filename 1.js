/*Задание 1.

Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.*/

// Первый вариант:

let numberType = +prompt ('Введите число');

let result = isNaN(numberType) ? 'Упс, кажется, вы ошиблись' : numberType % 2 === 0 ? 'Чётное число' : 'Нечётное число' ;
console.log(result);

// Второй вариант:

/*let numberType=+prompt ('Введите число');

if (typeof numberType ==='number' && numberType % 2 === 0 ) {
	console.log('Чётное число');
} else if (typeof numberType === 'number'&& numberType % 2 > 0 ) {
	console.log('Нечётное число');
} else if (isNaN(numberType)) {
	console.log ('Упс, кажется, вы ошиблись');
} */