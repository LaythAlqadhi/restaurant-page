import pizza1Image from './images/pizza1.png';
import pizza2Image from './images/pizza2.png';
import pizza3Image from './images/pizza3.png';
import pizza4Image from './images/pizza4.png';
import pizza5Image from './images/pizza5.png';
import pizza6Image from './images/pizza6.png';
import pizza7Image from './images/pizza7.png';
import pizza8Image from './images/pizza8.png';

export function createMenuContent() {
  let div = document.createElement('div');
  div.classList.add('menu-container');

  const dishData = [
    {
      title: 'Salsiccia',
      description: 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',
      imageSrc: pizza1Image, 
      imageAlt: 'Salsiccia',
    },
    {
      title: 'Gamberi',
      description: 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
      imageSrc: pizza2Image, 
      imageAlt: 'Gamberi',
    },
    {
      title: 'Pepe',
      description: 'White sauce, Mozarella, Onion, Homemade sausage',
      imageSrc: pizza3Image, 
      imageAlt: 'Pepe',
    },
    {
      title: 'Disgustoso',
      description: 'Tomato sauce, Bacon, Pineapple, Olives, Basil',
      imageSrc: pizza4Image,
      imageAlt: 'Disgustoso',
    },
    {
      title: 'Colorato',
      description: 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil',
      imageSrc: pizza5Image, 
      imageAlt: 'Colorato',
    },
    {
      title: 'Pomodoro',
      description: 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',
      imageSrc: pizza6Image, 
      imageAlt: 'Pomodoro',
    },
    {
      title: 'Crema',
      description: 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil',
      imageSrc: pizza7Image,
      imageAlt: 'Crema',
    },
    {
      title: 'Carne',
      description: 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',
      imageSrc: pizza8Image,
      imageAlt: 'Carne',
    },
  ];

  for (let i = 0; i < dishData.length; i++) {
    const dish = document.createElement('div');
    dish.className = 'dish';

    const h1 = document.createElement('h1');
    h1.textContent = dishData[i].title;

    const p = document.createElement('p');
    p.textContent = dishData[i].description;

    const img = document.createElement('img');
    img.src = dishData[i].imageSrc; // Set the image source
    img.alt = dishData[i].imageAlt;

    dish.appendChild(h1);
    dish.appendChild(p);
    dish.appendChild(img);

    div.appendChild(dish);
  }

  return div;
}