const contenedor = document.getElementById('secciones-tienda');

data.forEach(item => {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'tarjeta';

  tarjeta.innerHTML = `
    <img src="${item.img}" alt="${item.nombre}" class="tarjeta-img">
    <h3>${item.nombre}</h3>
  `;

  contenedor.appendChild(tarjeta);
});