import { zapatillas } from './arrayZapatillas.js';
import pintarZapatillas from './pintarZapatillas.js';
const pintarFiltros = (father) => {
  father.innerHTML = '';
  const formFiltro = document.createElement('form'); //nuevo
  formFiltro.className = 'filtros'; //nuevo
  father.appendChild(formFiltro); //nuevo
  let tallasUnicas = [];
  let Colores = [];
  let Talla = '';
  let color = '';
  let precio = ''; //nuevo

  const fillTallas = () => {
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
  };
  const fillColores = () => {
    Colores.splice(0);
    for (const zapatilla of zapatillas) {
      const zcolor = Array.isArray(zapatilla.color)
        ? zapatilla.color
        : [zapatilla.color];
      for (const zc of zcolor) {
        if (!Colores.includes(zc)) {
          Colores.push(zc);
        }
      }
    }
  };
  const ceroSugeridos = () => {
    //funcion nueva para borrar sugerido previo si existia
    const main = document.querySelector('main');
    const msjSugerido = main.querySelector('h2');
    const sectionAnterior = document.getElementById('Zapatillas');
    if (msjSugerido) msjSugerido.remove();
    if (sectionAnterior) sectionAnterior.remove();
  };

  const filtrarZapatillas = () => {
    // funcion nueva que guarda todos los resultados que coincidan
    ceroSugeridos(); //limpiar sugerencia previa
    if (
      precio !== undefined &&
      precio !== null &&
      precio.toString().trim().length < 2
    ) {
      pintarZapatillas(zapatillas, document.querySelector('main'));
      return;
    } //esperar a cargar zapatilla//porque no funciona como corresponde?contanco , no es string lo pasaremos a string para que pueda contar con .length//esta condicion obliga a que esten los 3 puntos corresctos para generar la zapatilla
    let filtered = zapatillas.filter((z) => {
      const tallaOk =
        !Talla || (Array.isArray(z.talla) && z.talla.includes(parseInt(Talla)));
      const colorOk =
        !color ||
        (Array.isArray(z.color) ? z.color.includes(color) : z.color === color);
      //por la misma razon hay que parsear el precio por si viene como string
      const precioOk =
        !precio ||
        (!isNaN(parseFloat(z.precio)) &&
          Math.abs(parseFloat(z.precio) - parseFloat(precio)) <= 10); //se agrega input de precio
      /*console.log('number');*/ //log para verificar si cumple precio
      return tallaOk && colorOk && precioOk;
    });
    if (filtered.length > 0) {
      const msjResult = document.createElement('h2');
      msjResult.textContent = 'Resultados obtenidos';
      msjResult.style.color = 'white';
      const main = document.querySelector('main');
      main.appendChild(msjResult);
    }

    const main = document.querySelector('main'); //selecciono main donde va dentro el msj de sugerencias
    if (filtered.length === 0) {
      // if para crear productos sugeridos
      const msj = document.createElement('h2');
      msj.textContent = 'No encontraste lo que buscabas? Prueba con estas opciones:';
      msj.style.color = 'white';
      const existingSection = document.getElementById('Zapatillas');
      if (existingSection) {
        existingSection.remove();
      }
      main.appendChild(msj);
      const copia = [...zapatillas];
      filtered = [];
      for (let i = 0; i < 3 && copia.length > 0; i++) {
        // bulce que repetimos 3 veces para tener los productos aleatorios y sin repetir
        const prodAleatorio = Math.floor(Math.random() * copia.length);
        filtered.push(copia.splice(prodAleatorio, 1)[0]);
      }
    }
    pintarZapatillas(filtered, main);
  };
  const createSelectTallas = () => {
    const SelectTallas = document.createElement('select');
    const defaultOption = document.createElement('option'); //nuevo
    defaultOption.value = ''; //nuevo
    defaultOption.textContent = 'Todas las tallas'; //nuevo
    SelectTallas.appendChild(defaultOption); //nuevo
    for (const t of tallasUnicas) {
      const option = document.createElement('option');
      option.value = t;
      option.textContent = t;
      SelectTallas.appendChild(option);
    }
    formFiltro.appendChild(SelectTallas);
    SelectTallas.addEventListener('change', (e) => {
      Talla = e.target.value;
      filtrarZapatillas();
    });
  };
  const createSelectColor = () => {
    const SelectColor = document.createElement('select');
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Todos los colores'; //nuevo
    SelectColor.appendChild(defaultOption); //nuevo
    for (const color of Colores) {
      const option = document.createElement('option');
      option.value = color;
      option.textContent = color;
      SelectColor.appendChild(option);
    }
    formFiltro.appendChild(SelectColor);
    SelectColor.addEventListener('change', (e) => {
      color = e.target.value;
      filtrarZapatillas();
    });
  };
  const createInputPrecio = () => {
    //nuevo
    const labelP = document.createElement('label');
    labelP.textContent = 'Precio Aproximado';
    const inputP = document.createElement('input');
    inputP.type = 'number';
    inputP.min = 0;
    inputP.placeholder = 'Ej 70';
    labelP.appendChild(inputP);
    formFiltro.appendChild(labelP);

    inputP.addEventListener('input', (e) => {
      precio = e.target.value;
      filtrarZapatillas();
    });
    return inputP;
  };

  const cerofiltros = () => {
    const buttonFill = document.createElement('button');
    buttonFill.className = 'buttonFill';
    buttonFill.textContent = '↻ Reiniciar Filtros';
    formFiltro.appendChild(buttonFill);
    buttonFill.addEventListener('click', reinicioB);

    function reinicioB() {
      ceroSugeridos();
      tallasUnicas.splice(0);
      fillTallas();
      Colores.splice(0);
      fillColores();
      Talla = '';
      color = '';
      precio = ''; //nuevo
      pintarZapatillas(zapatillas);
    }
  };

  fillTallas();
  fillColores();
  createSelectTallas();
  createSelectColor();
  createInputPrecio(); //nuevo
  cerofiltros();
};
export default pintarFiltros;
