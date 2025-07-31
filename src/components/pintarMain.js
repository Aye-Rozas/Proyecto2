import pintarFiltros from "./pintarFiltros.js";
import pintarZapatillas from "./pintarZapatillas.js";
import { zapatillas } from "./arrayZapatillas.js";

const pintarMain = () => {
  const mainElemento = document.querySelector("main");
  pintarFiltros(mainElemento);

  pintarZapatillas(zapatillas, mainElemento);
  
};

export default pintarMain;
