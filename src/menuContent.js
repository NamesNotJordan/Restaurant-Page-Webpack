// a formatter for converting an integer into South African Rand
const currFormatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2
})

// Constructs takes in a menu item name and price(in cents) and creates an HTML element
const menuItem = (name, price) => {
    const element = document.createElement("li");
    element.classList.add("menu-item");
    const nameLabel = document.createElement("p");
    const priceLabel = document.createElement("p");
    nameLabel.innerHTML = name;
    priceLabel.innerHTML = currFormatter.format(price);
    element.appendChild(nameLabel);
    element.appendChild(priceLabel);

    return element;
}

const foodList = [
    menuItem("Hotdog", 30.00),
    menuItem("Burger", 50.00),
    menuItem("Waffles", 24.99),
    menuItem("Steak", 115.00)
];
const drinkList = [
    menuItem("Milkshake", 25.00),
    menuItem("750ml Spring Water", 40.00)
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