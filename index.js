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

const form = document.querySelector('#valid');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#error-message');

function showError(message) {
  errorMessage.innerText = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  if (emailValue !== emailValue.toLowerCase()) {
    showError('Error: Email must be lowercase. Form is not sent.');
  } else {
    showError('');
    form.submit();
  }
});
