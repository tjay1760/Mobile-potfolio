/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
const hamburger = document.querySelector('.hamburger-icon');
const Dropdownmenu = document.querySelector('.hidden-menu');
const closeMenu = document.querySelector('.dropdown-x-icon');
const hidemenu = document.getElementsByClassName('nav-dropdown-item-link');
hamburger.addEventListener('click', () => {
  Dropdownmenu.classList.add('show');
});
const remove = function r() {
  Dropdownmenu.classList.remove('show');
};
closeMenu.addEventListener('click', remove);
for (let i = 0; i < hidemenu.length; i++) {
  hidemenu[i].addEventListener('click', remove);
}
const data = [
  {
    imgSrc: './media/tjaypodcastmobile.jpeg',
    alt: 'The Tjay Pod',
    title: 'Tjay Pod',
    canopy: 'TJAY',
    backEnd: 'Full Stack Dev',
    year: '2023',
    detail: 'Every day we are intrigued by the metaphysical. Inspired by the best in us and driven by intution to achieve feats that appear to be beyond our abilities. In this podcast, we explore various elements and aspects of reality that would be often overlooked by conventional practice and media.',
    languages: ['html', 'css', 'wrdpress'],
    lorem: 'Every day we are intrigued by the metaphysical. Inspired by the best in us and driven by intution to achieve feats that appear to be beyond our abilities. In this podcast, we explore various elements and aspects of reality that would be often overlooked by conventional practice and media.',
  },
  {
    imgSrc: './media/Awsomebooksmobile.jpeg',
    alt: 'Awsome books',
    title: 'Awesome books',
    canopy: 'AWESOME BOOKS',
    backEnd: 'Full stack dev',
    year: '2023',
    detail: 'A book catalogue for managing your books',
    languages: ['html', 'css', 'javascript'],
    lorem: 'A book catalogue for managing your books',
  },
  {
    imgSrc: '/media/todolistmobile.jpeg',
    alt: 'Todolist',
    title: 'Todolist',
    canopy: 'TODOLIST',
    backEnd: 'Back End Dev',
    year: '2023',
    detail: 'A web app that helps one manage their tasks',
    languages: ['html', 'css', 'javascript'],
    lorem: 'A web app that helps one manage their tasks',
  },
  {
    imgSrc: '/media/ShakyscookoutMobile.jpeg',
    alt: 'Shakys cookout',
    title: 'Shakys cookout',
    canopy: 'Shakys Cookout',
    backEnd: 'Full stack dev',
    year: '2023',
    detail: 'An event page for the shakys cookout',
    languages: ['html', 'css', 'javascript'],
    lorem: 'Shakys Cookout is an annual event that brings together people from various industries to network, socialize, and enjoy delicious food. It provides an opportunity for professionals to come together exchange ideas and build relationships in a relaxed and fun environment.',
    liveLink: '',
    gitLink: '',
  },
];
const works = [
  {
    title: 'Shakys Cookout',
    company: 'SHAKYS',
    role: 'Front end development',
    year: '2023',
    description: 'The page is a landing page for the Shakys Cookout event',
    technologies: ['html', 'css', 'javascript'],
    image: './media/Shakyscookout.png',
    lorem: 'Shakys Cookout is an annual event that brings together people from various industries to network, socialize, and enjoy delicious food. It provides an opportunity for professionals to come together exchange ideas and build relationships in a relaxed and fun environment.',
    liveLink: 'https://gorgeous-youtiao-23872f.netlify.app/about.html',
    gitLink: 'https://github.com/tjay1760/Shakys-Cookout',
  },
  {
    title: 'To-do list',
    company: 'Private Development',
    role: 'Full stack development',
    year: '2023',
    description: 'The to do list web app aloows users to enter their to-do items and add them to their to-do list.',
    technologies: ['html', 'css', 'javascript'],
    image: '/media/TodoList.png',
    lorem: 'This to do list application allows users to enter their to-do items and add them to their to-do list.',
    liveLink: 'https://silver-hotteok-3a00cf.netlify.app/',
    gitLink: 'https://github.com/tjay1760/To-do-List',
  },
  {
    title: 'Awesome books',
    company: 'Private Development',
    role: 'Full Stack Dev',
    year: '2023',
    description: 'an application allows users to keep track of their books',
    technologies: ['html', 'css', 'javascript'],
    image: './media/Awsomebooks.png',
    lorem: 'An application that allows one to add books an manage them all together',
    liveLink: 'https://frolicking-sfogliatella-66dcdc.netlify.app/',
    gitLink: 'https://github.com/tjay1760/Awesome-books',
  },
  {
    title: 'Tjay Podcast',
    company: 'Tjaypod',
    role: 'Lead Developer',
    year: '2023',
    description: 'A project that allows users to create podcasts',
    technologies: ['wordpress, html', 'css'],
    image: './media/Tjaypod.png',
    lorem: 'Every day we are intrigued by the metaphysical. Inspired by the best in us and driven by intution to achieve feats that appear to be beyond our abilities. In this podcast, we explore various elements and aspects of reality that would be often overlooked by conventional practice and media.',
    liveLink: 'https://thetjaypod.wordpress.com/',
    gitLink: 'https://thetjaypod.wordpress.com/',
  },
];
const DesktopWorksection = document.createElement('section');
DesktopWorksection.id = 'my-work';
DesktopWorksection.classList.add('desktop-work');

