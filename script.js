// Exercise 1: 
// make toggle equal the item with the class 'toggle'
// and menu equal the item with the class 'menu'
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

// Exercise 2:
// makee a function called 'toggleMenu' that 
// writes 'working' to the console
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<span class='fas fa-bars'></span>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<span class='fas fa-times'></span>";
    }
}
// Exercise 3:
// Add an event listener to the toggle element
// to run the toggleMenu function
toggle.addEventListener("click", toggleMenu);