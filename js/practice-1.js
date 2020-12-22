'use strict';

const value = prompt('Please enter a number:');

// Метод prompt приводит введенные пользователем значения к строчному типу

console.log(`${typeof value}: ${value}`);

// Приведение к числу:

console.log(`${typeof Number(value)}: ${value}`);

/************************************************
 
 ************************************************/
