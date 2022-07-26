<<<<<<< HEAD
// Exercise 1: 
// make toggle equal the item with the class 'toggle'
// and menu equal the item with the class 'menu'
const toggle = undefined;
const menu = undefined;

// Exercise 2:
// makee a function called 'toggleMenu' that 
// writes 'working' to the console

// Exercise 3:
// Add an event listener to the toggle element
// to run the toggleMenu function
=======
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<span class='fas fa-bars'></span>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<span class='fas fa-times'></span>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);
>>>>>>> mobile-menu-finished
