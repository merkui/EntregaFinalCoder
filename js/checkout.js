let carritoEnLS = JSON.parse(localStorage.getItem("productosGuardadosJSON"));

if (carritoEnLS) {
  let carro = carritoEnLS;

  function dibujoCarro() {
    if (carro.length == 0) {
      document.getElementById("carro").innerHTML =
        "<tr><td colspan='6'><span id='vacio'><h3>Carro Vacio</h3><a class='btn btn-info' href='index.html'>Ver productos</a></span></td></tr>";
      let totalCarro = 0;
      totalCarro = totalCarro;
      document.getElementById("totalCarro").innerHTML =
        "<b>Total Pedido: " + totalCarro + "</b>";
    } else {
      let html = "";
      let totalCarro = 0;
      for (let i = 0; i < carro.length; i++) {
        let subTotalItem = carro[i].precio * 1;
        //console.log(subTotalItem);
        totalCarro = subTotalItem + totalCarro;
        //console.log(totalCarro);
        html =
          html +
          `
     <tr>
      <td>${carro[i].id}</td>
      <td>${carro[i].nombre}</td>
      <td>${carro[i].cantidadPedida}</td>
      <td> ${carro[i].precio}</td>
      <td> ` +
          subTotalItem +
          ` </td>    
      <td><span style="cursor:pointer;" onclick="borrarItem(${[
        i,
      ]});"> X </span></td>
      </tr>     
      `;
      }

      document.getElementById("carro").innerHTML = html;
      document.getElementById("totalCarro").innerHTML =
        "<b>Total Pedido: " + totalCarro + "</b>";

      document.getElementById("carroMail").value = html;
      document.getElementById("totalCarroMail").value = totalCarro;
    }
  }
  dibujoCarro();

  function borrarItem(id) {
    carro.splice(id, 1);
    dibujoCarro();
    guardoCarroStorage();
  }

  let guardoCarroStorage = () => {
    let carroAJson = JSON.stringify(carro);
    localStorage.setItem("productosGuardadosJSON", carroAJson);
  };
}

function dibujoCarro() {
  if (carro.length == 0) {
    document.getElementById("carro").innerHTML =
      "<tr><td colspan='6'><span id='vacio'><h3>Carro Vacio</h3><a class='btn btn-info' href='index.html'>Ver productos</a></span></td></tr>";
    let totalCarro = 0;
    totalCarro = totalCarro;
    document.getElementById("totalCarro").innerHTML =
      "<b>Total Pedido: " + totalCarro + "</b>";
  } else {
    let html = "";
    let totalCarro = 0;
    for (let i = 0; i < carro.length; i++) {
      let subTotalItem = carro[i].precio * 1;
      //console.log(subTotalItem);
      totalCarro = subTotalItem + totalCarro;
      //console.log(totalCarro);
      html =
        html +
        `
     <tr>
      <td>${carro[i].id}</td>
      <td>${carro[i].nombre}</td>
      <td>${carro[i].cantidadPedida}</td>
      <td> ${carro[i].precio}</td>
      <td> ` +
        subTotalItem +
        ` </td>    
      <td><span style="cursor:pointer;" onclick="borrarItem(${[
        i,
      ]});"> X </span></td>
      </tr>     
      `;
    }

    document.getElementById("carro").innerHTML = html;
    document.getElementById("totalCarro").innerHTML =
      "<b>Total Pedido: " + totalCarro + "</b>";

    document.getElementById("carroMail").value = html;
    document.getElementById("totalCarroMail").value = totalCarro;
  }
}
dibujoCarro();
