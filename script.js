// search
const searchBar = document.querySelector('.search-bar input');
const productItems = document.querySelectorAll('.product-item');
const productSection = document.querySelector('.products');

const noProductMessage = document.createElement('p');
noProductMessage.textContent = "No products found.";
noProductMessage.style.display = 'none'; 
noProductMessage.style.color = 'red';
productSection.appendChild(noProductMessage); 
searchBar.addEventListener('keyup', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    let productFound = false;
    
    productItems.forEach((product) => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        
        if (productName.includes(searchQuery)) {
            product.style.display = 'block';
            productFound = true;
        } else {
            product.style.display = 'none';
        }
    });
    
    if (!productFound) {
        noProductMessage.style.display = 'block';
    } else {
        noProductMessage.style.display = 'none';
    }
});


// cart count
let cartCount = 0;

const addToCartButtons = document.querySelectorAll('.product-item button');
const cartLink = document.querySelector('.cart a');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCart();
    });
});

function updateCart() {
    cartLink.textContent = `Cart (${cartCount})`;
}
