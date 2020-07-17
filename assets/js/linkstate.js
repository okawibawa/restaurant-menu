// Links Food
const linkfood = document.getElementsByClassName('.link-food');

// Links Beverages
// const linkBevOne = document.getElementById('link-bev-one');
// const linkBevTwo = document.getElementById('link-bev-two');
// const linkBevThree = document.getElementById('link-bev-three');
// const linkBevFour = document.getElementById('link-bev-four');

// Link Food
for (let i = 0; i < linkfood.length; i++) {
  linkfood[i].addEventListener('click', (e) => {
    var current = document.getElementsByClassName('active-link');
    current[0].className = current[0].className.replace(' active-link', '');
    this.className += ' active-link';
  });
}
