let cart = [];

function addToCart(productName, price) {
    const product = cart.find(p => p.name === productName);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    displayCart();
}

function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cart.forEach(product => {
        cartItemsDiv.innerHTML += `<p>${product.name} - ${product.quantity} x ${product.price} Kshs</p>`;
    });
}

function checkout() {
    // Handle checkout logic here
    alert('Checked out with Mpesa');
}
