
const btnCart = document.querySelector('.icon-cart')
const containerCartProduct = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    
    containerCartProduct.classList.toggle('hidden-cart')
})