const hero = () => {
    const container = document.createElement("div");
    container.classList.add("hero");
    
    //const image = document.createElement("img");
    const heading = document.createElement("h1");
    heading.innerHTML = "Made Up Meals";
    
    container.style.backgroundImage = "url('https://www.shutterstock.com/image-photo/portrait-waiter-serving-food-customers-260nw-1392204773.jpg')";
    container.appendChild(heading);

    return container;
}

const createHomeContent = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.appendChild(hero);
    
    const tagline = document.createElement("h2");
    tagline.classList.add("tagline");
    tagline.innerHTML = "Lorem ipsum dolor sit amet";
    const para = document.createElement("p");
    para.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci recusandae fuga quos ullam vel.";

    contentDiv.appendChild(tagline);
    contentDiv.appendChild(para);
}

export default createHomeContent;