
// controllers/compraMateriaPrimaController.js
const CompraMateriaPrima = require('../models/CompraMateriaPrima');

// Crear una nueva compra de materia prima
exports.createCompraMateriaPrima = async (req, res) => {
  try {
    const compraMateriaPrima = await CompraMateriaPrima.create(req.body);
    res.status(201).json(compraMateriaPrima);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la compra de materia prima' });
  }
};

// Obtener todas las compras de materia prima
exports.getAllComprasMateriaPrima = async (req, res) => {
  try {
    const comprasMateriaPrima = await CompraMateriaPrima.findAll();
    res.status(200).json(comprasMateriaPrima);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las compras de materia prima' });
  }
};

// Actualizar una compra de materia prima por ID
exports.updateCompraMateriaPrima = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await CompraMateriaPrima.update(req.body, {
      where: { CompraMateriaPrimaID: id },
    });
    if (updated) {
      const updatedCompraMateriaPrima = await CompraMateriaPrima.findOne({
        where: { CompraMateriaPrimaID: id },
      });
      res.status(200).json(updatedCompraMateriaPrima);
    } else {
      throw new Error('Compra de materia prima no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la compra de materia prima' });
  }
};

// Eliminar una compra de materia prima por ID
exports.deleteCompraMateriaPrima = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await CompraMateriaPrima.destroy({
      where: { CompraMateriaPrimaID: id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      throw new Error('Compra de materia prima no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la compra de materia prima' });
  }
};

