let cart = [];

fetch('catalog.json')
    .then(response => response.json())
    .then(data => {
        const catalog = document.getElementById('catalog');
        data.forEach(item => {
            const product = document.createElement('div');
            product.className = 'product';
            product.innerHTML = `<p>${item.name} - ${item.price} ₽</p>
                                 <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Добавить</button>`;
            catalog.appendChild(product);
        });
    });

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '<h3>Корзина</h3>';
    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.name} - ${item.price} ₽</p>`;
    });
}

function clearCart() {
    cart = [];
    updateCart();
}
