import flor from "./flor.png";
import vangogh from "./van-gogh.jpg";

function contactoPestania() {
    const content = document.querySelector("#content");
    
    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    const gri = document.createElement("div");
    gri.classList.add("tarjeta");
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

    const lupe = document.createElement("div");
    lupe.classList.add("tarjeta");
    const nombreL = document.createElement("div");
    nombreL.textContent = "Lifri Morlon";
    const mailL = document.createElement("div");
    mailL.textContent = "LibreFree@MoreLong.net";
    const iconoL = document.createElement("img");
    iconoL.src = vangogh;
    
    lupe.appendChild(nombreL);
    lupe.appendChild(mailL);
    lupe.appendChild(iconoL);
    contenido.appendChild(lupe);

    content.appendChild(contenido);
};

export default contactoPestania;