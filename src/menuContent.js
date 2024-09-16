// Constructs takes in a menu item name and price and creates an HTML element
const menuCatagory = Object.freeze({
    FOOD: "food",
    DRINK: "Drink"
});

const menuItem = (name, price, catagory) => {
    this.catagory = catagory;
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

const menuList = [
    menuItem("Hotdog", 20.00),
    menuItem("Burger", 50.00),
    menuItem("Milkshake", 25.00)
] 

export default function createMenuContent() {
    const contentDiv = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.innerHTML = "Made (up) just for you";
    
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");
    
    for (const item of menuList) {
        menuDiv.appendChild(item);
    }

    contentDiv.replaceChildren(heading, menuDiv);
}