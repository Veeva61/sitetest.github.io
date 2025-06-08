fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = "bg-white p-4 rounded shadow";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="mb-2 w-full h-48 object-cover">
        <h2 class="text-lg font-semibold">${p.name}</h2>
        <p class="text-sm text-gray-500 mb-2">${p.description}</p>
        <p class="font-bold mb-2">${p.price} ₽</p>
        <button onclick="addToCart(${p.id})" class="bg-blue-500 text-white px-4 py-2 rounded">В корзину</button>
      `;
      container.appendChild(card);
    });
  });

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Товар добавлен в корзину!");
}
