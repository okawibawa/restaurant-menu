// Foods
const containfood = document.getElementById('food-container');

// Links Food
const links = document.getElementsByClassName('link');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active-link');
    current[0].className = current[0].className.replace(' active-link', '');
    this.className += ' active-link';
  });
}

// Beverages
const contain = document.getElementById('beverages-container');

// Links Drink
const linkdrinks = contain.getElementsByClassName('link-bev');

for (let i = 0; i < linkdrinks.length; i++) {
  linkdrinks[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active-link');
    current[1].className = current[1].className.replace(' active-link', '');
    this.className += ' active-link';
  });
}
