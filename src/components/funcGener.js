/*import { zapatillas } from "./arrayZapatillas.js";
console.log(zapatillas);*/

/*const arrayGenerico=(valorGral, esNumero=false)=>{
  const valorU= new Set();
  for (const z of zapatillas) {
    const valores=Array.isArray(z[valorGral]) ? z[valorGral] : [z[valorGral]];
    for(const v of valores){ //error porque no habia const
      valorU.add(v)
    }
}
const resultado=[...valorU];
console.log(`Valores únicos antes de ordenar (${valorGral}):`, resultado);
//retorno o esta vacio, probamos con spread
if (esNumero){
  return resultado.map(Number).sort((a,b)=>a-b);
}
else{
  return resultado.sort((a, b) => a.toString().toLowerCase().localeCompare(b.toString().toLowerCase()));
}
};
//const tallasUnicas=arrayGenerico("talla",true);
//console.log(tallasUnicas);
/*const Colores=arrayGenerico("color");
console.log(arrayGenerico("color"));*/





