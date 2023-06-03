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

const cards = [
  {
    heading: 'My Recent Works',
  },
  {
    img1: 'images/todo_1.png',
    img2: 'images/todo.png',
    heading: 'TO DO LIST APP',
    description: `A to-do list app is a productivity tool designed to help users to create and 
                  maintain lists of tasks that they need to complete and it allows user to edit
                  their tasks even after the task is saved. Built with CSS, HTML, and JAVASCRIPT. `,
    link: 'https://github.com/tumainimaganiko/Portfolio',
    imgCard: 'images/todo.png',
    details: ` A to-do list app is a productivity tool designed to help users to create and 
                maintain lists of tasks that they need to complete and it allows user to edit their tasks even after the task is saved. Built with CSS, HTML, and JAVASCRIPT. `,
    sourceLink: 'https://github.com/tumainimaganiko/To-Do-Lists',
    liveLink: 'https://tumainimaganiko.github.io/To-Do-Lists/dist/',
  },
  {
    heading: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    imgCard: 'images/10 image.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    heading: 'Website Portfolio',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    imgCard: 'images/10 image.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    heading: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    imgCard: 'images/10 image.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    heading: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    imgCard: 'images/10 image.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    heading: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    imgCard: 'images/10 image.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
  {
    heading: 'Website Portfolio',
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: '',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    imgCard: 'images/10 image.png',
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: '',
  },
];

const works = document.querySelector('.works');
function inputFunction(value, index) {
  const div = document.createElement('div');
  div.id = index;
  if (index === 0) {
    div.classList.add('card-1','flex');
    div.innerHTML = `
    <h2 class="font-Crete" >${value.heading}</h2>
    <hr>
    `;
  } else if (index === 1) {
    div.className = 'card-2';
    div.id = index;
    div.innerHTML = `
    <img id="gym" src="${value.img2}" alt="Placeholder">
    <div id="1">
        <h3 id="story" class="font-Crete">${value.heading}</h3>
    <p class="font-Inter">${value.description}</p>
    <ul class="link-1 btn flex">
        <li><a class="letter-spacing" href="#">CSS</a></li>
        <li><a class="letter-spacing" href="#">HTML</a></li>
        <li><a class="letter-spacing" href="#">Bootstrap</a></li>
        <li><a class="letter-spacing" href="#">RUBY</a></li>
    </ul>
    <a class="see-project btn-click button-1" href="">See project</a>
    </div>
    `;
  } else {
    div.className = 'card-3';
    div.id = index;
    div.innerHTML = `
  <h2 class="font-Crete">${value.heading}</h2>
  <p class="letter-spacing">${value.description}</p>
  <ul class="link-1 flex">
      <li><a href="#">HTML</a></li>
      <li><a href="#">Bootstrap</a></li>
      <li><a href="#">RUBY</a></li>
  </ul>
  <a  class="see-project none btn-click" href="">See project</a>
  `;
  }
  works.appendChild(div);
}
cards.forEach(inputFunction);

const btnClick = document.querySelectorAll('.btn-click');

btnClick.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const x = btn.parentNode.id;
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'block';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
    <div class="modal-header">
    <h2 class="h2-color font-Roboto">${cards[x].heading}</h2>
    <button class="close-button">&times;</button>
</div>
<ul>
    <li class="font-Poppins"><a href="#">HTML</a></li>
    <li class="font-Poppins"><a href="#">Bootstrap</a></li>
    <li class="font-Poppins"><a href="#">Ruby on Rails</a></li>
</ul>
<div class="modal-body">
   
    <img src="${cards[x].imgCard}" alt="">
    <div>
        <p>${cards[x].details}</p>
        <ul class="bottom-btn">
            <li id="first-list" class="font-Poppins flex"><a href="${cards[x].liveLink}" target="_blank"><span>See live</span><img src="images/watch.png" alt=""></a></li>
            <li class="font-Poppins flex"><a href="${cards[x].sourceLink}" target="_blank"><span>See Source</span><img src="images/github.png" alt=""></a></li>
        </ul>
    </div>
</div>
</div>
    `;
    works.append(modal);
  });
});

document.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal');
  const target = e.target.closest('.close-button');
  const overlay = document.querySelector('#overlay');
  if (target) {
    modal.remove();
    overlay.style.display = 'none';
    // overlay.classList.add('hidden');
  }
});

// Data preservation
const fullname = document.querySelector('#fullname');
const message = document.querySelector('#sms');

const saveLocal = () => {
  const storeLocal = {
    email: emailInput.value,
    fullname: fullname.value,
    message: message.value,
  };
  localStorage.setItem('formdata', JSON.stringify(storeLocal));
};

emailInput.addEventListener('input', saveLocal);
fullname.addEventListener('input', saveLocal);
message.addEventListener('input', saveLocal);
const objLocal = JSON.parse(localStorage.getItem('formdata'));
if (objLocal) {
  emailInput.value = objLocal.email;
  fullname.value = objLocal.fullname;
  message.value = objLocal.message;
}

// <img src="${value.imgLine}" alt="line">