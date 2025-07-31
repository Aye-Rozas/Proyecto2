import { zapatillas } from "./arrayZapatillas.js";
const pintarZapatillas = (zapatillas, father) => {
const existing = document.getElementById("Zapatillas");
if (existing) {
  existing.remove();
}
const mySection= document.createElement('section');
mySection.className='flexContainer';
mySection.id='Zapatillas';
mySection.innerHTML = "";
console.log(zapatillas);

  for (const zapatilla of zapatillas) {
    const divz = document.createElement("div");
    const divimgz = document.createElement("div");
    const imgz = document.createElement("img");
    const nombre = document.createElement("h3");
    const precio = document.createElement("h4");
    const buttonz = document.createElement("button");

    divimgz.className = "imgz";
    imgz.src = zapatilla.img;
    nombre.textContent = zapatilla.nombre;
    precio.textContent = `$${zapatilla.precio}`;
    buttonz.textContent = `Comprar`;

    divz.appendChild(divimgz);
    divimgz.appendChild(imgz);
    divz.appendChild(nombre);
    divz.appendChild(precio);
    divz.appendChild(buttonz);

    mySection.appendChild(divz);
  }
  father.appendChild(mySection);
};

export default pintarZapatillas;
