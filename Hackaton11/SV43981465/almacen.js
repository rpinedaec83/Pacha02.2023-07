const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    'SV43981465',
    'root',
    '123456',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const TipoPersonal = sequelize.define('tipoPersonales', {
    idTipoPersonal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreTipoPersonal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

const Nacionalidad = sequelize.define('nacionalidades', {
    idNacionalidad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreNacionalidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

const Sexo = sequelize.define('sexos', {
    idSexo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreSexo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

const Usuario = sequelize.define('usuarios', {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    usuarioCreacion: {
      type: DataTypes.STRING,
    },
    fechaCreacion: {
      type: DataTypes.DATE,
    },
    usuarioModificacion: {
      type: DataTypes.STRING,
    },
    fechaModificacion: {
      type: DataTypes.DATE,
    },
});

const Departamento = sequelize.define('departamentos', {
    idDepartamento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreDepartamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

const Provincia = sequelize.define('provincias', {
    idProvincia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreProvincia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

const Distrito = sequelize.define('distritos', {
    idDistrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreDistrito: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

const Ubigeo = sequelize.define('ubigeos', {
    idUbicacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idDepartamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idProvincia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idDistrito: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
});

const Empleado = sequelize.define('empleados', {
    idEmpleado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUbigeo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idTipoPersonal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idSexo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idNacionalidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombreCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaContratacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    salario: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    correoElectronico: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
});

const Material = sequelize.define('materiales', {
    idMaterial: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreMaterial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    unidadMedida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stockDisponible: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoMaterial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

const Proveedor = sequelize.define('proveedores', {
    idProveedor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ubicacionUbigeo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombreProveedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    correoElectronico: {
      type: DataTypes.STRING,
    },
    fechaInicioRelacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
});

const MaterialesProveedores = sequelize.define('materialesProveedores', {
    idMP: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idMaterial: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idProveedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }    
});

const Produccion = sequelize.define('producciones', {
    idProduccion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idEmpleadoResponsable: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaProduccion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cantidadArmariosProducidos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    materiaPrimaUtilizada: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    insumosUtilizados: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
});

const CompraInsumos = sequelize.define('comprasInsumos', {
    idCompra: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idMaterial: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idProveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaCompra: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cantidadComprada: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precioUnitario: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalCompra: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
});

const CompraMateriaPrima = sequelize.define('comprasMateriaPrima', {
    idCompra: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idMaterial: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idProveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaCompra: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cantidadComprada: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precioUnitario: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalCompra: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
});

//Ingreso de data a las tablas
const tipoPersonal_data = [{nombreTipoPersonal:'Supervisor'},{nombreTipoPersonal:'Operario'}];
const nacionalidad_data = [{nombreNacionalidad:'Peruana'},{nombreNacionalidad:'Uruguaya'}];
const sexo_data = [{nombreSexo:'Masculino'},{nombreSexo:'Femenino'}];
const usuario_data = [
    {
        username:'Renzo86',
        password:'123456',
        email:'renzo86@gmail.com',
        activo:true
    },
    {
        username:'Jose12',
        password:'01234',
        email:'jose12@gmail.com',
        activo:true
    }
];
const departamento_data = [{nombreDepartamento:'Lima'},{nombreDepartamento:'Arequipa'}];
const provincia_data = [{nombreProvincia:'Lima'},{nombreProvincia:'Arequipa'}];
const distrito_data = [{nombreDistrito:'Magdalena del mar'},{nombreDistrito:'Yanahuara'}];
const ubigeo_data = [
    {idDepartamento:1,idProvincia:1,idDistrito:1},
    {idDepartamento:2,idProvincia:2,idDistrito:2}
];
const empleado_data = [
    {
        idUbigeo:1,
        idTipoPersonal:2,
        idSexo:1,
        idNacionalidad:1,
        idUsuario:1,
        nombreCompleto:'Oscar Gomez',
        fechaContratacion:'01/01/2022',
        salario:5000.00,
        telefono:'999999999',
        correoElectronico:'oscargomez1@gmail.com',
        direccion:'Calle Palmeras 123'
    },
    {
        idUbigeo:2,
        idTipoPersonal:1,
        idSexo:2,
        idNacionalidad:2,
        idUsuario:1,
        nombreCompleto:'Maria de la Cruz',
        fechaContratacion:'01/01/2021',
        salario:15000.00,
        telefono:'999999988',
        correoElectronico:'mariacruz1@gmail.com',
        direccion:'Calle Pampas 456'
    }
];
const material_data = [
    {
        nombreMaterial:'Madera',
        descripcion:'Madera tornillo',
        unidadMedida:'unidad',
        stockDisponible:100,
        tipoMaterial:'Materia Prima'
    },
    {
        nombreMaterial:'Tornillo',
        descripcion:'tornillo de media pulgada',
        unidadMedida:'unidad',
        stockDisponible:200,
        tipoMaterial:'Insumo'
    }
];
const proveedor_data = [
    {
        ubicacionUbigeo:1,
        nombreProveedor:'Proveedor1',
        direccion:'Dirección1',
        telefono:'999999888',
        correoElectronico:'proveedor1@gmail.com',
        fechaInicioRelacion:'12/01/2020'
    },
    {
        ubicacionUbigeo:2,
        nombreProveedor:'Proveedor2',
        direccion:'Dirección2',
        telefono:'999999777',
        correoElectronico:'proveedor2@gmail.com',
        fechaInicioRelacion:'09/01/2021'
    }
];
const materialesproveedores_data = [
    {idMaterial:1,idProveedor:1},
    {idMaterial:2,idProveedor:2}
];
const produccion_data = [
    {
        idEmpleadoResponsable:1,
        fechaProduccion: new Date(),
        cantidadArmariosProducidos:10,
        materiaPrimaUtilizada:1,
        insumosUtilizados:2
    }
];
const comprainsumos_data = [
    {
        idMaterial:2,
        idProveedor:2,
        fechaCompra: new Date(),
        cantidadComprada:200,
        precioUnitario:20,
        totalCompra:4000
    }
];
const compramateriaprima_data = [
    {
        idMaterial:1,
        idProveedor:1,
        fechaCompra: new Date(),
        cantidadComprada:100,
        precioUnitario:10,
        totalCompra:1000
    }
];

// Relación entre Ubigeo y Departamento (FK idDepartamento):
Ubigeo.belongsTo(Departamento, { foreignKey: 'idDepartamento' });
Departamento.hasMany(Ubigeo, { foreignKey: 'idDepartamento' });

// Relación entre Ubigeo y Provincia (FK idProvincia):
Ubigeo.belongsTo(Provincia, { foreignKey: 'idProvincia' });
Provincia.hasMany(Ubigeo, { foreignKey: 'idProvincia' });

// Relación entre Ubigeo y Distrito (FK idDistrito):
Ubigeo.belongsTo(Distrito, { foreignKey: 'idDistrito' });
Distrito.hasMany(Ubigeo, { foreignKey: 'idDistrito' });

// Relación entre Provincia y Departamento (FK idDepartamento):
Provincia.belongsTo(Departamento, { foreignKey: 'idDepartamento' });
Departamento.hasMany(Provincia, { foreignKey: 'idDepartamento' });

// Relación entre Distrito y Provincia (FK idProvincia):
Distrito.belongsTo(Provincia, { foreignKey: 'idProvincia' });
Provincia.hasMany(Distrito, { foreignKey: 'idProvincia' });

// Relación entre Empleado y Ubigeo (FK idUbigeo):
Empleado.belongsTo(Ubigeo, { foreignKey: 'idUbigeo' });
Ubigeo.hasMany(Empleado, { foreignKey: 'idUbigeo' });

// Relación entre Empleado y Tipo de Personal (FK idTipoPersonal):
Empleado.belongsTo(TipoPersonal, { foreignKey: 'idTipoPersonal' });
TipoPersonal.hasMany(Empleado, { foreignKey: 'idTipoPersonal' });

// Relación entre Empleado y Sexo (FK idSexo):
Empleado.belongsTo(Sexo, { foreignKey: 'idSexo' });
Sexo.hasMany(Empleado, { foreignKey: 'idSexo' });

// Relación entre Empleado y Nacionalidad (FK idNacionalidad):
Empleado.belongsTo(Nacionalidad, { foreignKey: 'idNacionalidad' });
Nacionalidad.hasMany(Empleado, { foreignKey: 'idNacionalidad' });

// Relación entre Empleado y Usuario (FK idUsuario):
Empleado.belongsTo(Usuario, { foreignKey: 'idUsuario' });
Usuario.hasOne(Empleado, { foreignKey: 'idUsuario' });

// Relación entre Proveedor y Tipo de Material Suministrado (FK tipoMaterialSuministrado):
//Proveedor.belongsTo(Material, { foreignKey: 'tipoMaterialSuministrado' });
//Material.hasMany(Proveedor, { foreignKey: 'tipoMaterialSuministrado' });
Proveedor.belongsToMany(Material, { through: MaterialesProveedores, as: 'materiales', foreignKey: 'idProveedor', otherKey: 'idMaterial' });
Material.belongsToMany(Proveedor, { through: MaterialesProveedores, as: 'proveedores', foreignKey: 'idMaterial', otherKey: 'idProveedor' });

// Relación entre Proveedor y Ubigeo (FK ubicacionUbigeo):
Proveedor.belongsTo(Ubigeo, { foreignKey: 'ubicacionUbigeo' });
Ubigeo.hasMany(Proveedor, { foreignKey: 'ubicacionUbigeo' });

// Relación entre Produccion y Empleado Responsable (FK idEmpleadoResponsable):
Produccion.belongsTo(Empleado, { foreignKey: 'idEmpleadoResponsable' });
Empleado.hasMany(Produccion, { foreignKey: 'idEmpleadoResponsable' });

// Relación entre Produccion y Material Utilizado (FK materiaPrimaUtilizada):
Produccion.belongsTo(Material, { foreignKey: 'materiaPrimaUtilizada' });
Material.hasMany(Produccion, { foreignKey: 'materiaPrimaUtilizada' });

// Relación entre Produccion e Insumos Utilizados (FK insumosUtilizados):
Produccion.belongsTo(Material, { foreignKey: 'insumosUtilizados' });
Material.hasMany(Produccion, { foreignKey: 'insumosUtilizados' });

// Relación entre CompraInsumos y Material (FK idMaterial):
CompraInsumos.belongsTo(Material, { foreignKey: 'idMaterial' });
Material.hasMany(CompraInsumos, { foreignKey: 'idMaterial' });

// Relación entre CompraInsumos y Proveedor (FK idProveedor):
CompraInsumos.belongsTo(Proveedor, { foreignKey: 'idProveedor' });
Proveedor.hasMany(CompraInsumos, { foreignKey: 'idProveedor' });

// Relación entre CompraMateriaPrima y Material (FK idMaterial):
CompraMateriaPrima.belongsTo(Material, { foreignKey: 'idMaterial' });
Material.hasMany(CompraMateriaPrima, { foreignKey: 'idMaterial' });

// Relación entre CompraMateriaPrima y Proveedor (FK idProveedor):
CompraMateriaPrima.belongsTo(Proveedor, { foreignKey: 'idProveedor' });
Proveedor.hasMany(CompraMateriaPrima, { foreignKey: 'idProveedor' });


//Sincronización de las tablas
sequelize.sync({ force: true }).then(() => {
    TipoPersonal.bulkCreate(tipoPersonal_data, { validate: true }).then(() => {
        Nacionalidad.bulkCreate(nacionalidad_data, { validate:true }).then(()=> { 
            Sexo.bulkCreate(sexo_data, { validate: true }).then(() => {
                Usuario.bulkCreate(usuario_data, { validate: true }).then(() => {
                    Departamento.bulkCreate(departamento_data, { validate: true }).then(() => {
                        Provincia.bulkCreate(provincia_data, { validate:true }).then(()=> { 
                            Distrito.bulkCreate(distrito_data, { validate: true }).then(() => {
                                Ubigeo.bulkCreate(ubigeo_data, { validate: true }).then(() => {
                                    Empleado.bulkCreate(empleado_data, { validate: true }).then(() => {
                                        Material.bulkCreate(material_data, { validate:true }).then(()=> {
                                            Proveedor.bulkCreate(proveedor_data, { validate: true }).then(() => {
                                                MaterialesProveedores.bulkCreate(materialesproveedores_data, { validate: true }).then(() => {
                                                    Produccion.bulkCreate(produccion_data, { validate:true }).then(() => {
                                                        CompraInsumos.bulkCreate(comprainsumos_data, { validate:true }).then(() => {
                                                            CompraMateriaPrima.bulkCreate(compramateriaprima_data, { validate:true }).then(() => {
                                                                console.log("Creado Correctamente el servicio");
                                                            }).catch((error) => {
                                                                console.log(error);
                                                            });
                                                        }).catch((error) => {
                                                            console.log(error);
                                                        })
                                                    }).catch((error) => {
                                                        console.log(error);
                                                    });
                                                }).catch((error) => {
                                                    console.log(error);
                                                });
                                            }).catch((error) => {
                                                console.log(error);
                                            });
                                        }).catch((error) => {
                                            console.log(error);
                                        });
                                    }).catch((error) => {
                                        console.log(error);
                                    });
                                }).catch((error) => {
                                    console.log(error);
                                });
                            }).catch((error) => {
                                console.log(error);
                            });
                        }).catch((error) => {
                            console.log(error);
                        });
                    }).catch((error) => {
                        console.log(error);
                    });
                }).catch((error) => {
                    console.log(error);
                });
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
}).catch((error) => {
    console.error('Unable to create table : ', error);
    });
});