works.forEach((item) => {
  const desktopcard = document.createElement('div');
  desktopcard.classList.add('work');
  desktopcard.classList.add('card');

  const desktopimage = document.createElement('img');
  desktopimage.classList.add('work-image');
  desktopimage.src = item.image;

  const desktopCardinfo = document.createElement('div');
  desktopCardinfo.classList.add('card-info');

  const desktopTopic = document.createElement('h2');
  desktopTopic.textContent = item.title;
  desktopTopic.classList.add('project-title');
  desktopCardinfo.appendChild(desktopTopic);

  const desktopDescription = document.createElement('ul');
  desktopDescription.classList.add('project-summary');

  const desktopcanopy = document.createElement('li');
  desktopcanopy.id = 'canopy';
  desktopcanopy.innerText = item.company;
  desktopDescription.appendChild(desktopcanopy);

  const desktopRole = document.createElement('li');
  desktopRole.id = 'back-end';

  const dotimg = document.createElement('img');
  dotimg.src = './media/Counter.png';
  dotimg.alt = '';
  const dotimg2 = document.createElement('img');
  dotimg2.src = './media/Counter.png';
  dotimg2.alt = '';
  desktopRole.appendChild(dotimg);

  const backEndText = document.createElement('span');
  backEndText.innerText = item.role;
  desktopRole.appendChild(backEndText);
  desktopDescription.appendChild(desktopRole);

  const year = document.createElement('li');
  year.id = 'Year';
  year.appendChild(dotimg2);

  const yearText = document.createElement('span');
  yearText.innerText = item.year;
  year.appendChild(yearText);
  desktopDescription.appendChild(year);

  const detail = document.createElement('p');
  detail.setAttribute('class', 'card-text');
  detail.textContent = item.description;
  detail.id = 'project-detail';

  const langList = document.createElement('ul');
  langList.classList.add('lang-list');
  const proglanguages = item.technologies;
  proglanguages.forEach((language) => {
    const lang = document.createElement('li');
    lang.id = 'lang';
    lang.textContent = language;
    langList.appendChild(lang);
  });
  const seeProjectBtn = document.createElement('button');
  seeProjectBtn.classList.add('see-project1');
  seeProjectBtn.textContent = 'See Project';

  desktopCardinfo.appendChild(desktopTopic);
  desktopCardinfo.appendChild(desktopDescription);
  desktopCardinfo.appendChild(detail);
  desktopCardinfo.appendChild(langList);
  desktopCardinfo.appendChild(seeProjectBtn);

  desktopcard.appendChild(desktopimage);
  desktopcard.appendChild(desktopCardinfo);

  DesktopWorksection.appendChild(desktopcard);
});
const dynamicdesktopSection = document.getElementById('dynamic-desktop');
dynamicdesktopSection.appendChild(DesktopWorksection);
// dynamic mobile
const workSection = document.createElement('section');
workSection.id = 'my-work';
workSection.classList.add('mobile-works');

