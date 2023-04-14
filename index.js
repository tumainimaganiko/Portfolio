const btnMenu = document.getElementById('hamburger');
const xBtn = document.getElementById('x-mark');

function myFunction() {
  const element = document.querySelector('.toolbar');
  const list = document.getElementById('option');
  element.style.display = 'none';
  list.style.display = 'block';
}

function closing() {
  const element = document.querySelector('.toolbar');
  const list = document.getElementById('option');
  element.style.display = 'flex';
  list.style.display = 'none';
}

btnMenu.addEventListener('click', myFunction);

xBtn.addEventListener('click', closing);

const btn1 = document.getElementById('about-link');
const btn2 = document.getElementById('contact-link');
const btn3 = document.getElementById('port');

btn1.addEventListener('click', closing);
btn2.addEventListener('click', closing);
btn3.addEventListener('click', closing);

const name = document.getElementById('email');
const user = document.getElementById('valid');
const x = document.getElementById('email')

user.addEventListener("submit", (event) => {
  event.preventDefault()
  if (x.value !== x.value.toLowerCase()) {
    document.getElementById('error-message').innerText = 'Error, Email must be lowercase. Form is not sent';
  } else {
    document.getElementById('error-message').innerText = '';
    user.submit();
  }
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   if (email.value !== email.value.toLowerCase()) {
//     document.getElementById('error').innerText = 'Error, Email must be lowercase. Form is not sent';
//   } else {
//     document.getElementById('error').innerText = '';
//     form.submit();
//   }
// });