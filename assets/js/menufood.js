// Links
const linkFoodOne = document.getElementById('link-food-one');
const linkFoodTwo = document.getElementById('link-food-two');
const linkFoodThree = document.getElementById('link-food-three');
const linkFoodFour = document.getElementById('link-food-four');
const linkFoodFive = document.getElementById('link-food-five');
const linkFoodSix = document.getElementById('link-food-six');
const linkFoodSeven = document.getElementById('link-food-seven');

// Menus
const foodOne = document.getElementById('foodOne');
const foodTwo = document.getElementById('foodTwo');
const foodThree = document.getElementById('foodThree');
const foodFour = document.getElementById('foodFour');
const foodFive = document.getElementById('foodFive');
const foodSix = document.getElementById('foodSix');
const foodSeven = document.getElementById('foodSeven');

// Functions
linkFoodOne.addEventListener('click', (e) => {
  e.preventDefault();

  foodOne.style.display = 'block';

  foodFour.style.display = 'none';
  foodTwo.style.display = 'none';
  foodThree.style.display = 'none';
  foodFive.style.display = 'none';
  foodSix.style.display = 'none';
  foodSeven.style.display = 'none';
});

linkFoodTwo.addEventListener('click', (e) => {
  e.preventDefault();

  foodTwo.style.display = 'block';

  foodOne.style.display = 'none';
  foodFour.style.display = 'none';
  foodThree.style.display = 'none';
  foodFive.style.display = 'none';
  foodSix.style.display = 'none';
  foodSeven.style.display = 'none';
});

linkFoodThree.addEventListener('click', (e) => {
  e.preventDefault();

  foodThree.style.display = 'block';

  foodOne.style.display = 'none';
  foodTwo.style.display = 'none';
  foodFour.style.display = 'none';
  foodFive.style.display = 'none';
  foodSix.style.display = 'none';
  foodSeven.style.display = 'none';
});

linkFoodFour.addEventListener('click', (e) => {
  e.preventDefault();

  foodFour.style.display = 'block';

  foodOne.style.display = 'none';
  foodTwo.style.display = 'none';
  foodThree.style.display = 'none';
  foodFive.style.display = 'none';
  foodSix.style.display = 'none';
  foodSeven.style.display = 'none';
});

linkFoodFive.addEventListener('click', (e) => {
  e.preventDefault();

  foodFive.style.display = 'block';

  foodOne.style.display = 'none';
  foodTwo.style.display = 'none';
  foodThree.style.display = 'none';
  foodFour.style.display = 'none';
  foodSix.style.display = 'none';
  foodSeven.style.display = 'none';
});

linkFoodSix.addEventListener('click', (e) => {
  e.preventDefault();

  foodSix.style.display = 'block';

  foodOne.style.display = 'none';
  foodTwo.style.display = 'none';
  foodThree.style.display = 'none';
  foodFour.style.display = 'none';
  foodFive.style.display = 'none';
  foodSeven.style.display = 'none';
});

linkFoodSeven.addEventListener('click', (e) => {
  e.preventDefault();

  foodSeven.style.display = 'block';

  foodOne.style.display = 'none';
  foodTwo.style.display = 'none';
  foodThree.style.display = 'none';
  foodFour.style.display = 'none';
  foodFive.style.display = 'none';
  foodSix.style.display = 'none';
});

// const container = document.getElementById('section-food');

// // Links Food
// const linksfood = container.getElementsByClassName('link');

// for (let i = 0; i < linksfood.length; i++) {
//   linksfood[i].addEventListener('click', function (e) {
//     e.preventDefault();

//     let current = document.getElementsByClassName('active-food');
//     current[0].className = current[0].className.replace(' active-food', '');
//     this.className += ' active-food';
//   });
// }
