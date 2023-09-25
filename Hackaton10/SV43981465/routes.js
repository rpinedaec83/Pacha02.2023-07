const express = require("express");
const armario = require("./models/Armario");
const router = express.Router();
const bodyParser = require('body-parser');

const Departamento = armario.Departamento;
const Provincia = armario.Provincia;
const Distrito = armario.Distrito;
const Ubigeo = armario.Ubigeo;
const Proveedores = armario.Proveedores;
const Materiales = armario.Materiales;
const CompraInsumos = armario.CompraInsumos;
const CompraMateriaPrima = armario.CompraMateriaPrima;
const Usuario = armario.Usuario;
const Empleado = armario.Empleado;  
const Produccion = armario.Produccion;
const TipoPersonal = armario.TipoPersonal;
const Sexo = armario.Sexo;
const Nacionalidad = armario.Nacionalidad;

// Ruta para agregar un departamento
router.post('/agregar-departamento', bodyParser.json(), async (req, res) => {
    try {
      const nuevoDepartamento = new Departamento({
        nombreDepartamento: req.body.nombreDepartamento,
      });
  
      await nuevoDepartamento.save();
      res.status(201).json({ mensaje: 'Departamento agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar departamento:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para agregar una provincia
router.post('/agregar-provincia', bodyParser.json(), async (req, res) => {
    try {
      const nuevaProvincia = new Provincia({
        nombreProvincia: req.body.nombreProvincia,
      });
  
      await nuevaProvincia.save();
      res.status(201).json({ mensaje: 'Provincia agregada con éxito' });
    } catch (error) {
      console.error('Error al agregar provincia:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para agregar un distrito
router.post('/agregar-distrito', bodyParser.json(), async (req, res) => {
    try {
        const nuevoDistrito = new Distrito({
        nombreDistrito: req.body.nombreDistrito,
        });
  
        await nuevoDistrito.save();
        res.status(201).json({ mensaje: 'Distrito agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar distrito:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para agregar un ubigeo
router.post('/agregar-ubigeo', bodyParser.json(), async (req, res) => {
    try {
      const { departamento, provincia, distrito } = req.body;
  
      const nuevoUbigeo = new Ubigeo({
        departamento: departamento,
        provincia: provincia,
        distrito: distrito,
      });
  
      await nuevoUbigeo.save();
  
      res.status(201).json({ mensaje: 'Ubigeo agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar Ubigeo:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para agregar un proveedor
router.post('/agregar-proveedor', bodyParser.json(), async (req, res) => {
    try {
      const {
        nombreProveedor,
        direccion,
        telefono,
        correoElectronico,
        fechaInicioRelacionComercial,
        ubicacionUbigeo, // Debe ser un ID válido de Ubigeo
        materialSuministrado, // Debe ser un ID válido de Materiales
      } = req.body;
  
      const nuevoProveedor = new Proveedores({
        nombreProveedor,
        direccion,
        telefono,
        correoElectronico,
        fechaInicioRelacionComercial,
        ubicacionUbigeo,
        materialSuministrado,
      });
  
      await nuevoProveedor.save();
  
      res.status(201).json({ mensaje: 'Proveedor agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar proveedor:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para agregar un material
router.post('/agregar-material', bodyParser.json(), async (req, res) => {
    try {
      const {
        nombreMaterial,
        descripcion,
        unidadMedida,
        stockDisponible,
        tipoMaterial,
        proveedor, // Debe ser un ID válido de Proveedores
      } = req.body;
  
      const nuevoMaterial = new Materiales({
        nombreMaterial,
        descripcion,
        unidadMedida,
        stockDisponible,
        tipoMaterial,
        proveedor, 
      });
  
      await nuevoMaterial.save();
  
      res.status(201).json({ mensaje: 'Material agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar material:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para agregar una compra de insumos
router.post('/agregar-compraInsumo', bodyParser.json(), async (req, res) => {
    try {
      const {
        fechaCompra,
        cantidadIComprado,
        precioUnitario,
        totalCompra,
        proveedor, // Debe ser un ID válido de Proveedores
        material, // Debe ser un ID válido de Materiales
      } = req.body;
  
      const nuevaCompraInsumo = new CompraInsumos({
        fechaCompra,
        cantidadIComprado,
        precioUnitario,
        totalCompra,
        proveedor,
        material,
      });
  
      await nuevaCompraInsumo.save();
  
      res.status(201).json({ mensaje: 'Compra de Insumos agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar una compra de insumos:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para agregar una compra de materia prima
router.post('/agregar-compraMateriaPrima', bodyParser.json(), async (req, res) => {
    try {
      const {
        fechaCompra,
        cantidadMPComprado,
        precioUnitario,
        totalCompra,
        proveedor, // Debe ser un ID válido de Proveedores
        material, // Debe ser un ID válido de Materiales
      } = req.body;
  
      const nuevaCompraMateriaPrima = new CompraMateriaPrima({
        fechaCompra,
        cantidadMPComprado,
        precioUnitario,
        totalCompra,
        proveedor,
        material,
      });
  
      await nuevaCompraMateriaPrima.save();
  
      res.status(201).json({ mensaje: 'Compra de Materia Prima agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar una compra de materia prima:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para agregar un usuario
router.post('/agregar-usuario', bodyParser.json(), async (req, res) => {
    try {
      const {
        username,
        password,
        email,
        activo,
        usuarioCreacion, // Debe ser un ID válido de un usuario
        fechaCreacion,
        usuarioModificacion, // Puede ser un ID válido de un usuario o null
        fechaModificacion, // Puede ser una fecha válida o null
      } = req.body;
  
      const nuevoUsuario = new Usuario({
        username,
        password,
        email,
        activo,
        usuarioCreacion,
        fechaCreacion,
        usuarioModificacion,
        fechaModificacion,
      });
  
      await nuevoUsuario.save();
  
      res.status(201).json({ mensaje: 'Usuario agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar usuario:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
    try {
      const usuarios = await Usuario.find(); // Encuentra todos los usuarios en la base de datos
      res.json(usuarios);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  });
  
  // Ruta para obtener un usuario por su _id
  router.get('/usuarios/:id', async (req, res) => {
    try {
      const usuario = await Usuario.findById(req.params.id);
      if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.json(usuario);
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  });

// Ruta para agregar un empleado
router.post('/agregar-empleado', bodyParser.json(), async (req, res) => {
    try {
      const {
        nombreCompleto,
        fechaContratacion,
        salario,
        telefono,
	    correoElectronico,
	    direccion,
	    ubicacionUbigeo, // Debe ser un ID válido de Ubigeo
	    tipoPersonal, // Debe ser un ID válido de TipoPersonal
	    sexo, // Debe ser un ID válido de Sexo
        nacionalidad, // Debe ser un ID válido de Nacionalidad
        usuario, // Debe ser un ID válido de Usuario
      } = req.body;
  
      const nuevoEmpleado = new Empleado({
        nombreCompleto,
        fechaContratacion,
        salario,
        telefono,
	    correoElectronico,
	    direccion,
	    ubicacionUbigeo,
	    tipoPersonal,
	    sexo,
        nacionalidad,
        usuario,
      });
  
      await nuevoEmpleado.save();
  
      res.status(201).json({ mensaje: 'Empleado agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar un empleado:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para obtener todos los empleados
router.get('/empleados', async (req, res) => {
    try {
      const empleados = await Empleado.find(); // Encuentra todos los usuarios en la base de datos
      res.json(empleados);
    } catch (error) {
      console.error('Error al obtener la lista de empleados:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  });
  
  // Ruta para obtener un usuario por su _id
  router.get('/empleados/:id', async (req, res) => {
    try {
      const empleado = await Empleado.findById(req.params.id); // Encuentra un empleado por su _id
      if (!empleado) {
        return res.status(404).json({ mensaje: 'Empleado no encontrado' });
      }
      res.json(empleado);
    } catch (error) {
      console.error('Error al obtener el empleado:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  });

  // Ruta para agregar una producción de armarios
router.post('/agregar-produccion', bodyParser.json(), async (req, res) => {
    try {
      const {
        fechaProduccion,
        cantidadArmario,
        empleadoResponsable, // Debe ser un ID válido de Empleado
        materiaPrimaUtilizado, // Debe ser un ID válido de CompraMateriaPrima
	    insumosUtilizado, // Debe ser un ID válido de CompraInsumos
      } = req.body;
  
      const nuevaProduccion = new Produccion({
        fechaProduccion,
        cantidadArmario,
        empleadoResponsable,
        materiaPrimaUtilizado,
	    insumosUtilizado,
      });
  
      await nuevaProduccion.save();
  
      res.status(201).json({ mensaje: 'Producción de armarios agregada con éxito' });
    } catch (error) {
      console.error('Error al agregar una producción de armarios:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para obtener todas las producciones de armarios
router.get('/producciones', async (req, res) => {
    try {
      const producciones = await Produccion.find(); // Encuentra todos las producciones en la base de datos
      res.json(producciones);
    } catch (error) {
      console.error('Error al obtener la lista de producciones de armarios:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  });
  
  // Ruta para obtener una produccion por su _id
  router.get('/producciones/:id', async (req, res) => {
    try {
      const produccion = await Produccion.findById(req.params.id); // Encuentra una produccion por su _id
      if (!produccion) {
        return res.status(404).json({ mensaje: 'Produccion no encontrada' });
      }
      res.json(produccion);
    } catch (error) {
      console.error('Error al obtener la producción:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  });


// Ruta para agregar un tipo de personal
router.post('/agregar-tipopersonal', bodyParser.json(), async (req, res) => {
    try {
      const nuevoTipoPersonal = new TipoPersonal({
        nombreTipoPersonal: req.body.nombreTipoPersonal,
      });
  
      await nuevoTipoPersonal.save();
      res.status(201).json({ mensaje: 'Tipo de personal agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar tipo de personal:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para agregar un tipo de sexo
router.post('/agregar-sexo', bodyParser.json(), async (req, res) => {
    try {
      const nuevoSexo = new Sexo({
        tipoSexo: req.body.tipoSexo,
      });
  
      await nuevoSexo.save();
      res.status(201).json({ mensaje: 'Tipo de sexo agregado con éxito' });
    } catch (error) {
      console.error('Error al agregar un tipo de sexo:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

// Ruta para agregar una nacionalidad
router.post('/agregar-nacionalidad', bodyParser.json(), async (req, res) => {
    try {
      const nuevaNacionalidad = new Nacionalidad({
        tipoNacionalidad: req.body.tipoNacionalidad,
      });
  
      await nuevaNacionalidad.save();
      res.status(201).json({ mensaje: 'Nacionalidad agregada con éxito' });
    } catch (error) {
      console.error('Error al agregar nacionalidad:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});


module.exports = router