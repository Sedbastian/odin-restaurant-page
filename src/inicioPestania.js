function inicioPestania () {
    const content = document.querySelector("#content");
    
    const contenido = document.createElement("div");
    contenido.classList.add("contenido");
    contenido.innerHTML = "Increíbles recetas con ingredientes agroecológicos criados en la finca.<br>Sabores viejosnuevos, nutrientes y dragones de paz.";
    content.appendChild(contenido);
};

export default inicioPestania;