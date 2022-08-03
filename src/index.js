import './style.css';
import descripcionPestania from "./descripcionPestania.js";
import menuPestania from "./menuPestania.js";
import contactoPestania from "./contactoPestania.js";

function eliminarClaseElegida () {
    const pestaniaElegida = document.querySelector(".elegida");
    if (pestaniaElegida) {
        pestaniaElegida.classList.remove("elegida");
    };
};

function borrarContenido() {
    const contenido = document.querySelector(".contenido");
    if(contenido) {
        contenido.remove();
    };
};

function descripcionElegir() {
    eliminarClaseElegida();
    const pestaniaAelegir = document.querySelector(".descripcion");
    pestaniaAelegir.classList.add("elegida");
    borrarContenido();
    descripcionPestania();
};

function menuElegir() {
    eliminarClaseElegida();
    const pestaniaAelegir = document.querySelector(".menu");
    pestaniaAelegir.classList.add("elegida");
    borrarContenido();
    menuPestania();
};

function contactoElegir() {
    eliminarClaseElegida();
    const pestaniaAelegir = document.querySelector(".contacto");
    pestaniaAelegir.classList.add("elegida");
    borrarContenido();
    contactoPestania();
};

const content = document.querySelector("#content");
    
const heading = document.createElement("h1");
heading.innerHTML = '<div class="izquierda"><div class="res">Restaurant</div><div class="sal">Salvaje</div></div><div class="ven">“La Venancia”</div>';
content.appendChild(heading);

const pestanias = document.createElement("nav");
pestanias.classList.add("pestanias");
    
const descripcion = document.createElement("div");
descripcion.classList.add("descripcion");
descripcion.textContent = "Descripcion";
descripcion.addEventListener("click", descripcionElegir);

const menu = document.createElement("div");
menu.classList.add("menu");
menu.textContent = "Menú";
menu.addEventListener("click", menuElegir);

const contacto = document.createElement("div");
contacto.classList.add("contacto");
contacto.textContent = "Contacto";
contacto.addEventListener("click", contactoElegir);

pestanias.appendChild(descripcion);
pestanias.appendChild(menu);
pestanias.appendChild(contacto);
content.appendChild(pestanias);