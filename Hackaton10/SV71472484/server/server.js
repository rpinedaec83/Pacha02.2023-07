const mongoose = require("mongoose")

// Connect to MongoDB database
const server = () => {
    try {
      mongoose.connect('mongodb://localhost:27017/hackaton10', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  
      console.log('conexion exitosa!');
    } catch (err) {
      console.log('error en la conexion!')
    }
  }
  
  module.exports = server