data.forEach((item) => {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.classList.add('all-content');

  const image = document.createElement('img');
  image.setAttribute('src', item.imgSrc);
  image.setAttribute('alt', item.alt);
  image.classList.add('card-img-top');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.setAttribute('class', 'card-title');
  title.id = 'project-title';
  title.textContent = item.title;
  title.classList.add('project-title');

  const ul = document.createElement('ul');
  ul.classList.add('project-summary');

  const canopy = document.createElement('li');
  canopy.id = 'canopy';
  canopy.innerText = item.canopy;
  ul.appendChild(canopy);

  const backEnd = document.createElement('li');
  backEnd.id = 'back-end';

  const dotimg = document.createElement('img');
  dotimg.src = './media/Counter.png';
  dotimg.alt = '';
  const dotimg2 = document.createElement('img');
  dotimg2.src = './media/Counter.png';
  dotimg2.alt = '';
  backEnd.appendChild(dotimg);

  const backEndText = document.createElement('span');
  backEndText.innerText = item.backEnd;
  backEnd.appendChild(backEndText);
  ul.appendChild(backEnd);

  const year = document.createElement('li');
  year.id = 'Year';
  year.appendChild(dotimg2);

  const yearText = document.createElement('span');
  yearText.innerText = item.year;
  year.appendChild(yearText);
  ul.appendChild(year);

  const detail = document.createElement('p');
  detail.setAttribute('class', 'card-text');
  detail.textContent = item.detail;
  detail.id = 'project-detail';

  const langList = document.createElement('ul');
  langList.classList.add('lang-list');
  const proglanguages = item.languages;
  proglanguages.forEach((language) => {
    const lang = document.createElement('li');
    lang.id = 'lang';
    lang.textContent = language;
    langList.appendChild(lang);
  });
  const seeProjectBtn = document.createElement('button');
  seeProjectBtn.classList.add('see-project');
  seeProjectBtn.textContent = 'See Project';

  cardBody.appendChild(title);
  cardBody.appendChild(ul);
  cardBody.appendChild(detail);
  cardBody.appendChild(langList);
  cardBody.appendChild(seeProjectBtn);

  card.appendChild(image);
  card.appendChild(cardBody);

  workSection.appendChild(card);
});
const dynamicMobileSection = document.getElementById('dynamic-mobile');
dynamicMobileSection.appendChild(workSection);
// Desktop Pop-up
const desktopPopup = document.getElementById('desktop-popup');

function desktopopenPopup() {
  desktopPopup.classList.remove('hide-desktop-popup');
}
function desktopclosePopup() {
  desktopPopup.classList.add('hide-desktop-popup');
}

// closing button
const desktopcloseButton = document.createElement('div');
desktopcloseButton.classList.add('popup-close');
desktopcloseButton.innerHTML = 'X';
desktopcloseButton.addEventListener('click', desktopclosePopup);

const bigbuttons = document.querySelectorAll('.see-project1');
const bigbuttonsArray = Array.from(bigbuttons);

let desktopisPopupOpen = false;
// eslint-disable-next-line no-plusplus
const mypage = document.getElementsByClassName('my-page');

