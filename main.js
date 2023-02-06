// Data productos

const productos = [
    {
        Id: 1,
        nombre: "Bandeja mosaico",
        precio: 30000,
        foto: "https://i.pinimg.com/originals/71/3d/68/713d68cce00a8937f19e524765fcb6d0.png"
    },

    {
        Id: 2,
        nombre: "Cuadro mosaico",
        precio: 60000,
        foto: "https://i.pinimg.com/originals/9a/0d/36/9a0d36cc7a7c75c302d7e32467243bff.jpg"
    },

    {
        Id: 3,
        nombre: "tornamesa mosaico",
        precio: 45000,
        foto: "https://i.pinimg.com/originals/6a/79/23/6a7923d42f181c0f27ffbe525dcdd09d.jpg"
    },

    {
        Id: 4,
        nombre: "Bandeja mosaico",
        precio: 30000,
        foto: "https://i.pinimg.com/originals/79/f2/17/79f2170bb0a5ece617b9181a87f22b23.jpg"
    },

    {
        Id: 5,
        nombre: "Posavasos mosaico",
        precio: 10000,
        foto: "https://i.pinimg.com/originals/67/e3/e0/67e3e03865a68d2ac74aa91a73879194.jpg"
    },

    {
        Id: 6,
        nombre: "Caja té mosaico",
        precio: 15000,
        foto: "https://i.pinimg.com/originals/f6/78/b2/f678b2197e63bca556fd835efb45e5f5.jpg"
    },

    {
        Id: 7,
        nombre: "Número casa mosaico",
        precio: 25000,
        foto: "https://defrenteparaomar.com/wp-content/04-diy/201902-numero-casa-mosaico/02-numero-para-casa-mosaico.jpg"
    },

    {
        Id: 8,
        nombre: "Lámpara mosaico",
        precio: 45000,
        foto: "https://i.pinimg.com/originals/21/f7/b6/21f7b6539a6120d2254876adc4f1a4aa.jpg"
    },

    {
        Id: 9,
        nombre: "Bandeja chica mosaico",
        precio: 18000,
        foto: "https://i.pinimg.com/originals/df/4e/0e/df4e0e41d198abfa2e9141fe58066905.jpg"
    },

    {
        Id: 10,
        nombre: "Cenicero mosaico",
        precio: 15000,
        foto: "https://i.pinimg.com/originals/a8/1e/3f/a81e3ff7884ccd91cfbd21712a31b1fb.jpg"
    }
]


// Carga de productos en index.html
var cardProductos = document.querySelector(".contenedor");
var listaProductos = "";
cardProductos.classList.add("d-flex", "wrap", "p-2");

function getProductos() {

    productos.map((d, index) => {
        listaProductos = listaProductos +
            `<div key=${index} class="row row-cols-2 row-cols-md-3 g-4 cardPdto">
            <div class="col">
            <div class="card h-100">
                <img src="${d.foto}" class="card-img-top imgPdto" alt="...">
                <div class="card-body">
                <h5 class="card-title">${d.nombre}</h5>
                <p class="card-text">Código:${d.Id}</p>
                <p class="card-text">Precio $: ${d.precio}</p>
                </div>
                <div class="d-flex column justify-content-center" class="tarjeta-modificar">
                <button class="btnAgregar" value=btn onclick="modificarCantidad(-1, ${d.Id})">-</button>
                <p class="mb-0 mt-2 align-self:center" id="cantX_${d.Id}" >1</p>
                <button class="btnAgregar" value=btn onclick="modificarCantidad(+1, ${d.Id})">+</button>
            </div>
            <div class="agregarCarro" class="d-flex">
                <button class="btnAdd" style="padding: 1vw; border: solid 1px gray;
                border-radius: 10%; margin: 1vw 1vw; width:8vw" value=btnCarro key=nada id="btnAdd_${d.Id}" onclick="agregarProducto(${d.Id})">Agregar</button>
            </div>
            </div>
            </div>
        </div>`;
    });
    cardProductos.innerHTML = listaProductos;
};

// Función para modificar cantidad de productos en cada card.
function modificarCantidad(btn, Id) {
    var cantidadCarrito = Number(document.querySelector(`#cantX_${Id}`).textContent);
    cantidadCarrito = cantidadCarrito + btn;

    if (cantidadCarrito > 0) {
        document.querySelector(`#cantX_${Id}`).textContent = cantidadCarrito;
    } else {
        cantidadCarrito = 1;
    }
};

