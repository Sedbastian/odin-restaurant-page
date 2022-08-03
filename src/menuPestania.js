import panmasamadre from "./panmasamadre.jpg";
import tarta from "./tarta.jpg";

function menuPestania() {
    const content = document.querySelector("#content");

    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    const receta1 = document.createElement("div");
    receta1.classList.add("tarjeta");
    const nombre1 = document.createElement("h2");
    nombre1.textContent = "Pan casero";
    const descripcion1 = document.createElement("div");
    descripcion1.textContent = "Pan de masa madre, harina integral, semillas molidas de lino y sésamo, aceite de oliva.";
    const imagen1 = document.createElement("img");
    imagen1.src = panmasamadre;
    
    receta1.appendChild(nombre1);
    receta1.appendChild(descripcion1);
    receta1.appendChild(imagen1);
    contenido.appendChild(receta1);

    const receta2 = document.createElement("div");
    receta2.classList.add("tarjeta");
    const nombre2 = document.createElement("h2");
    nombre2.textContent = "Tarta de acelga, zapallo y pollo";
    const descripcion2 = document.createElement("div");
    descripcion2.textContent = "Masa casera, huevo, queso, cebolla.";
    const imagen2 = document.createElement("img");
    imagen2.src = tarta;
    
    receta2.appendChild(nombre2);
    receta2.appendChild(descripcion2);
    receta2.appendChild(imagen2);
    contenido.appendChild(receta2);

    content.appendChild(contenido);
};

export default menuPestania;