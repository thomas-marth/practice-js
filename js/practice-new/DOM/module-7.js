// https://picsum.photos/id/237/200/300

// const img = document.createElement('img');
const body = document.querySelector('body');
// body.append(img);
// img.src = `https://picsum.photos/id/237/200/300`;
// img.setAttribute('alt', 'Little dogs');
// console.log(body);

for (let i = 0; i < 3; i += 1) {
  const number = Math.round(Math.random() * 100);
  body.insertAdjacentHTML(
    'afterbegin',
    `<img src='https://picsum.photos/id/${number + i}/200/300' alt='puctures'>`,
  );
}
