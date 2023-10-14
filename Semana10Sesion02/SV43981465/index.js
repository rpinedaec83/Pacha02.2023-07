const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    const KittySchema = new mongoose.Schema({
        name: String
    });
    
    KittySchema.methods.speak = function speak() {
        const greeting = this.name
            ? 'Meow name is '+ this.name
            : 'I don\'t have a name';
        console.log(greeting);
    };
    
    const Kitten = mongoose.model('Kitten', KittySchema);
    
    const silence = new Kitten({ name: 'Silence'});
    console.log(silence.name);
    silence.speak();
    const fluffy = new Kitten({ name: 'fluffy'});
    fluffy.speak();

    await fluffy.save();
    await silence.save();
}