for (let i = 0; i < bigbuttonsArray.length; i++) {
  bigbuttonsArray[i].addEventListener('click', () => {
    if (desktopisPopupOpen) {
      desktopPopup.removeChild(desktopPopup.lastChild);
      desktopPopup.removeChild(desktopPopup.lastChild);
    }
    const desktopPopupcard = document.createElement('div');
    desktopPopupcard.classList.add('desktoppopup-card');
    const desktopprojectTopic = document.createElement('h2');
    desktopprojectTopic.classList.add('popup-project-topic');
    desktopprojectTopic.innerHTML = works[i].title;
    desktopprojectTopic.classList.add('project-title');
    desktopPopup.appendChild(desktopcloseButton);
    desktopPopupcard.appendChild(desktopprojectTopic);
    const desktopprojectSummary = document.createElement('ul');
    desktopprojectSummary.classList.add('project-summary');

    const desktopcanopy = document.createElement('li');
    desktopcanopy.id = 'canopy';
    desktopcanopy.innerHTML = works[i].company;

    const desktopbackEndDev = document.createElement('li');
    desktopbackEndDev.id = 'back-end';

    const desktopbackEndDevImg = document.createElement('img');
    desktopbackEndDevImg.src = './media/Counter.png';
    desktopbackEndDevImg.alt = '';
    desktopbackEndDev.appendChild(desktopbackEndDevImg);
    desktopbackEndDev.innerHTML += 'Back End Dev';

    const desktopyear = document.createElement('li');
    desktopyear.id = 'Year';

    const desktopyearImg = document.createElement('img');
    desktopyearImg.src = './media/Counter.png';
    desktopyearImg.alt = '';
    desktopyear.appendChild(desktopyearImg);
    desktopyear.innerHTML += works[i].year;

    desktopprojectSummary.appendChild(desktopcanopy);
    desktopprojectSummary.appendChild(desktopbackEndDev);
    desktopprojectSummary.appendChild(desktopyear);
    desktopPopupcard.appendChild(desktopprojectSummary);

    const desktoppopupImg = document.createElement('img');
    desktoppopupImg.classList.add('desktop-popup-img');
    desktoppopupImg.src = works[i].image;
    desktopPopupcard.appendChild(desktoppopupImg);
    const desktopprojectDetail = document.createElement('div');
    desktopprojectDetail.id = 'project-detail';
    const desktopdetailPara = document.createElement('p');
    desktopdetailPara.innerHTML = works[i].lorem;
    desktopprojectDetail.appendChild(desktopdetailPara);
    const desktoplangList = document.createElement('ul');
    desktoplangList.classList.add('lang-list');

    const popupcontentbox = document.createElement('div');
    popupcontentbox.classList.add('popup-content-box');

    const langbuttonholder = document.createElement('div');
    langbuttonholder.classList.add('lang-button-holder');

    const desktophtml = document.createElement('li');
    desktophtml.id = 'lang';
    desktophtml.innerHTML = 'html';

    const desktopcss = document.createElement('li');
    desktopcss.id = 'lang';
    desktopcss.innerHTML = 'css';

    const desktopjavascript = document.createElement('li');
    desktopjavascript.id = 'lang';
    desktopjavascript.innerHTML = 'javascript';

    desktoplangList.appendChild(desktophtml);
    desktoplangList.appendChild(desktopcss);
    desktoplangList.appendChild(desktopjavascript);

    const desktoppopupLine = document.createElement('div');
    desktoppopupLine.classList.add('popup-line');

    const desktoppopupButtondiv = document.createElement('div');
    const desktopseeLivebutton = document.createElement('a');
    desktopseeLivebutton.innerHTML = 'See live';
    const desktopseeLivebuttonimg = document.createElement('img');
    desktopseeLivebuttonimg.src = './media/Seelive.png';
    desktopseeLivebutton.appendChild(desktopseeLivebuttonimg);

    desktopseeLivebutton.href = works[i].liveLink;
    desktopseeLivebutton.target = '_blank';
    const desktopseeSourcebuttonimg = document.createElement('img');
    desktopseeLivebutton.classList.add('popupbutton-child');
    const desktopseeSourcebutton = document.createElement('a');
    desktopseeSourcebutton.innerHTML = 'See source';
    desktopseeSourcebuttonimg.src = './media/Seesource.png';
    desktopseeSourcebutton.classList.add('popupbutton-child');
    desktopseeSourcebutton.appendChild(desktopseeSourcebuttonimg);
    desktopseeSourcebutton.href = works[i].gitLink;
    desktopseeSourcebutton.target = '_blank';
    desktoppopupButtondiv.appendChild(desktopseeLivebutton);
    desktoppopupButtondiv.appendChild(desktopseeSourcebutton);
    desktoppopupButtondiv.classList.add('popup-buttondiv');

    popupcontentbox.appendChild(desktopprojectDetail);
    langbuttonholder.appendChild(desktoplangList);
    langbuttonholder.appendChild(desktoppopupLine);
    langbuttonholder.appendChild(desktoppopupButtondiv);
    popupcontentbox.appendChild(langbuttonholder);
    desktopPopupcard.appendChild(popupcontentbox);
    desktopPopup.appendChild(desktopPopupcard);
    desktopopenPopup();
    for (let i = 0; i < mypage.length; i++) {
      mypage[i].style.filter = 'blur(10px)';
    }
    desktopcloseButton.addEventListener('click', () => {
      for (let i = 0; i < mypage.length; i++) {
        mypage[i].style.filter = 'none';
      }
    });
    desktopisPopupOpen = true;
  });
}

// Mobile Pop-up

const mobilePopup = document.getElementById('mobile-popup');

function openPopup() {
  mobilePopup.classList.remove('hide-mobile-popup');
}
function closePopup() {
  mobilePopup.classList.add('hide-mobile-popup');
}
// Pop-up elements
// closing button
const closeButton = document.createElement('div');
closeButton.classList.add('popup-close');
closeButton.innerHTML = 'X';
closeButton.addEventListener('click', closePopup);

