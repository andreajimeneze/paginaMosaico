// Data productos

let productos = [
    {
        Id: "001",
        nombre: "Bandeja mosaico",
        precio: 30000,
        foto: "https://i.pinimg.com/originals/71/3d/68/713d68cce00a8937f19e524765fcb6d0.png"
    },

    {
        Id: "002",
        nombre: "Cuadro mosaico",
        precio: 60000,
        foto: "https://i.pinimg.com/originals/9a/0d/36/9a0d36cc7a7c75c302d7e32467243bff.jpg"
    },

    {
        Id: "003",
        nombre: "tornamesa mosaico",
        precio: 45000,
        foto: "https://i.pinimg.com/originals/6a/79/23/6a7923d42f181c0f27ffbe525dcdd09d.jpg"
    },

    {
        Id: "004",
        nombre: "Bandeja mosaico",
        precio: 30000,
        foto: "https://i.pinimg.com/originals/79/f2/17/79f2170bb0a5ece617b9181a87f22b23.jpg"
    },

    {
        Id: "005",
        nombre: "Posavasos mosaico",
        precio: 10000,
        foto: "https://i.pinimg.com/originals/67/e3/e0/67e3e03865a68d2ac74aa91a73879194.jpg"
    },

    {
        Id: "006",
        nombre: "Caja té mosaico",
        precio: 15000,
        foto: "https://i.pinimg.com/originals/f6/78/b2/f678b2197e63bca556fd835efb45e5f5.jpg"
    },

    {
        Id: "007",
        nombre: "Número casa mosaico",
        precio: 25000,
        foto: "https://defrenteparaomar.com/wp-content/04-diy/201902-numero-casa-mosaico/02-numero-para-casa-mosaico.jpg"
    },

    {
        Id: "008",
        nombre: "Lámpara mosaico",
        precio: 45000,
        foto: "https://i.pinimg.com/originals/21/f7/b6/21f7b6539a6120d2254876adc4f1a4aa.jpg"
    },

    {
        Id: "009",
        nombre: "Bandeja chica mosaico",
        precio: 18000,
        foto: "https://i.pinimg.com/originals/df/4e/0e/df4e0e41d198abfa2e9141fe58066905.jpg"
    },

    {
        Id: "0010",
        nombre: "Cenicero mosaico",
        precio: 15000,
        foto: "https://i.pinimg.com/originals/a8/1e/3f/a81e3ff7884ccd91cfbd21712a31b1fb.jpg"
    }
]

console.log(productos);

// Carga de productos en index.html

function getProductos() {
    var cardProductos = document.querySelector(".contenedor");
    var listaProductos = "";

productos.map((d, index) => {
    listaProductos = listaProductos +
    `<div key="${index}" class="card" >
         <img src="${d.foto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${d.nombre}</h5>
          <p class="card-text">${d.Id}</p>
          <h6>${d.precio}</h6>
          <div class="tarjeta-modificar">
            <button>-</button>
            <p id="cant_${d.Id}">1</p>
            <button>+</button>
          </div>
         <button class="btnAgregar">Agregar</button>
        </div>
    </div>`;
    });
    cardProductos.innerHTML = listaProductos;
};