// Links
const linkBevOne = document.getElementById('link-bev-one');
const linkBevTwo = document.getElementById('link-bev-two');
const linkBevThree = document.getElementById('link-bev-three');
const linkBevFour = document.getElementById('link-bev-four');
const linkBevFive = document.getElementById('link-bev-five');
const linkBevSix = document.getElementById('link-bev-six');
const linkBevSeven = document.getElementById('link-bev-seven');
const linkBevEight = document.getElementById('link-bev-eight');

// Menus
const bevOne = document.getElementById('bevOne');
const bevTwo = document.getElementById('bevTwo');
const bevThree = document.getElementById('bevThree');
const bevFour = document.getElementById('bevFour');
const bevFive = document.getElementById('bevFive');
const bevSix = document.getElementById('bevSix');
const bevSeven = document.getElementById('bevSeven');
const bevEight = document.getElementById('bevEight');

// Functions
linkBevOne.addEventListener('click', (e) => {
  e.preventDefault();

  bevOne.style.display = 'block';

  bevTwo.style.display = 'none';
  bevThree.style.display = 'none';
  bevFour.style.display = 'none';
  bevFive.style.display = 'none';
  bevSix.style.display = 'none';
  bevSeven.style.display = 'none';
  bevEight.style.display = 'none';
});

linkBevTwo.addEventListener('click', (e) => {
  e.preventDefault();

  bevTwo.style.display = 'block';

  bevOne.style.display = 'none';
  bevThree.style.display = 'none';
  bevFour.style.display = 'none';
  bevFive.style.display = 'none';
  bevSix.style.display = 'none';
  bevSeven.style.display = 'none';
  bevEight.style.display = 'none';
});

linkBevThree.addEventListener('click', (e) => {
  e.preventDefault();

  bevThree.style.display = 'block';

  bevOne.style.display = 'none';
  bevTwo.style.display = 'none';
  bevFour.style.display = 'none';
  bevFive.style.display = 'none';
  bevSix.style.display = 'none';
  bevSeven.style.display = 'none';
  bevEight.style.display = 'none';
});

linkBevFour.addEventListener('click', (e) => {
  e.preventDefault();

  bevFour.style.display = 'block';

  bevThree.style.display = 'none';
  bevOne.style.display = 'none';
  bevTwo.style.display = 'none';
  bevFive.style.display = 'none';
  bevSix.style.display = 'none';
  bevSeven.style.display = 'none';
  bevEight.style.display = 'none';
});

linkBevFive.addEventListener('click', (e) => {
  e.preventDefault();

  bevFive.style.display = 'block';

  bevFour.style.display = 'none';
  bevThree.style.display = 'none';
  bevOne.style.display = 'none';
  bevTwo.style.display = 'none';
  bevSix.style.display = 'none';
  bevSeven.style.display = 'none';
  bevEight.style.display = 'none';
});

linkBevSix.addEventListener('click', (e) => {
  e.preventDefault();

  bevSix.style.display = 'block';

  bevFive.style.display = 'none';
  bevFour.style.display = 'none';
  bevThree.style.display = 'none';
  bevOne.style.display = 'none';
  bevTwo.style.display = 'none';
  bevSeven.style.display = 'none';
  bevEight.style.display = 'none';
});

linkBevSeven.addEventListener('click', (e) => {
  e.preventDefault();

  bevSeven.style.display = 'block';

  bevSix.style.display = 'none';
  bevFive.style.display = 'none';
  bevFour.style.display = 'none';
  bevThree.style.display = 'none';
  bevOne.style.display = 'none';
  bevTwo.style.display = 'none';
  bevEight.style.display = 'none';
});

linkBevEight.addEventListener('click', (e) => {
  e.preventDefault();

  bevEight.style.display = 'block';

  bevSeven.style.display = 'none';
  bevSix.style.display = 'none';
  bevFive.style.display = 'none';
  bevFour.style.display = 'none';
  bevThree.style.display = 'none';
  bevOne.style.display = 'none';
  bevTwo.style.display = 'none';
});
