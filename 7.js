/*Задание 7.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

// Первый вариант:

const arr = [1, 2, 3, 5, null, 8, 'зима'];

function isEven(element) {
	return element % 2 === 0 && typeof element === 'number';
}
function isOdd(element) {
	return element % 2 > 0 && typeof element === 'number';
}
function isNull(element){
	return element === null;
}
function isNanEl(element){
	return isNaN(element);
}
console.log(`Количество четных элементов: ${arr.filter(isEven).length}
Количество нечетных элементов: ${arr.filter(isOdd).length}
Количество нулевых элементов: ${arr.filter(isNull).length}
Не числа: ${arr.filter(isNanEl).length}` );



// Второй вариант:

/*const arr = [1, 2, 3, 5, null, 8, 'зима'];

let evenCount = 0;
let oddCount = 0;
let nullCount = 0;
let notNumbCount = 0;

for (let i= 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0 && typeof arr[i] === 'number' && !isNaN(arr[i])) {
		evenCount++;
	} else if (arr[i] % 2 > 0 && typeof arr[i] === 'number' && !isNaN(arr[i])) {
		oddCount++;
	} else if (arr[i] === null) {
		nullCount++;
	} else if (isNaN(arr[i])) {
		notNumbCount++;
	}
}
console.log(`Количество четных элементов: ${evenCount}
Количество нечетных элементов: ${oddCount}
Количество нулевых элементов: ${nullCount}
Не числа: ${notNumbCount}` );*/
