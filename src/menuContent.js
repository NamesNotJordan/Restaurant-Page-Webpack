// Constructs takes in a menu item name and price and creates an HTML element

const menuItem = (name, price) => {
    const element = document.createElement("li");
    element.classList.add("menu-item");
    const nameLabel = document.createElement("p");
    const priceLabel = document.createElement("p");
    nameLabel.innerHTML = name;
    priceLabel.innerHTML = 'R' + price;
    element.appendChild(nameLabel);
    element.appendChild(priceLabel);

    return element;
}

const foodList = [
    menuItem("Hotdog", 20.00),
    menuItem("Burger", 50.00),
];
const drinkList = [
    menuItem("Milkshake", 25.00)
];

export default function createMenuContent() {
    const contentDiv = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.innerHTML = "Made (up) just for you";
    
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");
    
    const foodHeading = document.createElement("h2");
    foodHeading.innerHTML="FOOD";
    const drinkHeading = document.createElement("h2");
    drinkHeading.innerHTML="DRINKS";
    
    menuDiv.appendChild(foodHeading);
    menuDiv.appendChild(document.createElement("div"));
    for (const item of foodList) {
        menuDiv.appendChild(item);
    }
    
    menuDiv.appendChild(drinkHeading);
    menuDiv.appendChild(document.createElement("div"));
    for (const item of drinkList) {
        menuDiv.appendChild(item);
    }

    contentDiv.replaceChildren(heading, menuDiv);
}