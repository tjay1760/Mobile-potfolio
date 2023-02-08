/* eslint-disable no-unused-vars */
const projectData = [
  {
    name: 'Tonic',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/tonic-work.png',
    technologies: ['html', 'css', 'javascript'],
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    desktopName: 'Tonic',
    desktopDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopFeaturedImage: './images/tonic-desktop.png',
    desktopPointersTitle: 'CANOPY',
    desktopPointersLevel: 'Back End Dev',
    desktopPointersYear: '2015',
    desktopTechnologies: ['html', 'css', 'javascript'],
  },
  {
    name: 'Multi-Post Stories',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/multi-post-stories.png',
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    desktopName: 'Multi-Post Stories',
    desktopDescription:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    desktopFeaturedImage: './images/multi-post-stories-desktop.png',
    desktopPointersTitle: 'CANOPY',
    desktopPointersLevel: 'Back End Dev',
    desktopPointersYear: '2015',
    desktopTechnologies: ['html', 'css', 'javascript'],
  },
  {
    name: 'Tonic',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/tonic-work2.png',
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    desktopName: 'Facebook 360',
    desktopDescription:
        'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    desktopFeaturedImage: './images/facebook.png',
    desktopPointersTitle: 'FACEBOOK',
    desktopPointersLevel: 'Full Stack Dev',
    desktopPointersYear: '2015',
    desktopTechnologies: ['html', 'css', 'javascript', 'Ruby on rails'],
  },
  {
    name: 'Multi-Post Stories',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/multi-post-stories2.png',
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    desktopName: 'Uber Navigation',
    desktopDescription:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    desktopFeaturedImage: './images/uber-navigation.png',
    desktopPointersTitle: 'Uber',
    desktopPointersLevel: 'Lead Developer',
    desktopPointersYear: '2018',
    desktopTechnologies: ['html', 'css', 'javascript', 'Ruby on rails'],
  },
];
/* eslint-disable no-plusplus */
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
// eslint-disable-next-line spaced-comment
/*-------------------Mobile Pop-up---------------------------------------------*/
const mobilePopup = document.getElementById('mobile-popup');
const seeProject = document.querySelectorAll('.see-project');

function openPopup() {
  mobilePopup.classList.remove('hide-mobile-popup');
}

// Pop-up elements
//closing button
var closeButton = document.createElement('div');
closeButton.innerHTML ="X";
// image
var popupImg = document.createElement('img');
popupImg.src = './media/Snapshoot Portfolio.png';
popupImg.alt = 'Tonic project snapshot';

// heading
var projectTopic = document.createElement('h2');
projectTopic.innerHTML = 'Tonic';

// list
var projectSummary = document.createElement('ul');
projectSummary.classList.add('project-summary');

var canopy = document.createElement('li');
canopy.id = 'canopy';
canopy.innerHTML = 'CANOPY';

var backEndDev = document.createElement('li');
backEndDev.id = 'back-end';

var backEndDevImg = document.createElement('img');
backEndDevImg.src = './media/Counter.png';
backEndDevImg.alt = '';
backEndDev.appendChild(backEndDevImg);
backEndDev.innerHTML += 'Back End Dev';

var year = document.createElement('li');
year.id = 'back-end';

var yearImg = document.createElement('img');
yearImg.src = './media/Counter.png';
yearImg.alt = '';
year.appendChild(yearImg);
year.innerHTML += '2023';

projectSummary.appendChild(canopy);
projectSummary.appendChild(backEndDev);
projectSummary.appendChild(year);

// project detail
var projectDetail = document.createElement('div');
projectDetail.id = 'project-detail';

var detailPara = document.createElement('p');
detailPara.innerHTML = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';

projectDetail.appendChild(detailPara);

// language list
var langList = document.createElement('ul');
langList.classList.add('lang-list');

var html = document.createElement('li');
html.id = 'lang';
html.innerHTML = 'html';

var css = document.createElement('li');
css.id = 'lang';
css.innerHTML = 'css';

var javascript = document.createElement('li');
javascript.id = 'lang';
javascript.innerHTML = 'javascript';

langList.appendChild(html);
langList.appendChild(css);
langList.appendChild(javascript);
//line
var popupLine = document.createElement('div');
popupLine.classList.add('popup-line');
//buttons
popupButtondiv= document.createElement('div');
seeLivebutton= document.createElement('button');
seeLivebutton.innerHTML= "See live";
var seeLivebuttonimg = document.createElement('img');
seeLivebuttonimg.src="./media/Seelive.png"
seeLivebutton.appendChild(seeLivebuttonimg);
var seeSourcebuttonimg = document.createElement('img');
seeLivebutton.classList.add('popupbutton-child');
seeSourcebutton= document.createElement('button');
seeSourcebutton.innerHTML= "See source";
seeSourcebuttonimg.src= "./media/Seesource.png";
seeSourcebutton.classList.add('popupbutton-child');
seeSourcebutton.appendChild(seeSourcebuttonimg);
popupButtondiv.appendChild(seeLivebutton);
popupButtondiv.appendChild(seeSourcebutton);
popupButtondiv.classList.add('popup-buttondiv');
// eslint-disable-next-line no-restricted-syntax

for (const button of seeProject) {
    button.addEventListener('click', openPopup);
    mobilePopup.appendChild(closeButton);
    mobilePopup.appendChild(popupImg);
    mobilePopup.appendChild(projectTopic);
    mobilePopup.appendChild(projectSummary);
    mobilePopup.appendChild(projectDetail);
    mobilePopup.appendChild(langList);
    mobilePopup.appendChild(popupLine);
    mobilePopup.appendChild(popupButtondiv);
  }