// Function to handle adding items to the cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: name, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to display items in the cart
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear previous contents
    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<div>${item.name} - $${item.price}</div>`;
    });
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        let itemName = this.getAttribute('data-name');
        let itemPrice = this.getAttribute('data-price');
        addToCart(itemName, itemPrice);
    });
});

// Display cart on shopping cart page load
displayCart();
