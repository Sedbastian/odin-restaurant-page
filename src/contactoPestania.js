import flor from "./flor.png";

function contactoPestania() {
    const content = document.querySelector("#content");
    
    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    const gri = document.createElement("div");
    gri.classList.add("contacto");
    const nombreG = document.createElement("div");
    nombreG.textContent = "Lesirg leelaZen";
    const mailG = document.createElement("div");
    mailG.textContent = "leelaZen@ashram.org";
    const iconoG = document.createElement("img");
    iconoG.src = flor;
    
    gri.appendChild(nombreG);
    gri.appendChild(mailG);
    gri.appendChild(iconoG);
    contenido.appendChild(gri);

    content.appendChild(contenido);
};

export default contactoPestania;