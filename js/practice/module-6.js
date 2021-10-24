const numbers = [1, 2, 3];

numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// Функциональный forEach
numbers.forEach(num => console.log(num));

//
//
//

// Math.max для массива чисел

function getMaxOfArray(arr) {
  return Math.max.apply(null, arr);
}

getMaxOfArray(numbers);
console.log('getMaxOfArray(numbers)', getMaxOfArray(numbers));
