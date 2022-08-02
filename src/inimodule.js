function iniciar () {
    const content = document.querySelector("#content");
    
    const heading = document.createElement("h1");
    heading.innerHTML = '<div class="izquierda"><div class="res">Restaurant</div><div class="sal">Salvaje</div></div><div class="ven">“La Venancia”</div>';
    content.appendChild(heading);

    const descripcion = document.createElement("p");
    descripcion.classList.add("descripcion");
    descripcion.innerHTML = "Increíbles recetas con ingredientes agroecológicos criados en la finca.<br>Sabores viejosnuevos, nutrientes y dragones de paz.";
    content.appendChild(descripcion);
};

export default iniciar;