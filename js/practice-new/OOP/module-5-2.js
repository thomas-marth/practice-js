/************************************************* */
//TODO                Классы
/************************************************* */

/*
 * Классы
 * - объявление
 * - конструктор
 * - методы
 * - static
 * - приватные свойства
 * - синтаксис публичных свойства и методы классов
 * - геттеры и сеттеры
 */

class Car1 {
  static description = 'Класс описывающий автомобиль'; // статическое свойство

  color = 'green'; /* публичные свойства (поля) 
  (хранятся непосредственно в экземпляре класса) */

  static logInfo(carObj) {
    console.log('Car.logInfo -> carObj', carObj);
  } // статический метод (когда не требуется привязка к экземпляру класса)

  #test = 'test'; // приватные свойства

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  changeModel(newModel) {
    this.model = newModel;
  }

  showModel() {
    return console.log(this.model);
  }

  showCar() {
    return console.log(this);
  }

  // Геттеры и сеттеры

  get model() {
    return this._model;
  } // геттер

  set model(newModel) {
    return (this._model = newModel);
  } // cеттер
}

// console.dir(Car1);
// console.log(Car1.description);

const carInstance = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

Car1.logInfo(carInstance);

console.log('Getter model:', carInstance.model);

console.log('Setter model:', (carInstance.model = 'Q4'));

Car1.logInfo(carInstance);

carInstance.showCar();

carInstance.changeModel('Q6');

carInstance.showCar();

carInstance.model = 'Q8';

carInstance.model;

//

//***************************************************** */
//                    Наследование                      //
//***************************************************** */

/*
 * Наследование
 *  - extends
 *  - super()
 */

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp = amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} что-то там кастует`);
  }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'axe' });
console.log(mango);

mango.attack();

mango.gainXp(1000);

const poly = new Mage({ name: 'poly', xp: 500, spells: ['fairball'] });
console.log(poly);
