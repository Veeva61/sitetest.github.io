fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = "bg-white text-black rounded-xl overflow-hidden shadow-lg";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold">${p.name}</h2>
          <p class="text-sm text-gray-600">${p.description}</p>
          <p class="text-lg font-semibold mt-2">${p.price} ₽</p>
          <button onclick="addToCart(${p.id})" class="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Добавить в корзину</button>
        </div>
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
