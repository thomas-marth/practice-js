const greeting = function (name) {
  let result = 'ser' + name();
  console.log(`Hello ${result}!`);
};

const nameAsker = function () {
  return prompt('enter your name');
};

greeting(nameAsker);

//
//
//

// const fn = action => {
//   return action(1);
// };

// fn(n => {
//   console.log(n + 1);
// });

(() => {
  console.log('ANONYMUS');
})();
