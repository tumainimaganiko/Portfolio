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
    heading: "My Recent Works",
    imgLine: "images/line.png"
  },
  {
    img1: "images/gym-image.png",
    img2: "images/gym 2.png",
    heading: "Multi-post Stories",
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s when an unknown printer took a standard dummy text.",
    link: "https://github.com/tumainimaganiko/Portfolio",
    imgCard: "images/10 image.png",
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: ""
  },
  {
    heading: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: "",
    technologies: ['HTML','Bootstrap','Ruby on Rails'],
    imgCard: "images/10 image.png",
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: ""
  },
  {
    heading:"Website Portfolio",
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: "",
    technologies: ['HTML','Bootstrap','Ruby on Rails'],
    imgCard: "images/10 image.png",
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: ""
  },
  {
    heading: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: "",
    technologies: ['HTML','Bootstrap','Ruby on Rails'],
    imgCard: "images/10 image.png",
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: ""
  },
  {
    heading:"Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: "",
    technologies: ['HTML','Bootstrap','Ruby on Rails'],
    imgCard: "images/10 image.png",
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: ""
  },
  {
    heading: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: "",
    technologies: ['HTML','Bootstrap','Ruby on Rails'],
    imgCard: "images/10 image.png",
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: ""
  },
  {
    heading:"Website Portfolio",
    description: "A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry's standard.",
    liveLink: "",
    technologies: ['HTML','Bootstrap','Ruby on Rails'],
    imgCard: "images/10 image.png",
    details: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
                    `,
    sourceLink: ""
  },
]

