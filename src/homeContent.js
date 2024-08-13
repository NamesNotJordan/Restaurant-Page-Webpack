
export default function createHomeContent() {
    const contentDiv = document.querySelector("#content");
    
    const hero = document.createElement("div");
    hero.classList.add("hero");
    const heading = document.createElement("h1");
    heading.innerHTML = "Made Up Meals";
    hero.appendChild(heading);

    const tagline = document.createElement("h2");
    tagline.classList.add("tagline");
    tagline.innerHTML = "Lorem ipsum dolor sit amet";
    const para = document.createElement("p");
    para.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci recusandae fuga quos ullam vel.";

    contentDiv.replaceChildren(hero, tagline, para)
}