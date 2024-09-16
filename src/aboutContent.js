export default function createAboutContent(){
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.classList.add("about-h1");
    heading.innerHTML = "lectus proin nibh nisl condimentum";
    const paragraph1 = document.createElement("p");
    paragraph1.classList.add("about-p");
    paragraph1.innerHTML = "Eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis";
    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("about-p");
    paragraph2.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Vel diam non morbi fermentum mollis lacinia. Etiam ullamcorper ridiculus faucibus volutpat class blandit arcu cubilia. Consectetur parturient rhoncus tempor maecenas hendrerit in tristique. Fringilla taciti quis nisi eros elementum pharetra consequat. Tristique tristique aenean cras pellentesque purus erat. Velit sollicitudin quis augue facilisis semper posuere platea orci mus."
    
    const para3 =document.createElement("p");
    para3.classList.add("about-p");
    para3.innerHTML="Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor adipiscing mollis magnis, nisl sed tristique mattis. Laoreet auctor vel condimentum habitasse justo hac inceptos vivamus dignissim. Tincidunt tortor nam senectus integer nisi leo sagittis luctus. Ligula ridiculus senectus elementum ac pretium commodo penatibus iaculis justo. Odio ex rhoncus cubilia feugiat; commodo pretium habitasse sem maecenas. Tellus mauris nostra habitant egestas vestibulum.";

    const para4 =document.createElement("p");
    para4.classList.add("about-p");
    para4.innerHTML="Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis condimentum senectus aptent nisi mattis condimentum nullam tellus. Gravida vestibulum tortor malesuada senectus aptent odio blandit? Parturient conubia finibus eget nostra; inceptos cursus nisi. Rutrum vel semper aliquam natoque sapien finibus gravida eget. Sed tortor suscipit quis sapien luctus orci maecenas. Libero aenean tempor tempus feugiat ligula augue nascetur. Nisl sagittis finibus eget porta ut turpis etiam. Convallis dapibus himenaeos nisl convallis finibus libero.";

    contentDiv.replaceChildren(heading, paragraph1, paragraph2, para3, para4);
}