// Función para modificar cantidad en canasta de compras
function variarCantidad(btnCarro, Id) {
    let cantidadCanasta = Number(document.querySelector(`#cantCanasta_${Id}`).textContent);
    
    console.log(cantidadCanasta);
    cantidadCanasta = cantidadCanasta + btnCarro;
        
    if (cantidadCarrito > 0) {
        document.querySelector(`#cantCanasta_${Id}`).textContent = cantidadCanasta;
    } else {
        cantidadCarrito = 1;
    }
    console.log(cantidadCanasta);
};

// Agregar cantidad productos al carro.
var dataCanasta = [];
             
    function actualizarCanasta(imgPdto) {
        let datosProductosAComprar = document.querySelector(".datosProductosAComprar");
        var renderCarrito = "";
    dataCanasta.map((d, Id) => {
        var cantidad = Number(document.querySelector(`#cantX_${d.Id}`).textContent);
        renderCarrito = renderCarrito +
            `<tr "class="filaTabla" onchange="calcularTotales()">
                    <td>Código ${d.Id}</td>
                    <td ><img src="${d.foto}" alt="" id="fotoCarrito"></td>
                    <td>${d.nombre}</td>
                    <td id="precioPdto_${d.Id}">$ ${d.precio}</td>
                    <td><div class="d-flex column justify-content-center" id="tarjeta-modificarCarro">
                        <button class="btnAddCarro" value=btnCanasta id="btnCarro_${d.Id} onclick="variarCantidad(-1, ${d.Id})">-</button>
                        <p class="mb-0 mt-0 align-self:center" id="cantCanasta_${d.Id}">${cantidad}</p>
                        <button class="btnAddCarro" value=btnCanasta id="btnCarro_${d.Id} onclick="variarCantidad(1, ${d.Id})">+</button></td>
                    <td>$ ${d.precio * cantidad}</td>
                    <td><a></a><img src="./assets/img/trash-svgrepo-com.svg" alt="" onclick="removePdto(${Id})"></a></td>
                </tr>`;           
    });
    datosProductosAComprar.innerHTML = renderCarrito;
};

function agregarProducto(Id) {
   
    let pdto = productos.find(d => d.Id == Id)
    let nuevoPdto = pdto;

    nuevoPdto = dataCanasta.push(pdto);
    actualizarCanasta();
    console.log(dataCanasta);

};

// Cálculo de valores finales de la compra
function calcularTotales() {
    var valores = document.querySelector(".valoresTotales").textContent;
    var valoresFinales = "";
    console.log(valoresFinales);
    var subtotalNeto = 0;
    const porcIva = 0.19;
    var iva = 0; 

    iva = subtotalNeto * porcIva;

    dataCanasta.map((d, Id) => {
        let cantidad = Number(document.querySelector(`#cantCanasta_${d.Id}`).textContent);
        var preciosPdto = Number(document.querySelector(`#preciosPdto_${d.Id}`).textContent);
    
    subtotalNeto = `${preciosPdto * cantidad}`;
    console.log(subtotalNeto);

         valoresFinales = valoresFinales +
            `<div class="preciosCarrito" >Subtotal Neto
            <span>$ ${subtotalNeto}</span>
            </div>
            <div class="preciosCarrito">IVA
            <span>$ "${iva}"</span>
            </div>
            <div class="preciosCarrito">Total a pagar
            <span>$ ${subtotalNeto + iva}</span>
            </div>`;           
            console.log(valoresFinales);
    })
    if (subtotalNeto > 0) {
        document.querySelector(".valoresTotales").innerHTML =valoresFinales;
        console.log(valoresFinales);
        }             
        actualizarCanasta();     
};

// Remover producto de la canasta
function removePdto(Id) {
    dataCanasta.find(d => d.Id == Id);
    let pdtoRemove = dataCanasta.splice(Id, 1); 
    
    dataCanasta.filter(d => {
        d.iId !== pdtoRemove; 
    })
    actualizarCanasta();  
};    

// Vaciar carro de compras
function vaciarCarrito() {
    if (dataCanasta.length > 0) {
            dataCanasta.length = 0;
    }
actualizarCanasta();     
};
        

       
    