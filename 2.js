/*Задание 2.

Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».
Примечание: в этом задании использовать promt не нужно.*/

// Первый вариант:

let x = "";

let typeMessage = typeof x === 'number'? 'x-число':
typeof x === 'string'? 'x-строка':
typeof x === 'boolean' ? 'x-логический тип':
'Тип x не определён';
console.log (typeMessage);

// Второй вариант:

/*let x = "";
const typeMessage = typeof x;

switch (typeMessage) {
	case 'number':
		console.log('x-число');
			break;
	case 'string':
		console.log('x-строка');
			break;
	case 'boolean':
		console.log('x-логический тип');
			break;
		
	default:
		console.log('Тип x не определён');
}*/

// Третий вариант:

/*let x = "";

if (typeof x === 'number') {
	console.log('x-число');
} else if (typeof x === 'string') {
	console.log('x-строка');
} else if (typeof x === 'boolean') {
	console.log ('x-логический тип');
} else {
	console.log ('Тип x не определён');
}*/