/*
 * Функциональные выражения и объявление функции
 * Аргументы и параметры, параметры по умолчанию
 * Возврат значения
 */

const add = function (a, b) {
  console.log('a: ', a);
  console.log('b: ', b);

  const result = a + b;

  return result;
};

const r1 = add(2, 5);
console.log(r1);

const r2 = add(10, 20);
console.log(r2);

const r3 = add(100, 250);
console.log(r3);

/*
 *
 */

/***********************************
 *    Порядок выполнения функций   *
 ***********************************/

const fnA = function () {
  console.log('Начала выполняться [fnA]');
  fnB();
  console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
};

const fnB = function () {
  console.log('Выполняется [fnB]');
};

console.log('Начал выполнение [main]');
fnA();
console.log('Продолжил выполняться [main] после выхода из [fnA]');

/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */

/*
 *
 */

/*******************************
 *          Iteration          *
 *******************************/

/*
 * Функция logItems для перебора массива
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const numbers = [1, 2, 3, 4, 5];

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(friends);
logItems(numbers);
logItems(['qwe', 1, 2, 'wtewt']);

/*
 * Функция findFriend для поиска друзей
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const nameToFind1 = 'Poly';

// const findFriend = function(allFriends, name) {
//   console.log('allFriends: ', allFriends);
//   console.log('name: ', name);

//   for (const friend of allFriends) {
//     if (name === friend) {
//       return 'Нашли такого друга';
//     }
//   }

//   return 'Не нашли';
// };

// const r1 = findFriend(friends, 'Poly');
// console.log(r1);

// const r2 = findFriend(friends, 'Chelsy');
// console.log(r2);

const findFriend = function (allFriends, name) {
  const isInFriends = allFriends.includes(name);

  // if (isInFriends) {
  //   return 'Нашли такого друга';
  // } else {
  //   return 'Не нашли';
  // }

  return isInFriends ? 'Нашли такого друга' : 'Не нашли';
};

const r1 = findFriend(friends, 'Poly');
console.log(r1);

const r2 = findFriend(friends, 'Chelsy');
console.log(r2);

/*
 *
 */

/*******************************
 *           Slugify           *
 *******************************/

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Data Protection and protecting your users in light of GDPR
 * How to Find Unique and Memorable Name for Your Product
 * Build Mean Stack Application
 * 11 fruitful resources to improve Javascript knowledge
 */

const slugify = function (string) {
  const words = string.toLowerCase().split(' ');
  const slug = words.join('-');

  return slug;
};

const slug1 = slugify('Top 10 benefits of React framework');
console.log(slug1);

const slug2 = slugify(
  'Data Protection and protecting your users in light of GDPR',
);
console.log(slug2);

// Делаем массив слагов

const articles = [
  'Top 10 benefits of React framework',
  'Data Protection and protecting your users in light of GDPR',
  'How to Find Unique and Memorable Name for Your Product',
  'Build Mean Stack Application',
  '11 fruitful resources to improve Javascript knowledge',
];

const slugs = [];

for (const article of articles) {
  const slug = slugify(article);
  slugs.push(slug);
}

console.log(slugs);

/*
 *
 */

/*******************************
 *           Search            *
 *******************************/

/*
 * Функция findSmallestNumber поиска самого маленького элемента массива
 */

const findSmallestNumber = function (items) {
  let smallestNumber = items[0];

  for (let i = 1; i < items.length; i += 1) {
    // console.log('items[i]: ', items[i]);
    // console.log('smallestNumber: ', smallestNumber);

    if (items[i] < smallestNumber) {
      smallestNumber = items[i];
    }
  }

  return smallestNumber;
};

console.log(findSmallestNumber([67, -3, 45, 3, 78, 90, 2]));

console.log(findSmallestNumber([67, 79, 45, 3, 2]));

/*
 *
 */

/*******************************
 *            Cards            *
 *******************************/

/*
 * Работем с коллекцией карточек в trello
 * Удалить, добавить, обновить
 */

const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
console.log(cards);

const removeCard = function (allCards, cardToRemove) {
  const index = allCards.indexOf(cardToRemove);

  // guard clause
  if (index === -1) {
    console.log('Такой карточки нет!');
    return;
  }

  allCards.splice(index, 1);
};

// removeCard(cards, 'card-32');
// console.log(cards);

// removeCard(cards, 'card-5');
// console.log(cards);

const addCard = function (allCards, cardToInsert, index) {
  allCards.splice(index, 0, cardToInsert);
};

// addCard(cards, 'card-100', 2);
// console.log(cards);

/*
 *
 */

/*******************************
 *         Arguments           *
 *******************************/

/*
 * Псевдомассив arguments и Array.from и ...
 */

const fn = function () {
  console.log([]);
  console.log(arguments);
};

fn(1, 2, 3, 4, 5, 6, 7);

/*
 * Функция сложения произвольного количества элементов
 */

// const add = function() {
//   const args = Array.from(arguments);
//   console.log(arguments);
//   console.log(args);

//   for (let i = 0; i < args.length; i += 1) {
//     console.log(args[i]);
//   }
// };

const add = function (...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));

console.log(add(1, 2, 4, 5, 6));

/*
 * Функция прикрепления тега к строке
 */

const posts = ['post-1', 'post-2', 'post-3', 'post-4'];
const tag = '#jqueryrules';

// const postsWithTag = [];

// for (const post of posts) {
//   postsWithTag.push(`${post}${tag}`);
// }

// console.log(postsWithTag);

const addTag = function (tag, ...args) {
  const postsWithTag = [];

  for (const arg of args) {
    postsWithTag.push(`${arg}${tag}`);
  }

  return postsWithTag;
};

console.log(addTag('#jqueryrules', 'post-1', 'post-2'));
console.log(addTag('#react', 'post-1', 'post-2', 'post-3'));
console.log(addTag('#redux', 'post-1', 'post-2', 'post-3', 'post-4'));
