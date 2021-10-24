// Написать функцию, которая разбивает массив на подмассивы по типам

let arr = [1, 2, 'dsfsd', 3, 4, 'dfvtr', 'gfbda', 5.5, 7.8, 'sdsdc', 'scdsc'];

const addToArray = function (arr) {
  let responseArr = [];
  responseArr['int'] = [];
  responseArr['float'] = [];
  responseArr['string'] = [];

  for (let item of arr) {
    if (Number.isInteger(item)) {
      responseArr['int'].push(item);
    } else if (item % 1 !== 0 && typeof item === 'number') {
      responseArr['float'].push(item);
    } else if (typeof item === 'string') {
      responseArr['string'].push(item);
    }
  }
  return responseArr;
};

console.log(addToArray(arr));

/*
 *
 */

// Написать функцию, которая бы проверяла входящую строку на палиндром

const isPalindrom = function (str) {
  return str.split('').reverse().join('') === str;
};

console.log(isPalindrom('101'));

/*
 *
 */

// Последовательность фибоначчи

let firstNumber = 1;
let secondNumber = 0;
let sum;

for (let i = 0; i < 10; i += 1) {
  sum = firstNumber + secondNumber; // = 1 + 0 определяем переменную sum
  secondNumber = firstNumber; // 0 = 1 переопределяем второе число равным первому
  firstNumber = sum; // 1 переопределяем первое число равным сумме

  console.log(sum);
}

//
//
//
// Написать игру Камень Ножницы Бумага.
// Варианты выбора необходимо сохранять в массиве
// пользователь вводит свой вариант
// Компьютер выбирает свой рандомный вариант из массива
// Проверяем выбор пользователя и выбор компьютера
// Обработать все варианты:
// 1) Варианты, где выигрывает пользователь
// 2) Варианты, где выигрывает компьютер
// 3) Варианты, где выходит ничья

let userChoice = prompt('Ваш выбор');
const choice = ['Камень', 'Ножницы', 'Бумага'];
let machineChoice;
const theGame = function (userInput) {
  machineChoice = choice[Math.floor(Math.random() * choice.length)];
  if (userInput === machineChoice) {
    alert('Ничья');
  } else if (userInput === 'Камень' && machineChoice === 'Ножницы') {
    alert('Победа');
  } else if (userInput === 'Камень' && machineChoice === 'Бумага') {
    alert('Поражение');
  } else if (userInput === 'Ножницы' && machineChoice === 'Камень') {
    alert('Поражение');
  } else if (userInput === 'Ножницы' && machineChoice === 'Бумага') {
    alert('Победа');
  } else if (userInput === 'Бумага' && machineChoice === 'Камень') {
    alert('Победа');
  } else if (userInput === 'Бумага' && machineChoice === 'Ножницы') {
    alert('Поражение');
  }
};

theGame(userChoice);
console.log(machineChoice);

/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/

const list = {
  apples: 50,
  pears: 75,
  bananas: 25,
};

const userMoney = 200;

const cashier = function (list, money = 0) {
  let sum = 0;
  for (let product in list) {
    sum += list[product];
  }
  let res =
    sum > userMoney
      ? 'Вам не хватает денег для покупки'
      : 'Спасибо за покупку.';
  console.log(res);
};
cashier(list, userMoney);

function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest('Манго', function greet(name) {
  consle.log(`Добро пожаловать ${name}.`);
});

//
//
//

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = orders.map((order, index) =>
  composeMessage.call(order, index + 1),
);

console.log(messages);

//
//
//

function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (newItem) {
  this.items.push(newItem);
};

Storage.prototype.removeItem = function (removedItem) {
  const removeIndex = this.items.indexOf(removedItem);
  this.items.splice(removeIndex, 1);
};

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//
//
//

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  // addItem(newItem) {
  //   this.#items.push(newItem);
  // }

  // removeItem(item) {
  //   const itemIndex = this.items.indexOf(item);
  //   this.items.splice(itemIndex, 1);
  // }
}

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

storage.getItems();
storage.addItem('Дроид');
storage.getItems();
storage.removeItem('Пролонгер');
storage.getItems();

//
//
//

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  accessLevel;
  blacklistedEmails;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    // console.log(email);
    if (email === this.email) {
      return false;
    }
    return true;
    // return this.blacklistedEmails === email;
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true

//
//
//
