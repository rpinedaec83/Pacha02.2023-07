const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/galeria');

    const obrasSchema = new mongoose.Schema({
        nombre: String,
        autor: String,
        tipo: String
    });
    
    obrasSchema.methods.exponer = function exponer() {
        const greeting = this.nombre
            ? `La obra ${this.nombre} se va a exponer por ${this.autor}`
            : `No se va a exponer`;
        console.log(greeting);
    }
    
    arrObras = [];

    const Obras = mongoose.model('Obras', obrasSchema);
    
    const monaLisa = new Obras({ 
        nombre: 'Monalisa',
        autor: 'Leonardo da Vinci',
        tipo: 'Pintura'
    });
    
    monaLisa.exponer();
    //monaLisa.save();
    const obras = await Obras.find();
    console.log(obras);
}