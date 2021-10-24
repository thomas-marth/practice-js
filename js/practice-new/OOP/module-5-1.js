//TODO Модуль 5. Занятие 9. Прототипное наследование

// const Car = function (config) {
//
//   const { brand, model, price, color } = config;

//   this.brand = config.brand;
//   this.model = config.model;
//   this.color = config.color;
//   this.price = config.price;
//
// };

// * Тоже самое, но с деструктуризацией в условии:

const Car = function ({ brand, model, price, color = 'metallic' } = {}) {
  /* Функция вызывается в контексте созданного объекта, 
  т.е. в this записывается ссылка на него (на этот прототип) */

  this.brand = brand;
  this.model = model;
  this.color = color;
  this.price = price;

  //? this.changePrice = function (newPrice) {
  //?   this.price = newPrice;
  //? };

  /* Если таким образом объявлять методы в функции-конструкторе, 
  то их копии будут храниться в экземплярах класса, поэтому их лучше выносить 
  в функции со свойством prototype, как указано ниже. (Car.prototype.fn) */

  /* 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype,
  то-есть Car.prototype это ПРОТОТИП будущего обьекта(экземпляра) */

  // 4. Ссылка на обьект возвращается в место вызова new Car
};

Car.prototype.testFn = function () {
  console.log(this);
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.prototype.changeColor = function (newColor) {
  this.color = newColor;
};

// 1. Если функция вызывается через new, создаётся пустой объект

const myCar = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(myCar);

const myCar2 = new Car({
  brand: 'BMW',
  model: 'X6',
  price: 50000,
});

console.log(myCar2);

myCar2.changeColor('black');
myCar2.changePrice(40_000);

console.log('myCar2 with new color & price:', myCar2);

myCar.testFn();
console.log(Car.prototype);

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект

/* 3. При создании литерала обьекта, в свойство __proto__ записывается ссылка 
на Function.prototype */

// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект
//    Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

console.log(User.prototype);

User.prototype.changeEmail = function (newMail) {
  this.email = newMail;
};

const mango = new User({ email: 'mango@mail.com', password: 1111111 });

mango.changeEmail('my-new-mail@mail.com');
// console.log(mango);

// ---------------------------------------------------------------------
//                 Статические свойства и методы
// ---------------------------------------------------------------------

/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

User.message =
  'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.password);
};

User.logInfo(mango);

// Статические методы:

// Object.keys()
// Object.value()

//
//

// *************************************

//          Counter example

// *************************************

const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,

  onUpdate = () => null,
} = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);

  this.onUpdate = onUpdate;

  this._bindEvents();
  this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype._bindEvents -> this', this);
    this.increment();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype._bindEvents -> this', this);
    this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;

  this.onUpdate();
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

new CounterPlugin({
  rootSelector: '#counter-1',
  step: 10,
  initialValue: 100,
  onUpdate: () => console.log('Это мой кастомный колбек для onUpdate'),
});

new CounterPlugin({ rootSelector: '#counter-2', step: 2 });
