// lesson 5

// function CarFactory(model) {
//   this.model = model;
//   this.carStatus = null;
// }

// CarFactory.prototype.start = function () {
//   console.log(this);
//   this.carStatus = 'start';
// };

// CarFactory.prototype.stop = function () {
//   console.log(this);
//   this.carStatus = 'stop';
// };

class CarFactory {
  constructor(model) {
    this.model = model;
    this.carStatus = null;

    // this.start = this.start.bind(this)
  }
  start = () => {
    console.log(this);
    this.carStatus = 'start';
  };
  stop() {
    console.log(this);
    this.carStatus = 'stop';
  }
}

// Promises

window.promiseError = true;

const getSmth = timeout =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!promiseError) {
        reject('Some error');
        return;
      }

      resolve();
    }, timeout);
  });

getSmth(2000)
  .then(() => console.log('Success'))
  .catch(() => console.log('Error'));
