const barraNavs = [
  {
    text: 'Novedades y Destacados',
    url: 'https://www.nike.com/es/w/nuevo-3n82y',
  },
  { text: 'Zapatillas', url: '#Zapatillas' },
  { text: 'Carrito', url: 'https://www.nike.com/es/cart' },
];

const pintarHeader = () => {
  const head = document.querySelector('header');
  const nav = document.createElement('nav');
  nav.className = 'flexContainer';
  const ul = document.createElement('ul');

  for (let i = 0; i < barraNavs.length; i++) {
    const barraNav = barraNavs[i];
    const li = document.createElement('li');
    const ancor = document.createElement('a');
    ancor.href = barraNav.url;
    ancor.textContent = barraNav.text;
    li.appendChild(ancor);
    ul.appendChild(li);
  }

  const imgNav = document.createElement('img');
  imgNav.src = './assets/siluetaBlanca.png';
  imgNav.className = 'siluetaB';
  imgNav.addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('closed');
  });

  nav.appendChild(imgNav);
  nav.appendChild(ul);
  head.appendChild(nav);
};

export default pintarHeader;
