import { zapatillas } from "./arrayZapatillas.js";
import pintarZapatillas from "./pintarZapatillas.js";
const pintarFiltros = (father) => {
father.innerHTML='';
const formFiltro=document.createElement('form');//nuevo
formFiltro.className= 'filtros';//nuevo
father.appendChild(formFiltro);//nuevo
  let tallasUnicas = [];
  let Colores = [];
  let Talla = '';
  let color = '';
  let precio='';//nuevo

const fillTallas=()=>{
tallasUnicas.splice(0);
  for (const zapatilla of zapatillas) {
    if (Array.isArray(zapatilla.talla)) {
      for (const t of zapatilla.talla) {
          if (!tallasUnicas.includes(t)) {
          tallasUnicas.push(t);
            }
  }
}
}
tallasUnicas.sort((a, b) => a - b);
}
const fillColores=()=>{
  Colores.splice(0);
    for (const zapatilla of zapatillas) {
    const zcolor =Array.isArray(zapatilla.color)
    ? zapatilla.color
    :[zapatilla.color]
    for (const zc of zcolor) {
      if (!Colores.includes(zc)){
      Colores.push(zc);
    }
  }}
};


const filtrarZapatillas = () => {// funcion nueva que guarda todos los resultados que coincidan 
    let filtered = zapatillas.filter(z => {
      const tieneTalla = !Talla || (Array.isArray(z.talla) && z.talla.includes(parseInt(Talla)));
      const tieneColor = !color || (Array.isArray(z.color) ? z.color.includes(color) : z.color === color);
      const tienePrecio = !precio || (typeof z.precio === 'number' && Math.abs(z.precio - parseFloat(precio)) <= 10);//se agrega input de precio
      return tieneTalla && tieneColor && tienePrecio;
    });
    
    const main = document.querySelector("main");
    if (filtered.length === 0) {
      const mensaje = document.createElement("h2");
    mensaje.textContent = "Productos sugeridos";
    mensaje.style.color = "white";

    const existingSection = document.getElementById("Zapatillas");
  if (existingSection) {
    existingSection.remove();
  }
  main.appendChild(mensaje);
    const copia = [...zapatillas];
    filtered = [];
    for (let i = 0; i < 3 && copia.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * copia.length);
      filtered.push(copia.splice(randomIndex, 1)[0]);
    }
  }
    pintarZapatillas(filtered, main);
};
const createSelectTallas= ()=>{
  const SelectTallas=document.createElement('select');
  const defaultOption = document.createElement('option');//nuevo
    defaultOption.value = '';//nuevo
    defaultOption.textContent = 'Todas las tallas';//nuevo
    SelectTallas.appendChild(defaultOption);//nuevo
  for (const t of tallasUnicas) {
    const option = document.createElement('option');
    option.value = t;
    option.textContent = t;
    SelectTallas.appendChild(option);
  }
  formFiltro.appendChild(SelectTallas);
  SelectTallas.addEventListener("change",(e)=>
  { Talla= e.target.value;
    filtrarZapatillas();
  });
};
const createSelectColor= ()=>{
  const SelectColor=document.createElement('select');
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Todos los colores';//nuevo
    SelectColor.appendChild(defaultOption);//nuevo
  for (const color of Colores) {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    SelectColor.appendChild(option);
  }
  formFiltro.appendChild(SelectColor);
  SelectColor.addEventListener("change",(e)=>{
  color= e.target.value;
  filtrarZapatillas();
  });
};
const createInputPrecio=()=>{//nuevo
  const labelP=document.createElement('label');
  labelP.textContent="Precio Aproximado";
  const inputP=document.createElement('input');
  inputP.type="number";
  inputP.min=0;
  inputP.placeholder="Ej 70";
  labelP.appendChild(inputP);
  formFiltro.appendChild(labelP);

  inputP.addEventListener('input',(e)=>{
    precio=e.target.value;
    filtrarZapatillas();
  });
  return inputP;
}

const cerofiltros=()=>{
  const buttonFill= document.createElement('button');
  buttonFill.className='buttonFill';
  buttonFill.textContent='↻ Reiniciar Filtros';
  formFiltro.appendChild(buttonFill);
  buttonFill.addEventListener("click",reinicioB);

  function reinicioB(){
    tallasUnicas.splice(0);
    fillTallas();
    Colores.splice(0);
    fillColores();
    Talla = '';
    color = '';
    precio='';//nuevo
    pintarZapatillas(zapatillas);
  }
}

fillTallas();
fillColores();
createSelectTallas();
createSelectColor();
createInputPrecio();//nuevo
cerofiltros();
};
export default pintarFiltros;
