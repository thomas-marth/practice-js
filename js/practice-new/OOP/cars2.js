class Wheel {
  constructor(radius) {
    this.radius = radius;
  }
}
​
class Trailer {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
​
class Car {
​
  constructor(radius) {
    this._speed = 0;
    this.isOn = false;
    this.wheels = [];
​
    for (let i = 0; i < 4; i++)
      this.wheels.push(new Wheel(radius));
  }
​
  get speed() {
    return this._speed;
  }
​
  set speed(value) {
    if (value === 0 || (value > 0 && this.isOn))
      this._speed = value;
  }
​
  turnOn() {
    if (this.isOn) return;
​
    this.isOn = true;
    this.speed = 0;
  }
​
  turnOff() {
    if (!this.isOn) return;
​
    this.isOn = false;
    this.speed = 0;
  }
}
​
class Volvo extends Car {
  constructor() {
    super(250);
  }
​
  connectTrailer(trailer) {
    this.trailer = trailer;
  }
​
  static getCarName() {
    return 'Volvo';
  }
}
​
class BMW extends Car {
  constructor() {
    super(150);
  }
​
  get speed() {
    console.log('this best bmw');
    return this._speed;
  }
​
  static getCarName() {
    return 'BMW';
  }
}
​
class Wheelbarrow {
  constructor() {
    this.wheel = new Wheel(80);
  }
​
}
​
let passengerVolvo = new Volvo();
​
let wagonVolvo = new Volvo();
wagonVolvo.connectTrailer(new Trailer(500, 1500));
​
wagonVolvo.speed = 100;
​
console.log(Volvo.getCarName());
console.log(wagonVolvo.speed);
​
let passengerBmv = new BMW();
​
let wheelbarrow = new Wheelbarrow();