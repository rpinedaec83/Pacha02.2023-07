// frontend.js
$(document).ready(function () {
    // Obtener la lista de compras de materia prima
    $.get('/compra-materia-prima', function (data) {
      const comprasMateriaPrimaTable = $('#comprasMateriaPrimaTable');
      data.forEach(function (compra) {
        comprasMateriaPrimaTable.append(`
          <tr>
            <td>${compra.CompraMateriaPrimaID}</td>
            <td>${compra.MateriaPrimaID}</td>
            <td>${compra.Fecha}</td>
            <td>${compra.Cantidad}</td>
            <td>${compra.PrecioTotal}</td>
          </tr>
        `);
      });
    });
  });
  