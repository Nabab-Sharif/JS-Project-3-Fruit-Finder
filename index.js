

import { fruits } from './fruit.js'



for (let fruit of fruits) {
  showFruit(fruit)
}


// ...........................Start fruit card create....................................
function showFruit(fruit) {
  const fruitDiv = document.createElement('div');
  fruitDiv.className = 'fruit';

  const img = document.createElement('img');
  img.src = `${fruit.img}`;
  img.style.width = '100%'
  img.style.height = '100%'
  img.style.objectFit = 'cover';
  img.alt = fruit.name;

  const name = document.createElement('p');
  name.className = 'name';
  name.innerText = fruit.name;

  const details = document.createElement('p');
  details.className = 'details';
  details.innerText = fruit.details;

  fruitDiv.append(img, name, details);
  console.log(fruitDiv)

  document.querySelector('.fruits').append(fruitDiv);

}

// ...........................End fruit card create....................................





// ...........................Start not found card create....................................
notFound();

function notFound() {
  const notFoundDiv = document.createElement('div');
  notFoundDiv.className = 'p-5 not-found';
  notFoundDiv.style.display = 'none';

  const span = document.createElement('span');
  span.innerText = '404';

  const h1 = document.createElement('h1');
  h1.innerText = 'No Fruit Found';

  notFoundDiv.append(span, h1);
  document.querySelector('.fruits').append(notFoundDiv);

}
// ...........................End not found card create....................................




// ...........................Start search fruit create....................................

document.querySelector('#search-fruit').addEventListener('keyup', function (e) {

  const keywords = e.target.value.toLowerCase();
  const fruits = document.querySelectorAll('.fruit');

  let notFound = true;
  for (let fruit of fruits) {
    const name = fruit.children[1].innerText.toLowerCase();
    const details = fruit.children[2].innerText.toLowerCase();

    if (name.includes(keywords) || details.includes(keywords)) {
      fruit.style.display = 'block';
      notFound = false;
    } else {
      fruit.style.display = 'none';
    }

    if (notFound) {
      document.querySelector('.not-found').style.display = 'block'
    } else {
      document.querySelector('.not-found').style.display = 'none'

    }

  }


});

// ...........................End search fruit create....................................






// ...........................For form auto reload off ....................................

document.querySelector('#search-fruit-form').addEventListener('submit', (e) => {
  e.preventDefault();
});

