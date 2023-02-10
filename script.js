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
    imgSrc: './media/Snapshoot Portfolio.png',
    alt: 'Tonic project snapshot',
    title: 'Tonic',
    canopy: 'CANOPY',
    backEnd: 'Back End Dev',
    year: '2023',
    detail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum istry. Lorem Ipsum han printer took a galley of type a a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15',
  },
  {
    imgSrc: './media/Snapshoot Portfolio (1).png',
    alt: 'Multi post stories project snapshot',
    title: 'Multi-Post Stories',
    canopy: 'CANOPY',
    backEnd: 'Back End Dev',
    year: '2023',
    detail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum istry. Lorem Ipsum han printer took a galley of type a a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15',
  },
  {
    imgSrc: './media/Snapshoot Portfolio (2).png',
    alt: 'Tonic project snapshot',
    title: 'Tonic',
    canopy: 'CANOPY',
    backEnd: 'Back End Dev',
    year: '2023',
    detail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum istry. Lorem Ipsum han printer took a galley of type a a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15',
  },
  {
    imgSrc: './media/Snapshoot Portfolio (3).png',
    alt: 'Multi post stories Project snapshot',
    title: 'Multi-Post Stories',
    canopy: 'CANOPY',
    backEnd: 'Back End Dev',
    year: '2023',
    detail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum istry. Lorem Ipsum han printer took a galley of type a a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15',
  },
];
const works = [
  {
    title: 'Tonic',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2023',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    image: 'media/Deskktop Snapshoot Portfolio.png',
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum istry. Lorem Ipsum han printer took a galley of type a a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15',
  },
  {
    title: 'Multi-post-stories',
    company: 'Facebook',
    role: 'Full Stack Dev',
    year: '2022',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: 'media/Desktop Snapshoot Portfolio2.png',
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum istry. Lorem Ipsum han printer took a galley of type a a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15',
  },
  {
    title: 'Facebook 360',
    company: 'Facebook',
    role: 'Full Stack Dev',
    year: '2015',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: 'media/Desktop Snapshoot Portfolio 3.png',
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum istry. Lorem Ipsum han printer took a galley of type a a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15',
  },
  {
    title: 'Uber-navigation',
    company: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: 'media/Desktop Snapshoot Portfolio4.png',
    lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum istry. Lorem Ipsum han printer took a galley of type a a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15',
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
    const desktopseeLivebutton = document.createElement('button');
    desktopseeLivebutton.innerHTML = 'See live';
    const desktopseeLivebuttonimg = document.createElement('img');
    desktopseeLivebuttonimg.src = './media/Seelive.png';
    desktopseeLivebutton.appendChild(desktopseeLivebuttonimg);
    const desktopseeSourcebuttonimg = document.createElement('img');
    desktopseeLivebutton.classList.add('popupbutton-child');
    const desktopseeSourcebutton = document.createElement('button');
    desktopseeSourcebutton.innerHTML = 'See source';
    desktopseeSourcebuttonimg.src = './media/Seesource.png';
    desktopseeSourcebutton.classList.add('popupbutton-child');
    desktopseeSourcebutton.appendChild(desktopseeSourcebuttonimg);
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
