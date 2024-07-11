// Constructs takes in a menu item name and price and creates an HTML element
const menuItem = (name, price) => {
    const element = document.createElement("li");
    element.classList.add("menu-item");
    const nameLabel = document.createElement("p");
    const priceLabel = document.createElement("strong");
    nameLabel.innerHTML = name;
    priceLabel.innerHTML = 'R' + price;
    element.appendChild(nameLabel);
    element.appendChild(priceLabel);

    return element;
}

const menuList = [
    menuItem("Hotdog", 20.00),
    menuItem("Burger", 50.00),
    menuItem("Milkshake", 25.00)
] 

export default function createMenuContent() {
    const contentDiv = document.querySelector("#content");
    // empty content
    contentDiv.replaceChildren();
    const heading = document.createElement("h1");
    heading.innerHTML = "Made (up) just for you";
    contentDiv.appendChild(heading);
    
    for (const item of menuList) {
        contentDiv.appendChild(item);
    }
}