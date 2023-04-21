const data = [
  {
    id: 'portfolio-1',
    name: 'Math-magician',
    job: {
      client: 'Microverse',
      role: 'Front End Dev',
      year: '2022',
    },
    description: {
      summary: '"Math magicians" is a website for all fans of mathematics.',

      portfolio:
        'It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    },
    image: {
      mobile: './assets/desktop-screenshot.PNG',
      desktop: './assets/desktop-screenshot.PNG',
    },
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-left',
    source: 'https://github.com/Daphineatim/Math-magician.git',
    live: 'https://melodic-basbousa-cbc1ab.netlify.app/',
  },
  {
    id: 'portfolio-2',
    name: 'Covid-19 Data App',
    job: {
      client: 'Microverse',
      role: 'Front End Dev',
      year: '2022',
    },
    description: {
      summary: 'This website is mobile friendly and has two pages.',
      portfolio:
        'The home page has the countries and the Details page shows the detailed covid data of each country selected.',
    },
    image: {
      mobile: './assets/desktop-covid.PNG',
      desktop: './assets/desktop-covid.PNG',
    },
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-right',
    source: 'https://github.com/Daphineatim/covid-data-app.git',
    live: 'https://deploy-preview-5--stellar-druid-061bd7.netlify.app/',
  },
  {
    id: 'portfolio-3',
    name: 'Leaderboard',
    job: {
      client: 'Microverse',
      role: 'Front End Dev',
      year: '2022',
    },
    description: {
      summary: 'Leaderboard that shows the scores of different players,',
      portfolio:
        'The scores and players information, fetched from an external API, the user can add his name and score as well which will be sent and stored in the external API. The project was built using JavaScript and bundled with Webpack.',
    },
    image: {
      mobile: './assets/desktop-leaderboard.PNG',
      desktop: './assets/desktop-leaderboard.PNG',
    },
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-left',
    source: 'https://github.com/Daphineatim/Leaderboard.git',
    live: 'https://bucolic-maamoul-7501d7.netlify.app/',
  },
  {
    id: 'portfolio-4',
    name: 'Space Travelers Hub',
    job: {
      client: 'Microverse',
      role: 'Front End Dev',
      year: '2022',
    },
    description: {
      summary: 'A corporation that offers services for commercial and scientific space flight',
      portfolio:
        "The users of the app will be able to reserve rockets and sign up for particular space missions.",
    },
    image: {
      mobile: './assets/mobile-space.PNG',
      desktop: './assets/desktop-space.PNG',
    },
    technologies: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
    },
    card: 'card-img-left',
    source: 'https://github.com/Daphineatim/Space-Travelers-Hub.git',
    live: 'https://adnanquinspacetravelers.netlify.app/',
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
    <!-- Modal content -->
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
          <a href="${data[index].live}" target="_blank" class="btn btnImg">Live
          <img src="./assets/Icon.svg" alt="icon" id="imgIcon" />
        </a>
        <a href="${data[index].source}" target="_blank" class="btn btnImg">Source
          <img src="./assets/github.svg.svg" alt="icon" id="imgIcon" />
        </a>
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