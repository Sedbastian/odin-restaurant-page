import './style.css';
import inicioPestania from "./inicioPestania.js";
import menuPestania from "./menuPestania.js";
import contactoPestania from "./contactoPestania.js";

function borrarContenido() {
    const contenido = document.querySelector(".contenido");
    if(contenido) {
        contenido.remove();
    };
};

function inicioElegir() {
    borrarContenido();
    inicioPestania();
};

function menuElegir() {
    borrarContenido();
    menuPestania();
};

function contactoElegir() {
    borrarContenido();
    contactoPestania();
};

const content = document.querySelector("#content");
    
const heading = document.createElement("h1");
heading.innerHTML = '<div class="izquierda"><div class="res">Restaurant</div><div class="sal">Salvaje</div></div><div class="ven">“La Venancia”</div>';
content.appendChild(heading);

const pestanias = document.createElement("nav");
pestanias.classList.add("pestanias");
    
const inicio = document.createElement("div");
inicio.classList.add("inicio", "elegido");
inicio.textContent = "Inicio";
inicio.addEventListener("click", inicioElegir);

const menu = document.createElement("div");
menu.classList.add("menu");
menu.textContent = "Menú";
menu.addEventListener("click", menuElegir);

const contacto = document.createElement("div");
contacto.classList.add("contacto");
contacto.textContent = "Contacto";
contacto.addEventListener("click", contactoElegir);

pestanias.appendChild(inicio);
pestanias.appendChild(menu);
pestanias.appendChild(contacto);
content.appendChild(pestanias);