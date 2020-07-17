// Links
const linkBevOne = document.getElementById('link-bev-one');
const linkBevTwo = document.getElementById('link-bev-two');
const linkBevThree = document.getElementById('link-bev-three');
const linkBevFour = document.getElementById('link-bev-four');

// Menus
const bevOne = document.getElementById('bevOne');
const bevTwo = document.getElementById('bevTwo');
const bevThree = document.getElementById('bevThree');
const bevFour = document.getElementById('bevFour');

// Functions
linkBevOne.addEventListener('click', (e) => {
  e.preventDefault();

  bevOne.style.display = 'block';

  bevTwo.style.display = 'none';
  bevThree.style.display = 'none';
  bevFour.style.display = 'none';
});

linkBevTwo.addEventListener('click', (e) => {
  e.preventDefault();

  bevTwo.style.display = 'block';

  bevOne.style.display = 'none';
  bevThree.style.display = 'none';
  bevFour.style.display = 'none';
});

linkBevThree.addEventListener('click', (e) => {
  e.preventDefault();

  bevThree.style.display = 'block';

  bevOne.style.display = 'none';
  bevTwo.style.display = 'none';
  bevFour.style.display = 'none';
});

linkBevFour.addEventListener('click', (e) => {
  e.preventDefault();

  bevFour.style.display = 'block';

  bevThree.style.display = 'none';
  bevOne.style.display = 'none';
  bevTwo.style.display = 'none';
});
