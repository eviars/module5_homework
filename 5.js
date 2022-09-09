/*Задание 5.
Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.*/

let randomArr = ['Chrome','Mozilla','Yandex','Opera','Edge'];

console.log(randomArr.length);

randomArr.map(function(item) {
	console.log(item);
});

// или

/*let randomArr = ['Chrome','Mozilla','Yandex','Opera','Edge'];

console.log(randomArr.length);

for (let item of randomArr) {
	console.log(item);
}*/
