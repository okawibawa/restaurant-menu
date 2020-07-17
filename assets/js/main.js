// Links
const linkfast = document.getElementById('fast');
const linkpizza = document.getElementById('pizza');
const linkasian = document.getElementById('asian');
const linkrawmeat = document.getElementById('raw');

// Menus
const fastfood = document.getElementById('fastfood');
const hotpizza = document.getElementById('hotpizza');
const asianfood = document.getElementById('asianfood');
const rawmeat = document.getElementById('rawmeat');

// Functions
linkfast.addEventListener('click', (e) => {
  e.preventDefault();

  fastfood.style.display = 'block';

  hotpizza.style.display = 'none';
  asianfood.style.display = 'none';
  rawmeat.style.display = 'none';
});

linkpizza.addEventListener('click', (e) => {
  e.preventDefault();

  hotpizza.style.display = 'block';

  fastfood.style.display = 'none';
  asianfood.style.display = 'none';
  rawmeat.style.display = 'none';
});

linkasian.addEventListener('click', (e) => {
  e.preventDefault();

  asianfood.style.display = 'block';

  fastfood.style.display = 'none';
  hotpizza.style.display = 'none';
  rawmeat.style.display = 'none';
});

linkrawmeat.addEventListener('click', (e) => {
  e.preventDefault();

  rawmeat.style.display = 'block';

  asianfood.style.display = 'none';
  fastfood.style.display = 'none';
  hotpizza.style.display = 'none';
});
