
export default function createHomeContent() {
    const contentDiv = document.querySelector("#content");
    
    const hero = document.createElement("div");
    hero.classList.add("hero");
    const heading = document.createElement("h1");
    heading.innerHTML = "Made Up Meals";
    hero.appendChild(heading);

    const section = document.createElement("div");
    section.classList.add("home-section-2");
    const tagline = document.createElement("h2");
    tagline.classList.add("tagline");
    tagline.innerHTML = "Lorem ipsum dolor sit amet";
    const para = document.createElement("p");
    para.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci recusandae fuga quos ullam vel.";
    const pic = document.createElement("div");
    pic.classList.add("fake-pic");
    section.replaceChildren(tagline, para, pic);
    contentDiv.replaceChildren(hero, section);
}