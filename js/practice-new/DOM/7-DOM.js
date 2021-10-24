/*
 * Create a function that iterates over an array
 * and lists the elements of that array
 */

const arr = [
  'Dmitriy Bazhenov',
  'Vova Chelidze',
  'Dmitry Grinchenko',
  'Stanislav Karasyk',
  'Maxim Kazachuk',
  'Ivan Khailo',
  'Misha Khmara',
  'Vitaly Kornienko',
  'bogdan Litvin',
  'Dmytro orgish',
  'Pavel Sakun',
];

const groupList = document.querySelector('.group-list');

const createList = (ul, arr) => {
  arr.forEach(element => {
    const item = document.createElement('li');
    item.textContent = element;
    ul.append(item);
  });
};

createList(groupList, arr);

/*
 *
 * Create list of three random images
 */

const body = document.querySelector('body');

for (let i = 0; i < 3; i += 1) {
  const number = Math.round(Math.random() * 100);
  body.insertAdjacentHTML(
    'beforeend',
    `<img src=https://picsum.photos/id/${number + i}/300></img>`,
  );
}
