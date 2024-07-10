// Create page Content
const contentDiv = document.querySelector("#content")

//TODO: Move into Home Module
//Heading and picture
const section = document.createElement("div");
section.classList.add("section");
const image = document.createElement("img");
const heading = document.createElement("h1");
heading.innerHTML = "Made Up Meals";
section.appendChild(image);
section.appendChild(heading);
contentDiv.appendChild(section);

// Tagline and some fluffy words
const tagline = document.createElement("h2");
tagline.classList.add("tagline");
tagline.innerHTML = "Lorem ipsum dolor sit amet";
const para = document.createElement("p");
para.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci recusandae fuga quos ullam vel.";

contentDiv.appendChild(tagline);
contentDiv.appendChild(para);