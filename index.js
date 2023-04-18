const data = [
  {
    id: 'portfolio-1',
    name: 'Math-magician',
    job: {
      client: 'Microverse',
      role: 'Back End Dev',
      year: '2022',
    },
    description: {
      summary: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',

      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/tonic.svg.svg',
      desktop: './assets/nature.svg',
    },
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-left',
  },
  {
    id: 'portfolio-2',
    name: 'Recipe-App',
    job: {
      client: 'Microverse',
      role: 'Back End Dev',
      year: '2022',
    },
    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/multi-post-2.svg',
      desktop: './assets/multi-post-2.svg',
    },
    technologies: {
      html: 'html',
      ror: 'ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-right',
  },
  {
    id: 'portfolio-3',
    name: 'Rails Budget App',
    job: {
      client: 'Microverse',
      role: 'Full Stack Dev',
      year: '2023',
    },
    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/tonic-2.svg',
      desktop: './assets/tonic.svg.svg',
    },
    technologies: {
      html: 'html',
      ror: 'Ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-left',
  },
  {
    id: 'portfolio-4',
    name: 'Awesome-Books',
    job: {
      client: 'Microverse',
      role: 'Full Stack Dev',
      year: '2022',
    },
    description: {
      summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/multi-post-2.svg',
      desktop: './assets/multi-post-1.svg',
    },
    technologies: {
      html: 'html',
      ror: 'Ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-left',
  },
];

const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const navigation = document.querySelector('.nav-ul');
const textPortfolio = document.querySelector('.nav-text-1');
const about = document.querySelector('.nav-text-2');
const contact = document.querySelector('.nav-text-3');
const right1 = document.querySelector('#right-1');
const right2 = document.querySelector('#right-2');
const right3 = document.querySelector('#right-3');
const down1 = document.querySelector('#down-1');
const down2 = document.querySelector('#down-2');
const down3 = document.querySelector('#down-3');
const languages = document.querySelector('.language-list');
const frameworks = document.querySelector('.frameworks-2');
const skills = document.querySelector('.skills-2');

right1.addEventListener('click', (e) => {
  e.preventDefault();
  down1.classList.remove('hide');
  languages.classList.remove('hide');
  right1.classList.add('hide');
});

down1.addEventListener('click', (e) => {
  e.preventDefault();
  right1.classList.remove('hide');
  down1.classList.add('hide');
  languages.classList.add('hide');
});

right2.addEventListener('click', (e) => {
  e.preventDefault();
  down2.classList.remove('hide');
  frameworks.classList.remove('hide');
  right2.classList.add('hide');
});

down2.addEventListener('click', (e) => {
  e.preventDefault();
  right2.classList.remove('hide');
  down2.classList.add('hide');
  frameworks.classList.add('hide');
});

right3.addEventListener('click', (e) => {
  e.preventDefault();
  down3.classList.remove('hide');
  skills.classList.remove('hide');
  right3.classList.add('hide');
});

down3.addEventListener('click', (e) => {
  e.preventDefault();
  right3.classList.remove('hide');
  down3.classList.add('hide');
  skills.classList.add('hide');
});

hamburger.addEventListener('click', (e) => {
  e.preventDefault();

  navigation.classList.toggle('show');
  hamburger.classList.add('hide');
  close.classList.remove('hide');
  textPortfolio.classList.add('menu-text');
  about.classList.add('menu-text');
  contact.classList.add('menu-text');
});

close.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  navigation.classList.remove('show');
  close.classList.add('hide');
});

textPortfolio.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
  close.classList.add('hide');
});

about.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
  close.classList.add('hide');
});

contact.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
  close.classList.add('hide');
});

// popup
const portfolio = document.querySelector('#portfolio');
const modal = document.querySelector('#myModal');

portfolio.classList.add('works');

