

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón del carrito y el contenedor del carrito
    const btnCart = document.querySelector('.container-cart-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');

 
    // Abrir y cerrar el carrito
    btnCart.addEventListener('click', function() {
        containerCartProducts.classList.toggle('hidden-cart');
    });

    //  Pproductos del carrito
    const listaProductos = document.querySelector('.card-container');
    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    listaProductos.addEventListener('click', function(e) {
        if (e.target.classList.contains('agregar-carrito')) {
            const product = e.target.closest('.card');
            const informacionProducto = {
                cantidad: 1,
                titulo: product.querySelector('h3').textContent,
                precio: parseInt(product.querySelector('p').textContent.replace('$', ''))
            };

            productos.push(informacionProducto);
            localStorage.setItem('productos', JSON.stringify(productos));  // Guardar en localStorage
            showHTML();
        }
    });

    // Mostrar productos en el carrito
    const showHTML = () => {
        const rowProduct = document.querySelector('.cart-product-list');
        rowProduct.innerHTML = '';  // Limpiar carrito

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

        // Eliminar productos del carrito {Visto en un tutorial jaja}
        const closeIcons = document.querySelectorAll('.close-icon-cart');
        closeIcons.forEach((icon) => {
            icon.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                productos.splice(index, 1);
                localStorage.setItem('productos', JSON.stringify(productos));
                showHTML();
            });
        });

        // Calcular total
        
         let total = 0;
         for (let i = 0; i < productos.length; i++) {
             total += productos[i].precio;
         }
 
         // Mostrar el total
         const totalElement = document.querySelector('.total-price');
         if (totalElement) {
             totalElement.textContent = 'Total: $' + total; // Mostrar el total sin redondeo
         }
     };

    showHTML();  // Mostrar productos al cargar




    
});

// Animación del logo
window.addEventListener('load', () => {
    const slideOne = document.querySelector('.banner .slide_one');
    setTimeout(() => {
        slideOne.classList.add('show');
    }, 400); // Espera 400ms para la animación
});


const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        
        const nombres = document.getElementById('nombres').value;
        const apellido = document.getElementById('apellido').value; 
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        responseMessage.textContent = `Gracias, ${nombres} ${apellido}. Tu mensaje fué enviado con éxito.`;
        responseMessage.style.color = 'red';

    });


//Funcion fech me permite conectar con una API-end Point

fetch ("https://api.chucknorris.io/jokes/random")
.then ((respuesta)=>respuesta.json())
.then((datos)=>{
    console.log(datos)
})


document.getElementById('boton').addEventListener('click', () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            document.getElementById('chiste').textContent = datos.value;
        })
        .catch((error) => {
            console.error('Error al obtener el chiste:', error);
            document.getElementById('chiste').textContent = 'No se pudo obtener un chiste. Intenta de nuevo.';
        });
});

