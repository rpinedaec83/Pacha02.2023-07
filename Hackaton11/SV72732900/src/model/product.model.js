const {Sequelize, DataTypes, Model}  = require("sequelize")

const sequelize = new Sequelize('productdb', 'root', 'alayza2213', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

  class product extends Model {}

  product.init({
    productId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    },
    isStock: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  },
  {
    sequelize,
    modelName: "product"
  }
  )

//   const testConnection = async () => {
//       try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
//   }

//   testConnection();

module.exports = product;