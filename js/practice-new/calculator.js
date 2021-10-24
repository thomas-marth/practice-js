// Написать калькулятор с использованием Switch

let firstOperand = prompt('Введите первое число');
firstOperand = Number.parseInt(firstOperand);
let operator = prompt('Введите оператор вычисления');
let secondOperand = prompt('Введите второе число');
secondOperand = Number.parseInt(secondOperand);
let result;

switch (operator) {
  case '+':
    result = firstOperand + secondOperand;
    break;

  case '-':
    result = firstOperand - secondOperand;
    break;

  case '*':
    result = firstOperand * secondOperand;
    break;

  case '/':
    result = firstOperand / secondOperand;
    break;

  default:
    console.log('error');
}

alert('Резульат вычисления равен: ', result);
