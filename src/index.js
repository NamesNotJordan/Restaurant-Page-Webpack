import createHomeContent from "./homeContent";
import createMenuContent from "./menuContent";
import createAboutContent from "./aboutContent";
import './style.css';

// Get nav buttons
const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");

// Set event listeners
homeButton.addEventListener("click", createHomeContent);
menuButton.addEventListener("click", createMenuContent);
aboutButton.addEventListener("click", createAboutContent);

//Load Home Content by default
createHomeContent