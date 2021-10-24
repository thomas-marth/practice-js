// new Promise(res => {
//   const data = { test: 1 };
//   setTimeout(() => {
//     res(data);
//   }, 1000);
// }).then(data => {
//   console.log(data);
// });

const getData = async () => {
  let data = await new Promise((res, rej) => {
    setTimeout(() => {
      res({ test: 1 });
      // rej('err');
    }, 1000);
  });

  console.log(data);
};
getData();
