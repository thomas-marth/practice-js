// function getUserData(data) {
//   const userData = localStorage.getItem(data);
//   const parsedUser = JSON.parse(userData);
//   return parsedUser;
// }

// getUserData('session_json');

function getUserData(data) {
  const userData = localStorage.getItem(data);
  const parsedUser = JSON.parse(userData);
  return parsedUser.user; //?
}

getUserData('session_json');
