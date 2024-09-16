const review = (text, source) => {
    let element = document.createElement("div");
    element.classList.add("review");
    let reviewText = document.createElement("p");
    reviewText.classList.add("review-para");
    reviewText.innerHTML = text;
    
    let reviewSource = document.createElement("p");
    reviewSource.classList.add("review-source");
    reviewSource.innerHTML = "- "+source;

    element.appendChild(reviewText);
    element.appendChild(reviewSource);
    return element;
}

const reviewList = [
    review("It's like it was made just for me in particular! Outstanding!", "All of New York"),
    review("As an avid eater of food, I was quite satisfied with their service", "Charlie Bronco"),
    review("I'm no food critic, but the food and/or beverages served here are in a class of their own", "A Prime minister")
]

const reviewSection = () =>{
    let element = document.createElement("div");
    element.classList.add("review-section");
    element.innerHTML = "<h2>Reviews</h2>"

    let reviewCollection = document.createElement("div");
    reviewCollection.classList.add("review-collection");
    for (const r of reviewList) {
        reviewCollection.appendChild(r);
    }
    element.appendChild(reviewCollection);

    return element;
}

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
    contentDiv.replaceChildren(hero, section, reviewSection());
}