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

//db.propietarios = require("../models/propietario.model.js")(sequelize, Sequelize);
db.usuarios = require("../models/user.model.js")(sequelize, Sequelize);
db.cupones = require("../models/coupon.model.js")(sequelize, Sequelize);
db.cursos = require("../models/course.model.js")(sequelize, Sequelize);
db.ordenCompras = require("../models/order.model.js")(sequelize, Sequelize);
db.pagos = require("../models/payment.model.js")(sequelize, Sequelize);

// Establecer las relaciones entre las tablas

/*db.operaciones.hasMany(db.procedimientos, {as: 'procedimientos'});
db.procedimientos.belongsTo(db.operaciones, {
    foreignKey: "operacionId",
    as: 'operacion',
});

//db.doctores.hasOne(db.historialclinicos, {as: 'historialclinicoD'});
db.historialclinicos.belongsTo(db.doctores, {
    foreignKey: "doctorId",
    as: 'doctor',
});*/
// User - Order (uno a muchos)
db.usuarios.hasMany(db.ordenCompras, { foreignKey: 'userId' });
db.ordenCompras.belongsTo(db.usuarios, { foreignKey: 'userId' });

// Course - Order (uno a muchos)
db.cursos.hasMany(db.ordenCompras, { foreignKey: 'courseId' });
db.ordenCompras.belongsTo(db.cursos, { foreignKey: 'courseId' });

// User - Coupon (uno a muchos)
db.usuarios.hasMany(db.cupones, { foreignKey: 'userId' });
db.cupones.belongsTo(db.usuarios, { foreignKey: 'userId' });

// Coupon - Order (uno a muchos)
db.cupones.hasMany(db.ordenCompras, { foreignKey: 'couponId' });
db.ordenCompras.belongsTo(db.cupones, { foreignKey: 'couponId' });

// Order - Payment (uno a uno)
db.ordenCompras.hasOne(db.pagos, { foreignKey: 'orderId' });
db.pagos.belongsTo(db.ordenCompras, { foreignKey: 'orderId' });

module.exports = db;