const textarea = document.querySelector('.textarea');
textarea.addEventListener('input', monitorTextarea);

textarea.value = localStorage.getItem('input') || '';
console.log(textarea);

function monitorTextarea(event) {
  localStorage.setItem('input', event.currentTarget.value);
  console.log(event.currentTarget.value);
}

document.querySelector('.clear').addEventListener('click', () => {
  localStorage.removeItem('input');
  textarea.value = '';
});
