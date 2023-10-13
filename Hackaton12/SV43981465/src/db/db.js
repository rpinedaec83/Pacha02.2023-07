const dbConfig = require("./dbConfig.js");

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

db.propietarios = require("../models/propietario.model.js")(sequelize, Sequelize);
db.mascotas = require("../models/mascota.model.js")(sequelize, Sequelize);
db.doctores = require("../models/doctor.model.js")(sequelize, Sequelize);
db.enfermeros = require("../models/enfermero.model.js")(sequelize, Sequelize);
db.operaciones = require("../models/operacion.model.js")(sequelize, Sequelize);
db.procedimientos = require("../models/procedimiento.model.js")(sequelize, Sequelize);
db.historialclinicos = require("../models/historialclinico.model.js")(sequelize, Sequelize);

// Establecer las relaciones entre las tablas

db.propietarios.hasMany(db.mascotas, {as: 'mascotas'});
db.mascotas.belongsTo(db.propietarios, {as: 'propietario'});

//db.operaciones.hasMany(db.procedimientos, {as: 'procedimientos'});
db.procedimientos.belongsTo(db.operaciones, {
    foreignKey: "operacionId",
    as: 'operacion',
});

//db.doctores.hasOne(db.historialclinicos, {as: 'historialclinicoD'});
db.historialclinicos.belongsTo(db.doctores, {
    foreignKey: "doctorId",
    as: 'doctor',
});

db.enfermeros.hasMany(db.historialclinicos, {as: 'historialclinicosE'});
db.historialclinicos.belongsTo(db.enfermeros, {
    foreignKey: "enfermeroId",
    as: 'enfermero',
});

db.mascotas.hasMany(db.historialclinicos, {as: 'historialclinicoM'});
db.historialclinicos.belongsTo(db.mascotas, {
    foreignKey: "mascotaId",
    as: 'mascota',
})

//db.operaciones.hasMany(db.historialclinicos, {as: 'historialclinicoO'});
db.historialclinicos.belongsTo(db.operaciones, {
    foreignKey: "operacionId",
    as: 'operacionH',
});

module.exports = db;