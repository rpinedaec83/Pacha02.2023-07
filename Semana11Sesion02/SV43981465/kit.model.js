const { Sequelize, DataTypes } = require("sequelize");

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

const Escala = sequelize.define("escalas", {
    detalle:{ 
        type: DataTypes.STRING,
        allowNull: false
    }
});
const Universo = sequelize.define("universos", {
    detalle:{ 
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Kit = sequelize.define("kits",{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    url:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isCustom:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
});

const escala_data=[{detalle:'RG'},{detalle:'MG'},{detalle:'PG'}];
const universo_data = [{detalle:'Gundam Wing'},{detalle:"Mobile Suit Gundam Thunderbolt"},{detalle:'Endless Waltz'}]
const kit_data=[
    {
        nombre:'MSM-04 Acguy',
        url:'https://gundam.fandom.com/es/wiki/MSM-04_Acguy',
        isCustom:true,
        escalaId:2,
        universoId:3
    },{
        nombre:'MSN-02 Zeong',
        url:'https://gundam.fandom.com/wiki/MSN-02_Zeong',
        isCustom:true,
        escalaId:1,
        universoId:1
    },{
        nombre:'XXXG-00W0 Wing Gundam Zero',
        url:'https://gundam.fandom.com/wiki/XXXG-00W0_Wing_Gundam_Zero',
        isCustom:false,
        escalaId:1,
        universoId:1
    },
]

Escala.hasMany(Kit)
Universo.hasMany(Kit)


sequelize.sync({ force: true }).then(() => {
    Escala.bulkCreate(escala_data, { validate: true }).then(() => {
        Universo.bulkCreate(universo_data,{validate:true}).then(()=> { 
            Kit.bulkCreate(kit_data, { validate: true }).then(() => {
                console.log("Creado Correctamente el servicio")
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