const express = require('express');
const bodyParser = require('body-parser');
const culqi = require('culqi');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

culqi.configure({
  publicKey: 'tu_public_key',
  secretKey: 'tu_secret_key',
});

app.post('/api/procesar-pago', async (req, res) => {
  const { token, monto, descripcion } = req.body;

  try {
    const cargo = await culqi.cargos.crear({
      moneda: 'PEN',
      monto: monto * 100,
      descripcion,
      source_id: token,
      correo_electronico: 'correo@ejemplo.com',
    });

    res.json({ mensaje: 'Pago procesado con éxito', cargo });
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    res.status(500).json({ mensaje: 'Error al procesar el pago' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
