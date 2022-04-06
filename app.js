const navBar = document.querySelector('.navbar');
const menuBar = document.querySelector('#bar-btn');

menuBar.addEventListener('click', () => {
  navBar.classList.toggle('active');
  shopBar.classList.remove('active');
  searchBar.classList.remove('active');
});
const shopBar = document.querySelector('.cart-items-container');
const cartBar = document.querySelector('#cart-btn');

cartBar.addEventListener('click', () => {
  shopBar.classList.toggle('active');
  searchBar.classList.remove('active');
  navBar.classList.remove('active');
});
const searchBar = document.querySelector('.search-form');
const formBar = document.querySelector('#search-btn');

formBar.addEventListener('click', () => {
  searchBar.classList.toggle('active');
  navBar.classList.remove('active');
  shopBar.classList.remove('active');
});

window.onscroll = () => {
  navBar.classList.remove('active');
  shopBar.classList.remove('active');
  searchBar.classList.remove('active');
};
