
function fillZapas(zapatillas) {
  const condiciones=[
    {nombre:fillPerfil, resultado:fillPerfil(zapatillas.perfil)},
    {nombre:fillTallas, resultado:fillTallas(zapatillas.talla)},
    {nombre:fillPublicos, resultado:fillPublicos(zapatillas.público)},
    {nombre:fillColores, resultado:fillColores(zapatillas.color)},
  ];
  let todasCumplidas= true;
  condiciones.forEach(cond=>{
    if(!cond.resultado){
      console.log(`la condicion ${cond.nombre} no se cumple`);
      todasCumplidas=false;      
    }
  });
  if(todasCumplidas){
    console.log("todas las condiciones se cumplen");
    return true;    
  }
  else
  {return false;}
}
fillZapas(zapatillas);