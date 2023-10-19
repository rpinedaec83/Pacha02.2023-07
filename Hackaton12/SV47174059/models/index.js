const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model.js")(sequelize, Sequelize);
db.tag = require("./tag.model.js")(sequelize, Sequelize);

db.tag.belongsToMany(db.tutorials, {
  through: "tutorial_tag",
  as: "tutorials",
  foreignKey: "tag_id",
});
db.tutorials.belongsToMany(db.tag, {
  through: "tutorial_tag",
  as: "tags",
  foreignKey: "tutorial_id",
});



db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
  foreignKey: "tutorialId",
  as: "tutorial",
});


module.exports = db;



// Implementación del CRUD en Sequelize para una Veterinaria

// Paso 1: Importar Sequelize y definir la conexión a la base de datos
//const Sequelize = require('sequelize');
const Sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'nombre_de_usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql', // Puedes cambiarlo a 'postgres', 'sqlite' o 'mssql' según tu base de datos
});

// Paso 2: Definir modelos para las entidades (Doctores, Enfermeros, Propietarios, Mascotas, Historia Clínica, Procedimientos, Operaciones)
const Doctor = sequelize.define('Doctor', {
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  especialidad: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Enfermero = sequelize.define('Enfermero', {
  // Definir atributos para el modelo Enfermero
});

const Propietario = sequelize.define('Propietario', {
  // Definir atributos para el modelo Propietario
});

const Mascota = sequelize.define('Mascota', {
  // Definir atributos para el modelo Mascota
});

const HistoriaClinica = sequelize.define('HistoriaClinica', {
  // Definir atributos para el modelo Historia Clínica
});

const Procedimiento = sequelize.define('Procedimiento', {
  // Definir atributos para el modelo Procedimiento
});

const Operacion = sequelize.define('Operacion', {
  // Definir atributos para el modelo Operación
});

// Paso 3: Establecer relaciones entre los modelos según las necesidades del negocio
Doctor.hasMany(Enfermero);
Enfermero.belongsTo(Doctor);

Doctor.belongsToMany(Mascota, { through: Propietario });
Mascota.belongsToMany(Doctor, { through: Propietario });

Mascota.hasOne(HistoriaClinica);
HistoriaClinica.belongsTo(Mascota);

HistoriaClinica.hasMany(Procedimiento);
Procedimiento.belongsTo(HistoriaClinica);

HistoriaClinica.hasMany(Operacion);
Operacion.belongsTo(HistoriaClinica);

// Paso 4: Realizar operaciones CRUD utilizando Sequelize
(async () => {
  // Crear un nuevo doctor
  const nuevoDoctor = await Doctor.create({ nombre: 'Dr. Smith', especialidad: 'Cardiología' });

  // Actualizar información de un doctor existente
  await Doctor.update({ nombre: 'Dr. Brown' }, { where: { id: nuevoDoctor.id } });

  // Eliminar un doctor de la base de datos
  await Doctor.destroy({ where: { id: nuevoDoctor.id } });

  // Obtener la lista de todos los doctores
  const todosLosDoctores = await Doctor.findAll();
})();
