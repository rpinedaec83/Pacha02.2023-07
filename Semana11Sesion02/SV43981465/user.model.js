const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
   'junkiesapi',
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

const Perfil = sequelize.define("perfiles", {
    detalle:{ 
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Especialidad = sequelize.define("especialidades",{
    detalle:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

const RedesSociales = sequelize.define("redesSociales", {
    nombre: {
        type:DataTypes.STRING,
        allowNull: false
    }
});

const User = sequelize.define("usuarios", {
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const perfil_data = [{detalle: "Administrador"}, { detalle: "Expositor" }, { detalle: "Visitante" }]
const redes_data = [{nombre:"Instagram"}, {nombre:"Facebook"}]
const user_data =[{nombres:"Roberto David",apellidos:"Pineda Lopez", perfileId:1}, {nombres:"Kurt Hans",apellidos:"Acker", perfileId:2}]
const especialidades_data =[{detalle:"Electronica"}, {detalle:"Pintura"}]
const user_redes_data=[
    {usuarioId:1, redesSocialeId:1, detalle:"@robertdpl_ec"},
    {usuarioId:1, redesSocialeId:2, detalle:"@rpinedaec"},
    {usuarioId:2, redesSocialeId:1, detalle:"@gunpla.khap"},
    {usuarioId:2, redesSocialeId:2, detalle:"100005251969211"},
]
const user_especialidad_data =[
    
        {usuarioId:1, especialidadeId:1},
        {usuarioId:1, especialidadeId:2}
    
]

const UsuarioEspecialidades = sequelize.define("usuario_especialidades",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
});

const UsuarioRedes = sequelize.define('usuario_redes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    detalle:{
        type:DataTypes.STRING,
        allowNull:false,
    }
  });

  User.belongsToMany(RedesSociales, { through: 'usuario_redes'})
  RedesSociales.belongsToMany(User, { through: 'usuario_redes'})
  User.belongsToMany(Especialidad, {through: 'usuario_especialidades'})
  Especialidad.belongsToMany(User, {through: 'usuario_especialidades'})

  Perfil.hasMany(User)


sequelize.sync({ force: true }).then(() => {
    RedesSociales.bulkCreate(redes_data, { validate: true }).then(() => {
        Perfil.bulkCreate(perfil_data,{validate:true}).then(()=> { 
            User.bulkCreate(user_data, { validate: true }).then(() => {
                UsuarioRedes.bulkCreate(user_redes_data, { validate: true }).then(() => {
                    Especialidad.bulkCreate(especialidades_data, { validate: true }).then(() => {
                        UsuarioEspecialidades.bulkCreate(user_especialidad_data, { validate: true }).then(() => {
                            User.findAll({
                                include: {
                                    model: RedesSociales,
                                },
                            }).then(result => {
                                console.log(result);
                            }).catch((error) => {
                                console.error('Failed to retrieve data : ', error);
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



User.findAll({
    include: {
        model: RedesSociales,
    },
}).then(result => {
    console.log(result);
}).catch((error) => {
    console.error('Failed to retrieve data : ', error);
});