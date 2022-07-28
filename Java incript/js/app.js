const productos = [{
        "precio": 1800,
        "id": 1,
        "title": "Amalfi",
        "imagen": "../img/amalfi.jpeg"
    },
    {
        "precio": 1950,
        "id": 2,
        "title": "Araceli",
        "imagen": "../img/araceli.jpeg"
    },
    {
        "precio": 1500,
        "id": 3,
        "title": "Bahia",
        "imagen": "../img/bahia.jpeg"
    },
    {
        "precio": 1850,
        "id": 4,
        "title": "Casie",
        "imagen": "../img/Casie.jpeg"
    },
    {
        "precio": 1550,
        "id": 5,
        "title": "Dakota",
        "imagen": "../img/Dakota.jpeg"
    },
    {
        "precio": 1700,
        "id": 6,
        "title": "Kate",
        "imagen": "../img/kate.jpeg"
    },
    {
        "precio": 1400,
        "id": 7,
        "title": "Málaga",
        "imagen": "../img/málaga.jpeg"
    },
    {
        "precio": 2800,
        "id": 8,
        "title": "Melody",
        "imagen": "../img/melody.jpeg"
    }

];

const templateProductos = document.getElementById("productos").content;
const templatefooter = document.getElementById("templatefooter").content;
const TemplateCarrito = document.getElementById("Templatecarrito").content;
const cajas = document.getElementById("cajas");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const fragment = document.createDocumentFragment();
let carrito = []


$("#Formulariodeingresos").submit(function(e) {
    e.preventDefault();

    let hijos = $(this).children(":input");
    console.log(hijos);
    console.log(hijos[0].value);
    console.log(hijos[1].value);

    $('.Usuario').fadeOut();
})



items.addEventListener('click', e => {
    btnsuma(e)
})

cajas.addEventListener("click", e => {
    addCarrito(e)
})


document.addEventListener("DOMContentLoaded", () => {
    CargarProductos()
})

function CargarProductos() {
    productos.forEach(producto => {
        templateProductos.querySelector("h3").textContent = producto.title
        templateProductos.querySelector('h2').textContent = producto.precio
        templateProductos.querySelector('img').setAttribute("src", producto.imagen)
        templateProductos.querySelector('.buttoncarro').dataset.id = producto.id

        const clone = templateProductos.cloneNode(true)
        fragment.appendChild(clone)

    })
    cajas.appendChild(fragment);
}


const addCarrito = e => {
    if (e.target.classList.contains("buttoncarro")) {
        setCarrito(e.target.parentElement)

    }
    e.stopPropagation()
}

const setCarrito = Objecto => {
    if (carrito.find(p => p.id == Objecto.querySelector('.buttoncarro').dataset.id) != undefined) {
        carrito.find(p => p.id == Objecto.querySelector('.buttoncarro').dataset.id).cantidad++;
    } else {
        const producto = {
            id: Objecto.querySelector(".buttoncarro").dataset.id,
            title: Objecto.querySelector("h3").textContent,
            precio: Objecto.querySelector("h2").textContent,
            cantidad: 1
        }

        carrito.push(producto)

    }
    console.log(carrito)
    SelecionarCarrito()
}

const SelecionarCarrito = () => {
    items.innerHTML = ''
    carrito.forEach(producto => {
        TemplateCarrito.querySelector('th').textContent = producto.id;
        TemplateCarrito.querySelectorAll('td')[0].textContent = producto.title;
        TemplateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
        TemplateCarrito.querySelector('.btnsuma').dataset.id = producto.id;
        TemplateCarrito.querySelector('.btnresta').dataset.id = producto.id;
        TemplateCarrito.querySelector('span').textContent = producto.precio


        const clone = TemplateCarrito.cloneNode(true)
        fragment.appendChild(clone)

    })

    items.appendChild(fragment)


    PintarFooter()
}



const PintarFooter = () => {
    footer.innerHTML = ""
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = "Carrito vacío - comience a comprar!"

        return

    }

    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)


    templatefooter.querySelectorAll("td")[0].textContent = nCantidad
    templatefooter.querySelector("span").textContent = nPrecio

    const clone = templatefooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnvaciar = document.getElementById("vaciar-carrito")
    btnvaciar.addEventListener('click', () => {
        carrito = []
        SelecionarCarrito()
    })
}

const btnsuma = e => {
    if (e.target.classList.contains('btnsuma')) {
        carrito.find(p => p.id == e.target.dataset.id).cantidad++;

        SelecionarCarrito()
    }
    if (e.target.classList.contains('btnresta')) {
        carrito.find(p => p.id == e.target.dataset.id).cantidad--;

        SelecionarCarrito()
    }
}
let url = 'https://jsonplaceholder.typicode.com/users/';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            }




