const mongoose = require('mongoose');

// Modelo para la tabla Departamento
const departamentoSchema = new mongoose.Schema({
    nombreDepartamento: {
      type: String,
      required: true,
    },
  });
  
  const Departamento = mongoose.model('Departamento', departamentoSchema);
  
  // Modelo para la tabla Provincia
  const provinciaSchema = new mongoose.Schema({
    nombreProvincia: {
      type: String,
      required: true,
    },
  });
  
  const Provincia = mongoose.model('Provincia', provinciaSchema);
  
  // Modelo para la tabla Distrito
  const distritoSchema = new mongoose.Schema({
    nombreDistrito: {
      type: String,
      required: true,
    },
  });
  
  const Distrito = mongoose.model('Distrito', distritoSchema);
  
  // Modelo para la tabla Ubigeo
  const ubigeoSchema = new mongoose.Schema({
    departamento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Departamento',
      required: true,
    },
    provincia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Provincia',
      required: true,
    },
    distrito: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Distrito',
      required: true,
    },
  });
  
  const Ubigeo = mongoose.model('Ubigeo', ubigeoSchema);
  
  // Modelo para la tabla Proveedores
  const proveedorSchema = new mongoose.Schema({
    nombreProveedor: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    telefono: String,
    correoElectronico: String,
    fechaInicioRelacionComercial: {
      type: Date,
      required: true,
    },
    ubicacionUbigeo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ubigeo',
      required: true,
    },
    materialSuministrado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Materiales',
      required: true,
    },
  });
  
  const Proveedores = mongoose.model('Proveedores', proveedorSchema);
  
  // Modelo para la tabla Materiales
  const materialesSchema = new mongoose.Schema({
    nombreMaterial: {
      type: String,
      required: true,
    },
    descripcion: String,
    unidadMedida: String,
    stockDisponible: {
      type: Number,
      required: true,
    },
    tipoMaterial: {
      type: String,
      required: true,
    },
    proveedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Proveedores',
      required: true,
    },
  });
  
  const Materiales = mongoose.model('Materiales', materialesSchema);
  
  // Modelo para la tabla CompraInsumos
  const compraInsumosSchema = new mongoose.Schema({
    fechaCompra: {
      type: Date,
      required: true,
    },
    cantidadIComprado: {
      type: Number,
      required: true,
    },
    precioUnitario: {
      type: Number,
      required: true,
    },
    totalCompra: {
      type: Number,
      required: true,
    },
    proveedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Proveedores',
      required: true,
    },
    material: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Materiales',
      required: true,
    },
  });
  
  const CompraInsumos = mongoose.model('CompraInsumos', compraInsumosSchema);
  
  // Modelo para la tabla CompraMateriaPrima
  const compraMateriaPrimaSchema = new mongoose.Schema({
    fechaCompra: {
      type: Date,
      required: true,
    },
    cantidadMPComprado: {
      type: Number,
      required: true,
    },
    precioUnitario: {
      type: Number,
      required: true,
    },
    totalCompra: {
      type: Number,
      required: true,
    },
    proveedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Proveedores',
      required: true,
    },
    material: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Materiales',
      required: true,
    },
  });
  
  const CompraMateriaPrima = mongoose.model('CompraMateriaPrima', compraMateriaPrimaSchema);
  
  // Modelo para la tabla Usuario
  const usuarioSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    activo: {
      type: Boolean,
      required: true,
      default: true,
    },
    usuarioCreacion: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    fechaCreacion: {
      type: Date,
      required: true,
      default: Date.now,
    },
    usuarioModificacion: mongoose.Schema.Types.ObjectId,
    fechaModificacion: Date,
  });
  
  const Usuario = mongoose.model('Usuario', usuarioSchema);
  
  // Modelo para la tabla Empleado
  const empleadoSchema = new mongoose.Schema({
    nombreCompleto: {
      type: String,
      required: true,
    },
    fechaContratacion: {
      type: Date,
      required: true,
    },
    salario: {
      type: Number,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    correoElectronico: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    ubicacionUbigeo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ubigeo',
      required: true,
    },
    tipoPersonal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TipoPersonal',
      required: true,
    },
    sexo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sexo',
      required: true,
    },
    nacionalidad: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Nacionalidad',
      required: true,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  });
  
  const Empleado = mongoose.model('Empleado', empleadoSchema);
  
  // Modelo para la tabla Produccion
  const produccionSchema = new mongoose.Schema({
    fechaProduccion: {
      type: Date,
      required: true,
    },
    cantidadArmario: {
      type: Number,
      required: true,
    },
    empleadoResponsable: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Empleado',
      required: true,
    },
    materiaPrimaUtilizado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CompraMateriaPrima',
      required: true,
    },
    insumosUtilizado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CompraInsumos',
      required: true,
    },
  });
  
  const Produccion = mongoose.model('Produccion', produccionSchema);
  
  // Modelo para la tabla TipoPersonal
  const tipoPersonalSchema = new mongoose.Schema({
    nombreTipoPersonal: {
      type: String,
      required: true,
    },
  });
  
  const TipoPersonal = mongoose.model('TipoPersonal', tipoPersonalSchema);
  
  // Modelo para la tabla Sexo
  const sexoSchema = new mongoose.Schema({
    tipoSexo: {
      type: String,
      required: true,
    },
  });
  
  const Sexo = mongoose.model('Sexo', sexoSchema);
  
  // Modelo para la tabla Nacionalidad
  const nacionalidadSchema = new mongoose.Schema({
    tipoNacionalidad: {
      type: String,
      required: true,
    },
  });
  
  const Nacionalidad = mongoose.model('Nacionalidad', nacionalidadSchema);
  
  module.exports = {
    Departamento,
    Provincia,
    Distrito,
    Ubigeo,
    Proveedores,
    Materiales,
    CompraInsumos,
    CompraMateriaPrima,
    Usuario,
    Empleado,
    Produccion,
    TipoPersonal,
    Sexo,
    Nacionalidad,
  };