// Links
const linkFoodOne = document.getElementById('link-food-one');
const linkFoodTwo = document.getElementById('link-food-two');
const linkFoodThree = document.getElementById('link-food-three');
const linkFoodFour = document.getElementById('link-food-four');

// Menus
const foodOne = document.getElementById('foodOne');
const foodTwo = document.getElementById('foodTwo');
const foodThree = document.getElementById('foodThree');
const foodFour = document.getElementById('foodFour');

// Functions
linkFoodOne.addEventListener('click', (e) => {
  e.preventDefault();

  foodOne.style.display = 'block';

  foodTwo.style.display = 'none';
  foodThree.style.display = 'none';
  foodFour.style.display = 'none';
});

linkFoodTwo.addEventListener('click', (e) => {
  e.preventDefault();

  foodTwo.style.display = 'block';

  foodOne.style.display = 'none';
  foodThree.style.display = 'none';
  foodFour.style.display = 'none';
});

linkFoodThree.addEventListener('click', (e) => {
  e.preventDefault();

  foodThree.style.display = 'block';

  foodOne.style.display = 'none';
  foodTwo.style.display = 'none';
  foodFour.style.display = 'none';
});

linkFoodFour.addEventListener('click', (e) => {
  e.preventDefault();

  foodFour.style.display = 'block';

  foodThree.style.display = 'none';
  foodOne.style.display = 'none';
  foodTwo.style.display = 'none';
});