const buttons = document.querySelectorAll('.see-project');
const buttonsArray = Array.from(buttons);
mobilePopup.appendChild(closeButton);
let isPopupOpen = false;
for (let i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener('click', () => {
    if (isPopupOpen) {
      mobilePopup.removeChild(mobilePopup.lastChild);
      mobilePopup.removeChild(mobilePopup.lastChild);
      mobilePopup.removeChild(mobilePopup.lastChild);
      mobilePopup.removeChild(mobilePopup.lastChild);
      mobilePopup.removeChild(mobilePopup.lastChild);
      mobilePopup.removeChild(mobilePopup.lastChild);
      mobilePopup.removeChild(mobilePopup.lastChild);
    }

    const projectTopic = document.createElement('h2');
    projectTopic.classList.add('popup-project-topic');
    projectTopic.innerHTML = data[i].title;
    projectTopic.id = 'project-title';
    mobilePopup.appendChild(projectTopic);
    const projectSummary = document.createElement('ul');
    projectSummary.classList.add('project-summary');

    const canopy = document.createElement('li');
    canopy.id = 'canopy';
    canopy.innerHTML = data[i].canopy;

    const backEndDev = document.createElement('li');
    backEndDev.id = 'back-end';

    const backEndDevImg = document.createElement('img');
    backEndDevImg.src = './media/Counter.png';
    backEndDevImg.alt = '';
    backEndDev.appendChild(backEndDevImg);
    backEndDev.innerHTML += 'Back End Dev';

    const year = document.createElement('li');
    year.id = 'Year';

    const yearImg = document.createElement('img');
    yearImg.src = './media/Counter.png';
    yearImg.alt = '';
    year.appendChild(yearImg);
    year.innerHTML += data[i].year;

    projectSummary.appendChild(canopy);
    projectSummary.appendChild(backEndDev);
    projectSummary.appendChild(year);
    mobilePopup.appendChild(projectSummary);

    const popupImg = document.createElement('img');
    popupImg.src = data[i].imgSrc;
    popupImg.alt = data[i].imgAlt;
    mobilePopup.appendChild(popupImg);
    const projectDetail = document.createElement('div');
    projectDetail.id = 'project-detail';
    const detailPara = document.createElement('p');
    detailPara.innerHTML = data[i].detail;
    projectDetail.appendChild(detailPara);
    mobilePopup.appendChild(projectDetail);
    const langList = document.createElement('ul');
    langList.classList.add('lang-list');

    const html = document.createElement('li');
    html.id = 'lang';
    html.innerHTML = 'html';

    const css = document.createElement('li');
    css.id = 'lang';
    css.innerHTML = 'css';

    const javascript = document.createElement('li');
    javascript.id = 'lang';
    javascript.innerHTML = 'javascript';

    langList.appendChild(html);
    langList.appendChild(css);
    langList.appendChild(javascript);
    mobilePopup.appendChild(langList);
    const popupLine = document.createElement('div');
    popupLine.classList.add('popup-line');
    mobilePopup.appendChild(popupLine);
    const popupButtondiv = document.createElement('div');
    const seeLivebutton = document.createElement('button');
    seeLivebutton.innerHTML = 'See live';
    const seeLivebuttonimg = document.createElement('img');
    seeLivebuttonimg.src = './media/Seelive.png';
    seeLivebutton.appendChild(seeLivebuttonimg);
    const seeSourcebuttonimg = document.createElement('img');
    seeLivebutton.classList.add('popupbutton-child');
    const seeSourcebutton = document.createElement('button');
    seeSourcebutton.innerHTML = 'See source';
    seeSourcebuttonimg.src = './media/Seesource.png';
    seeSourcebutton.classList.add('popupbutton-child');
    seeSourcebutton.appendChild(seeSourcebuttonimg);
    popupButtondiv.appendChild(seeLivebutton);
    popupButtondiv.appendChild(seeSourcebutton);
    popupButtondiv.classList.add('popup-buttondiv');
    mobilePopup.appendChild(popupButtondiv);
    for (let i = 0; i < mypage.length; i++) {
      mypage[i].style.filter = 'blur(10px)';
    }
    closeButton.addEventListener('click', () => {
      for (let i = 0; i < mypage.length; i++) {
        mypage[i].style.filter = 'none';
      }
    });
    openPopup();
    isPopupOpen = true;
  });
}
const form = document.getElementById('my-contact-form');
const email = document.getElementById('contact-form-email');
const errormsg = document.getElementById('contact-form-error');

form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    errormsg.style.display = 'block';
    e.preventDefault();
  }
});