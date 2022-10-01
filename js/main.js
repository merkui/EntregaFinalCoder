let carro = JSON.parse(localStorage.getItem("productosGuardadosJSON")) || [];

const listadoProductos = document.querySelector("#listado");

function productosAHTML() {
  fetch("data.json")
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      let html = "";
      data.forEach((producto) => {
        html =
          html +
          `
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${producto.nombre}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$${producto.precio}</h1>
                <img style="width:200px;height:200px;" src="${producto.imagen}" />
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><small class="text-muted fw-light">stock: ${producto.stock}</small></li>
                    <li><small class="text-muted fw-light">sku: ${producto.id}</small></li>
                  </ul>
                <button onclick="productoAlCarro(${producto.id});" type="button" class="w-100 btn btn-lg btn-outline-primary">Comprar</button>
            </div>
          </div> 
      </div>`;
        document.getElementById("mis_cards").innerHTML = html;
      });
    });
}

productosAHTML();

function filtroLimpieza() {
  fetch("data.json")
    .then((resp) => resp.json())
    .then((data) => {
      const mostrarLimpieza = data.filter((e) => e.cat === `limpieza`);
      //console.log(mostrarLimpieza);
      let html = "";
      mostrarLimpieza.forEach((producto) => {
        html =
          html +
          `
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${producto.nombre}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$${producto.precio}</h1>
                <img style="width:200px;height:200px;" src="${producto.imagen}" />
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><small class="text-muted fw-light">stock: ${producto.stock}</small></li>
                    <li><small class="text-muted fw-light">sku: ${producto.id}</small></li>
                  </ul>
                <button onclick="productoAlCarro(${producto.id});" type="button" class="w-100 btn btn-lg btn-outline-primary">Comprar</button>
            </div>
          </div> 
      </div>`;
        document.getElementById("mis_cards").innerHTML = html;
      });
    });
}

function filtroRopa() {
  fetch("data.json")
    .then((resp) => resp.json())
    .then((data) => {
      const mostrarRopa = data.filter((e) => e.cat === `ropa`);
      //console.log(mostrarRopa);
      let html = "";
      mostrarRopa.forEach((producto) => {
        html =
          html +
          `
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${producto.nombre}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$${producto.precio}</h1>
                <img style="width:200px;height:200px;" src="${producto.imagen}" />
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><small class="text-muted fw-light">stock: ${producto.stock}</small></li>
                    <li><small class="text-muted fw-light">sku: ${producto.id}</small></li>
                  </ul>
                <button onclick="productoAlCarro(${producto.id});" type="button" class="w-100 btn btn-lg btn-outline-primary">Comprar</button>
            </div>
          </div> 
      </div>`;
        document.getElementById("mis_cards").innerHTML = html;
      });
    });
}

function filtroAccesorios() {
  fetch("data.json")
    .then((resp) => resp.json())
    .then((data) => {
      const mostrarAccesorios = data.filter((e) => e.cat === `accesorios`);
      //console.log(mostrarRopa);
      let html = "";
      mostrarAccesorios.forEach((producto) => {
        html =
          html +
          `
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${producto.nombre}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$${producto.precio}</h1>
                <img style="width:200px;height:200px;" src="${producto.imagen}" />
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><small class="text-muted fw-light">stock: ${producto.stock}</small></li>
                    <li><small class="text-muted fw-light">sku: ${producto.id}</small></li>
                  </ul>
                <button onclick="productoAlCarro(${producto.id});" type="button" class="w-100 btn btn-lg btn-outline-primary">Comprar</button>
            </div>
          </div> 
      </div>`;
        document.getElementById("mis_cards").innerHTML = html;
      });
    });
}

//const carro = [];

function productoAlCarro(id) {
  fetch("data.json")
    .then((res) => res.json())
    .then((productos) => {
      const foundProduct = productos.find((item) => item.id == id);
      carro.push(foundProduct);
      console.log(carro);
      //console.log("found " + foundProduct);

      Swal.fire({
        title: "Producto agregado",
        icon: "success",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Seguir comprando",
        denyButtonText: `Ir al checkout`,
      }).then((result) => {
        if (result.isConfirmed) {
        } else if (result.isDenied) {
          window.location.href = `/Tienda3/checkout.html`;
        }
      });

      guardoCarroStorage();
      if (carro) {
        document.getElementById("hayCarro").innerHTML =
          "<button class='btn btn-danger'>Checkout</button>";
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

let guardoCarroStorage = () => {
  let carroAJson = JSON.stringify(carro);
  localStorage.setItem("productosGuardadosJSON", carroAJson);
};

/*llamadas filtros*/
let llamoTodos = document.getElementById("llamoTodos");
llamoTodos.onclick = () => {
  productosAHTML();
};

let llamoLimpieza = document.getElementById("llamoLimpieza");
llamoLimpieza.onclick = () => {
  filtroLimpieza();
};

let llamoRopa = document.getElementById("llamoRopa");
llamoRopa.onclick = () => {
  filtroRopa();
};

let llamoAccesorios = document.getElementById("llamoAccesorios");
llamoAccesorios.onclick = () => {
  filtroAccesorios();
};
