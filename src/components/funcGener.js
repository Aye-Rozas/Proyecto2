import  {zapatillas}  from "./arrayZapatillas.js";
//console.log(zapatillas);
//
/*const arrayGenerico=(valorGral, esNumero=false)=>{
  const valorU= new Set();
  for (const zapa of zapatillas) {
    const valores=Array.isArray(zapa[valorGral]) ? zapa[valorGral] : [zapa[valorGral]];
    for(const v of valores){ //error porque no habia const
      valorU.add(v)
    }
}
    const resultado = [...valorU];
  return esNumero
    ? resultado.map(Number).sort((a, b) => a - b)
    : resultado.sort();
};

//const tallasUnicas=arrayGenerico("talla",true);
//console.log(tallasUnicas);
/*const Colores=arrayGenerico("color");
console.log(arrayGenerico("color"));*/





