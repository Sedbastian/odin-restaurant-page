function iniciar () {
    const content = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.innerHTML = '<div class="izquierda"><div class="res">Restaurant</div><div class="sal">Salvaje</div></div><div class="ven">“La Venancia”</div>';
    content.appendChild(heading);
};

export default iniciar;