export default function createAboutContent(){
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.innerHTML = "lectus proin nibh nisl condimentum";
    const paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "Eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis";
    const paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam"
    
    contentDiv.replaceChildren(heading, paragraph1, paragraph2);
}