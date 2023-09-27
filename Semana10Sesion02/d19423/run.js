const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/galeria');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  const obrasSchema = new mongoose.Schema({
    nombre: String,
    autor: String,
    tipo: String
  });

  obrasSchema.methods.exponer = function exponer() {
    const greeting = this.nombre ? `La obra ${this.nombre} se va a exponer por ${this.autor}`:`No se expondra`
    console.log(greeting);
  };
  
  arrObras = [];

  const Obras = mongoose.model('Obras', obrasSchema);
  let Monalisa = new Obras({nombre:"Monalisa",autor:"Leonardo da Vinci",tipo:"Pintura"});
  Monalisa.exponer()
  const obras = await Obras.find();
  console.log(obras)
}
