const Wheel = function (radius) {
  this.radius = radius;
};

const Trailer = function (width, height) {
  this.width = width;
  this.height = height;
};

const Car = function (radius) {
  this.wheels = [];
  this.speed = 0;
  this.isOn = false;

  for (let i = 0; i < 4; i++) this.wheels.push(new Wheel(radius));

  this.turnOn = function () {
    if (this.isOn) return;

    this.isOn = true;
    this.setSpeed(0);
  };
  this.turnOff = function () {
    if (!this.isOn) return;

    this.isOn = false;
    this.setSpeed(0);
  };
  this.getSpeed = function () {
    return this.speed;
  };
  this.setSpeed = function (speed) {
    if (speed === 0 || (speed > 0 && this.isOn)) this.speed = speed;
  };
};

const Volvo = function () {
  Car.call(this, 250);

  this.connectTrailer = function (trailer) {
    this.trailer = trailer;
  };
};

const BMW = function () {
  Car.call(this, 150);

  this.getSpeed = function () {
    console.log('this best bmw');
    return this.speed;
  };
};

const Wheelbarrow = function () {
  this.wheel = new Wheel(80);
};

let passengerVolvo = new Volvo();

let wagonVolvo = new Volvo();
wagonVolvo.connectTrailer(new Trailer(500, 1500));

console.log(wagonVolvo);

let passengerBmv = new BMW();

let wheelbarrow = new Wheelbarrow();

// console.log(car.isOn);
// car.turnOn();
// console.log(car.isOn);

// for(let key in car) {
//     console.log(key);
// }

// console.log(Object.keys(car));

// removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Зелья ${potionName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1);
// }

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки

  removePotion(potionName) {
    for (const potion of this.potions) {
      //   console.log(potion.name);
      if (potion.name === potionName) {
        console.log(potion);
        // potion.splice(0, 3);
        console.log('new obj:', potion);
      }
    }

    //   const potionIndex = this.potions.indexOf(potionName);

    //   if (potionIndex === -1) {
    //     return `Зелья ${potionName} нет в инвентаре!`;
    //   }

    //   this.potions.splice(potionIndex, 1);
  },
};

atTheOldToad.removePotion('Дыхание дракона');

//
//
//

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        this.potion = [];
      }

      return `Зелья ${potionName} нет в инвентаре!`;
    }

    //   const potionIndex = this.potions.indexOf(potionName);

    //   if (potionIndex === -1) {
    //     return `Зелья ${potionName} нет в инвентаре!`;
    //   }

    //   this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return this.potions;
      }
    }
    return `Зелья ${oldName} нет в инвентаре!`;
  },
  // Пиши код выше этой строки
};
