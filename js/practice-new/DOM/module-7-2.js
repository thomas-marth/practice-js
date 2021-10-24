const filterNodes = (selector, callback) => {
  let content = document.querySelector(selector);

  [...content.childNodes].filter(callback).forEach((node, index) => {
    if (!index) content.innerHTML = '';
    content.append(node);
  });
};

const createrElement = (conteinerSelector, tag, data = {}, node = '') => {
  let conteiner;
  if (conteinerSelector) conteiner = document.querySelector(conteinerSelector);

  let nodeElement = document.createElement(tag);

  for (let key in data) nodeElement.setAttribute(key, data[key]);

  if (typeof node !== 'string') nodeElement.innerHTML = node.outerHTML;
  else nodeElement.textContent = node;

  if (conteiner) conteiner.append(nodeElement);

  return nodeElement;
};

// let node = createrElement(false, 'span', {test:3}, 'hello word!!!');
// let node1 = createrElement(false, 'span', {test:2}, node1);
// createrElement('.container .text-center', 'p', {test:1}, document.querySelector('h1'));

//filterNodes('#center-content', node => node.tagName === 'DIV' );
//filterNodes('.container .text-center', node => (node.tagName + '').toLowerCase() === 'div');
// filterNodes('.container .text-center', node => node.tagName !== 'H1');

//-----------------------------

const example = document
  .querySelector('#center-content > .card')
  .cloneNode(true);

document.querySelector('#control-panel').addEventListener('click', event => {
  if (!event.target.dataset.type) return false;

  if (event.target.dataset.type === 'add') {
    let nodeNew = example.cloneNode(true);

    let tarifNodes = nodeNew.querySelectorAll('li');

    tarifNodes[0].textContent = 'new element 1';
    tarifNodes[1].textContent = 'new element 2';
    tarifNodes[2].textContent = 'new element 3';
    tarifNodes[3].textContent = 'new element 4';

    nodeNew.querySelector('h1').childNodes[0].textContent = '$50 ';

    nodeNew.querySelector('button').textContent = 'New button';
    nodeNew.querySelector('h4').textContent = 'text-center';

    document.querySelector('#center-content').append(nodeNew);

    return true;
  }

  if (event.target.dataset.type === 'remove')
    document.querySelector('#center-content > div:last-child').remove();

  return true;
});

const imgNode = document.createElement('img');

imgNode.width = 500;
imgNode.src = 'https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg';

imgNode.addEventListener('load', event => {
  document.querySelector('.container').append(imgNode);
});

document.querySelector('form button').addEventListener('submit', event => {
  console.log('ok');
});

//
//
//

changeEven([1, 2, 3, 4, 5], 10);

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const arr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      arr.push(numbers[i] + value);
      // console.log(numbers[i]);
    } else {
      arr.push(numbers[i]);
      // console.log(arr);
    }
  }
  return arr;
  // Пиши код выше этой строки
}

changeEven([1, 2, 3, 4, 5], 10);

//
//
//

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths);
