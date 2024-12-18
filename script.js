//////////////// Cerrar y abrir carrito /////////////////
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});
//////////////////////////////////////////////////////

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista contenedores productos
const listaProductos = document.querySelector('.card-container');

// Lista de productos
let productos = [];

// Saco la información de las cards al apretar el botón "Agregar al carrito"
listaProductos.addEventListener('click', function (e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const product = e.target.parentElement;

        const informacionProducto = {
            cantidad: 1,
            titulo: product.querySelector('h3').textContent,
            precio: parseInt(product.querySelector('p').textContent.replace('$', '')), // Convertir precio a número
        };

        // Agregar el producto al arreglo de productos
        productos.push(informacionProducto);

        showHTML(); // Mostrar los productos en el carrito
    }
    
});

// Función para mostrar los productos en el carrito
const showHTML = () => {
    rowProduct.innerHTML = ''; // Limpiar el contenido de los productos en el carrito

    productos.forEach((product, index) => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.cantidad}</span>
            <p class="titulo-producto-carrito">${product.titulo}</p>
            <span class="precio-producto-carrito">${'$' + product.precio}</span>
        </div>
        <i class="close-icon-cart fa-solid fa-xmark" data-index="${index}"></i>
        `;

        rowProduct.append(containerProduct);
    });

    // Agregar el evento para eliminar productos del carrito
    const closeIcons = document.querySelectorAll('.close-icon-cart');
    closeIcons.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index'); // Obtener el índice del producto a eliminar
            productos.splice(index, 1); // Eliminar el producto del arreglo
            showHTML(); // Volver a mostrar el carrito actualizado
        });
    });

    
    // Calcular la suma total de los productos en el carrito
    const total = productos.reduce((suma, product) => {
        return suma + (product.precio * product.cantidad); 
    }, 0);

    // Mostrar el total
    
    const totalElement = document.querySelector('.total-price');
    if (totalElement) {
        totalElement.textContent = `Total: $${Math.round(total)}`; 
    } else {
        const totalContainer = document.createElement('div');
        totalContainer.classList.add('total-container');
        totalContainer.innerHTML = `
            <p class="total-price">Total: $${Math.round(total)}</p> <!-- Total redondeado -->
        `;
        containerCartProducts.append(totalContainer); // Agregar el total
    }

};

// Animacion del logo 
window.addEventListener('load', () => {
    
    const slideOne = document.querySelector('.banner .slide_one');
    
    
    setTimeout(() => {
        slideOne.classList.add('show');
    }, 500); // Espera 500ms para la animación 
});