function iniciar () {
    const content = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Restaurant Salvaje La Venancia";
    content.appendChild(heading);
};

export default iniciar;