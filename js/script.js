// Hamburger menu
const btn = document.getElementById('ham_btn');
const menu = document.getElementById('menu');

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('show-menu');
}
btn.addEventListener('click', navToggle);

// Dropdown menu
const dropDownBtn = document.getElementById('dropdown-btn');
const dropDownMenu = document.getElementById("dropdown-menu")

function dropDownToggle() {
  dropDownMenu.classList.toggle("open-dropdown");
}
dropDownBtn.addEventListener('click', dropDownToggle);

// Search bar
const searchIcon = document.getElementById('search-icon');
const navRight = document.getElementById('nav-right');
const navLeft = document.getElementById('nav-left');
const searchBar = document.getElementById('search-bar');

function displaySearchBar() {
  searchBar.style.display = "flex";
  navRight.style.display = "none";
  navLeft.style.display = "none";

}

function hideSearchBar() {
  searchBar.style.display = "none";
  navRight.style.display = "";
  navLeft.style.display = "";
}

searchIcon.addEventListener('click', displaySearchBar);
cancel_btn.addEventListener('click', hideSearchBar)


// Slider 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}




// outside click
// var ignoreClickOnMeElement = document.getElementById('search-icon');

// document.addEventListener('click', function (event) {
//   var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
//   if (!isClickInsideElement) {
//     //Do something click is outside specified element

//   }
// });


// // JS media querry
// function myFunction(media_860p) {
//   if (media_860p.matches) {

//   } else {

//   }
// }
// const media_860p = window.matchMedia("(max-width: 859px)")
// myFunction(media_860p);

// media_860p.addEventListener("change", myFunction);
