'use strict';

const value = prompt('Please enter a number:');

// Метод prompt приводит введенные пользователем значения к строчному типу

console.log(`${typeof value}: ${value}`);

console.log(`${typeof Number(value)}: ${value}`); // Приведение к числу с помощью метода Number()

/*
 *
 */

/************************************************
      Number.parseInt() и Number.parseFloat()
 ************************************************/

// Методы преобразуют строку символ за символом, пока это возможно.
// При возникновении ошибки возвращается число, которое получилось.

// Парсит из строки целое число
console.log(Number.parseInt('5px')); // 5
console.log(Number.parseInt('12qwe74')); // 12
console.log(Number.parseInt('12.46qwe79')); // 12
console.log(Number.parseInt('qweqwe')); // NaN

// Парсит из строки дробное число
console.log(Number.parseFloat('5px')); // 5
console.log(Number.parseFloat('12qwe74')); // 12
console.log(Number.parseFloat('12.46qwe79')); // 12.46
console.log(Number.parseFloat('qweqwe')); // NaN

/*
 *
 */

/************************************************
              Проверка на число
 ************************************************/

const validNumber = Number('51'); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number('qweqwe'); // NaN
console.log(Number.isNaN(invalidNumber)); // true

/*
 *
 */

/************************************************
                  Объект Math
 ************************************************/

//  Math.floor(num) - округляет до меньшего целого числа, либо до равного указанного
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - округляет до большего целого числа, либо до равного указанного
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10

/*
 *
 */

/************************************************
                Конкатенация строк
 ************************************************/

const message = 'Mango ' + 'is' + ' happy';
console.log(message); // Mango is happy

// Теперь посмотрим на порядок операндов
let result;

result = 5 + '5';
console.log(result); // '55'
console.log(typeof result); // string

result = 5 + '5' + 5;
console.log(result); // '555'
console.log(typeof result); // string

/*
 * Обратите внимание, произошла математическая операция
 * сложения для первых двух пятерок, после чего 10 было
 * преобразовано в строку '10' и сшито с '5'
 */

result = 5 + 5 + '5';
console.log(result); // '105'
console.log(typeof result); // string

/*
 *
 */

/************************************************
              Свойства и методы строк
 ************************************************/

// length - свойство, хранит длину строки
// toLowerCase() и toUpperCase() - вернут новую строку в соответствующем регистре, не изменяют оригинальную строку
// indexOf() - вернет позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено
// includes() - один из наиболее часто используемых методов, в большинстве случаев заменяет indexOf,
// проверяет входит ли подстрока в строку, возвращает true или false

const message = 'Welcome to Bahamas!';

console.log(message.length); // 19
console.log('There is nothing impossible to him who will try'.length); // 47

console.log(message.toLowerCase()); // welcome to bahamas!
console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// При этом исходная строка не изменяется
console.log(message); // Welcome to Bahamas!

console.log(message.indexOf('to')); // 8
console.log(message.indexOf('hello')); // -1

// Все методы строк чувствительны к регистру
console.log(message.includes('welcome')); // false
console.log(message.includes('Welcome')); // true

/*
 *
 */

/************************************************
              Инструкция switch
 ************************************************/

let cost;
const subscription = 'premium';

switch (subscription) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(cost); // 500

/*
 *
 */

/************************************************
                  Цикл While
 ************************************************/

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

/*
 *
 */

/************************************************
                  Цикл do...while
 ************************************************/

let password = '';

do {
  password = prompt('Введите пароль длиннее 4-х символов', '');
} while (password.length < 5);

console.log('Ввели пароль: ', password);

/*
 *
 */

/************************************************
                  Цикл for
 ************************************************/

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum); // 6

/*
 *
 */

/************************************************
          Инструкции break и continue
 ************************************************/

for (let i = 0; i < 10; i += 1) {
  if (i === 5) {
    console.log('Дошли до 5-й итерации, прерываем цикл!');
    break;
  }
}

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}
