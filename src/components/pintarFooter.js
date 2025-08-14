export const Recursos = [
  { text: 'Recursos', url: '' },
  {
    text: 'Tarjeta de regalo',
    url: 'https://www.nike.com/es/tarjetas-de-regalo',
  },
  {
    text: 'Tarjeta de regalo corporativa',
    url: 'https://nikegiftcardsforbusiness.com/',
  },
  { text: 'Buscar una tienda', url: 'https://www.nike.com/es/retail/' },
  { text: 'Nike journal', url: 'https://www.nike.com/es/historias' },
  { text: 'Hazte Member', url: 'https://www.nike.com/es/inscripcion' },
  {
    text: 'Descuento para estudiantes',
    url: 'https://www.nike.com/es/student-discount',
  },
  { text: 'Comentarios', url: 'https://www.nike.com/es/#site-feedback' },
  {
    text: 'Códigos promocionales',
    url: 'https://www.nike.com/es/codigo-promocional',
  },
];
export const Ayuda = [
  { text: 'Ayuda', url: '' },
  { text: 'Obtener ayuda', url: 'https://www.nike.com/es/help' },
  { text: 'Estado del pedido', url: 'https://www.nike.com/es/orders/details' },
  {
    text: 'Envíos y entregas',
    url: 'https://www.nike.com/es/help/a/envio-entrega',
  },
  {
    text: 'Devoluciones',
    url: 'https://www.nike.com/es/help/a/politica-de-devolucion',
  },
  {
    text: 'Opciones de pago',
    url: 'https://www.nike.com/es/help/a/opciones-de-pago',
  },
  { text: 'Contacto', url: 'https://www.nike.com/es/help/#contact' },
  { text: 'Evaluaciones', url: 'https://www.nike.com/es/help/a/resenas' },
  {
    text: 'Ayuda con los códigos promocionales de Nike',
    url: 'https://www.nike.com/es/help/a/aplicar-promo',
  },
];
export const Empresa = [
  { text: 'Empresa', url: '' },
  {
    text: 'Acerca de Nike',
    url: 'https://about.nike.com/en/?_gl=1*rbbkka*_gcl_aw*R0NMLjE3NTIzNjQ1MTQuQ2owS0NRandqOGpEQmhEMUFSSXNBQ1JWMlRzTWxLU3dkX1had3V5WU9oeTZVSFRBTUxFcDdQWnNlTm5NZGxOTVRKM3RoQVZ3bFA3N2pPVWFBbXRqRUFMd193Y0I.*_gcl_dc*R0NMLjE3NTIzNjQ1MTQuQ2owS0NRandqOGpEQmhEMUFSSXNBQ1JWMlRzTWxLU3dkX1had3V5WU9oeTZVSFRBTUxFcDdQWnNlTm5NZGxOTVRKM3RoQVZ3bFA3N2pPVWFBbXRqRUFMd193Y0I.*_gcl_au*MTM1MTIyMTI5OS4xNzUyMzY0MzUy*FPAU*MTM1MTIyMTI5OS4xNzUyMzY0MzUy',
  },
  { text: 'Novedades', url: 'https://about.nike.com/en/newsroom' },
  { text: 'Empleo', url: 'https://careers.nike.com/es' },
  { text: 'Inversores', url: 'https://investors.nike.com/Home/default.aspx' },
  { text: 'Sostenibilidad', url: 'https://www.nike.com/es/sostenibilidad' },
  {
    text: 'Accesibilidad',
    url: 'https://www.nike.com/es/accessibility/statement',
  },
  { text: 'Propósito', url: 'https://www.nike.com/es/proposito' },
  {
    text: 'Informar de un problema',
    url: 'https://secure.ethicspoint.com/domain/media/eseu/gui/56821/index.html',
  },
];

const createFooterPart = (array) => {
  const ul = document.createElement('ul');
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = array[i].url;
    a.textContent = array[i].text;
    li.append(a);
    ul.append(li);
  }
  return ul;
};

const pintarFooter = () => {
  const footer = document.querySelector('footer');
  footer.className = 'flexContainer';
  footer.append(createFooterPart(Recursos));
  footer.append(createFooterPart(Ayuda));
  footer.append(createFooterPart(Empresa));
};

export default pintarFooter;