Array.from(portfolio.children).forEach((child, index) => {
  child.innerHTML = `
  <section class="${data[index].card}">
    <ul>
      <li><img src="${data[index].image.mobile}" alt="icon" class="img-1-1" /></li>
      <li><img src="${data[index].image.desktop}" alt="icon" class="img-1-2" /></li>
    </ul>
    <div class="block-1">
      <div class="text-group">
        <h2 class="lg-text-2">${data[index].name}</h2>
        <div class="client-info">
          <h3 class="client">${data[index].job.client}</h3>
          <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
          <h3 class="role">${data[index].job.role}</h3>
          <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
          <h3 class="year-label">${data[index].job.year}</h3>
        </div>
      </div>
      <h3 class="sm-text-2">${data[index].description.summary}</h3>
      <ul class="tags">
        <li>${data[index].technologies.html}</li>
        <li>${data[index].technologies.css}</li>
        <li>${data[index].technologies.javascript}</li>
      </ul>
      <div class="actions" id="${data[index].id}">
        <button class="btn" id="btn" type="button">See Project</button>
      </div>
    </div>
  </section>`;
});

// modals
Array.from(portfolio.children).forEach((item, index) => {
  item.firstElementChild.lastElementChild.lastElementChild.firstElementChild.addEventListener(
    'click',
    () => {
    modal.innerHTML = `
    // <!-- Modal content -->
    <section class="modal-content">
      <div class="popup-text-group">
        <div class="text-group">
          <h2 class="popup-text-lg">${data[index].name}</h2>
          <div class="client-info">
            <h3 class="client">${data[index].job.client}</h3>
            <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
            <h3 class="role">${data[index].job.role}</h3>
            <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
            <h3 class="year-label">${data[index].job.year}</h3>
          </div>
        </div>
        <span class="close">&times;</span>
      </div>
      <ul>
        <li><img src="${data[index].image.mobile}" alt="icon" class="img-1-1" /></li>
        <li><img src="${data[index].image.desktop}" alt="icon" class="img-1-2 popup-img" /></li>
      </ul>
      <div class="popup-bottom">
        <p class="popup-text-sm">${data[index].description.portfolio}</p>
        <div class="popup-block">
          <ul class="tags ${data[index].id}">
          </ul>
          <div class="popup-actions">
            <button class="btn btnImg" id="btn" type="button">See Live
              <img src="./assets/Icon.svg" alt="icon" id="imgIcon" />
            </button>
            <button class="btn btnImg" id="btn" type="button">See Source
              <img src="./assets/github.svg.svg" alt="icon" id="imgIcon" />
            </button>
          </div>
        </div>
      </div>
    </section>
    `;

    const ulList = document.querySelector('.popup-block .tags');

    Object.keys(data[index].technologies).forEach((e) => {
      ulList.innerHTML += `<li>${data[index].technologies[e]}</li>`;
    });

    modal.style.display = 'block';
    const span = document.getElementsByClassName('close')[0];
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});

// form validation
const form = document.querySelector('.form');
const emailInput = form.elements.email;

const INPUT_LOWERCASE = 'Error : Please enter a lowercase input';

function showMessage(input, message, type) {
  const msg = document.querySelector('.error-text');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidLowercase) {
  if (input.value === input.value.toLowerCase()) {
    return true;
  }
  return showError(input, invalidLowercase);
}

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const emailValid = validateEmail(emailInput, INPUT_LOWERCASE);
//   if (emailValid) {
//     form.submit();
//   }
// });

// local storage
function saveUserDetails() {
  const formData = new FormData(form);
  const fullname = formData.get('fullname');
  const email = formData.get('email');
  const feedback = formData.get('feedback');
  const myFormData = { name: fullname, email, feedback };
  localStorage.setItem('myFormData', JSON.stringify(myFormData));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateEmail(emailInput, INPUT_LOWERCASE);
  if (emailValid) {
    form.submit();
    saveUserDetails();
  }
});

const stored = localStorage.getItem('myFormData');

function getUserDetails(localObj) {
  const userDetails = JSON.parse(localObj);
  form.fullname.value = userDetails.name;
  form.email.value = userDetails.email;
  form.feedback.value = userDetails.feedback;
}

getUserDetails(stored);