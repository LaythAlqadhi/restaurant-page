import cookImage from './images/the-cook.png';

export function createHomeContent() {
  let div = document.createElement('div');
  div.classList.add('home-container');

  const homeData = [
    {
      text: 'Top-notch pizza in our town'
    },
    {
      text: 'Crafted with love since 1929'
    },
    {
      text: 'Order online or drop by!'
    }
  ];

  for (let i = 0; i < homeData.length; i++) {
    const p = document.createElement('p');
    p.textContent = homeData[i].text;
    div.appendChild(p);
  }

  let img = document.createElement('img');
  img.src = cookImage;
  img.alt = 'The cook';
  div.appendChild(img);
  
  return div;
};