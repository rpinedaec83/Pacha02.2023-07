const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    'Semana11Sesion01',
    'root',
    'pachaqtec2023',
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

sequelize.query(
    'SELECT * FROM students WHERE student_id = ?',
    {
      replacements: ['c8b10a4a-de86-4bea-b2af-bf1446395729'],
      type: sequelize.QueryTypes.SELECT
    }
).then(result => {
    console.log(result);
}).catch((error) => {
    console.error('Failed to insert data : ', error);
});