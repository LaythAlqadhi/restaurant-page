import { style } from './style.css';
import { createHomeContent } from './home.js';
import { createMenuContent } from './menu.js';
import { createContactContent } from './contact.js';

function initializeWebsite() {
  const header = document.createElement('header');
  const logo = document.createElement('h1');
  logo.textContent = 'Pizzaverse';
  header.appendChild(logo)

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const homeTab = createNavItem('Home');
  const menuTab = createNavItem('Menu');
  const contactTab = createNavItem('Contact');

  ul.appendChild(homeTab);
  ul.appendChild(menuTab);
  ul.appendChild(contactTab);
  nav.appendChild(ul);
  header.appendChild(nav);
  
  homeTab.addEventListener('click', handleButtonClick);
  menuTab.addEventListener('click', handleButtonClick);
  contactTab.addEventListener('click', handleButtonClick);

  function createNavItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  }
  
  const footer = document.createElement('footer');
  const imagesCopyright = document.createElement('a');
  const websiteCopyright = document.createElement('a');
    
  imagesCopyright.href = 'https://www.freepik.com';
  imagesCopyright.textContent = 'Images desined by Freepik ';
  footer.appendChild(imagesCopyright);
    
  websiteCopyright.href = 'https://github.com/LaythAlqadhi';
  websiteCopyright.textContent = '| Website created by LaythAlqadhi';
  footer.appendChild(websiteCopyright);
    
  const content = document.querySelector('#content');
  
  content.insertAdjacentElement('beforebegin', header);
  
  content.insertAdjacentElement('afterend', footer);
  
  content.appendChild(createHomeContent());
  
  function handleButtonClick() {
    if (this.textContent === 'Home') {
      content.textContent = '';
      content.appendChild(createHomeContent());
    }else if (this.textContent === 'Menu') {
      content.textContent = '';
      content.appendChild(createMenuContent());
    }else if (this.textContent === 'Contact') {
      content.textContent = '';
      content.appendChild(createContactContent());
    }
  }
}
initializeWebsite();