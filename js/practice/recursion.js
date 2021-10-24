// Рекурсии
//
// В качестве первого примера напишем функцию pow(x, n),
// которая возводит х в натуральную степень n.
// иначе говоря, умножает х на саму себя n раз

// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16

const pow = function (n, q) {
  let result = 1;
  for (let i = 0; i < q; i++) {
    result *= n;
  }
  console.log(result);
};

pow(3, 3); //?

//
//
// Рекурсивный способ: упрощение задачи и вызов самой себя:

const pow = function (n, q) {
  if (q === 1) {
    return n;
  } else {
    return n * pow(n, (q -= 1));
  }
};
console.log(pow(3, 3));

//
//
//

const recursion = function (n) {
  console.log(n);
  if (n >= 10) {
    return n;
  } else {
    recursion((n += 1));
  }
};

recursion(0);

//
//

let count = 0;

const increment = function (num) {
  count++;
  console.log(count);
  if (count >= 9) {
    return;
  }
  increment();
};

increment();
