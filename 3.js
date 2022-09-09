/*Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

const greetReverse = 'Hello';
const reverse = greetReverse.split('').reverse().join('');

console.log(reverse);