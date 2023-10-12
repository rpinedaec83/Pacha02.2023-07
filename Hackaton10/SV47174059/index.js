// const { MongoClient } = require('mongodb');
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     const db = client.db('sample_mflix');
//     const collection = db.collection('movies');

//     // Find the first document in the collection
//     const first = await collection.findOne();
//     console.log(first);
//   } finally {
//     // Close the database connection when finished or an error occurs
//     await client.close();
//   }
// }
// run().catch(console.error);


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  await fluffy.save();
fluffy.speak();
}

const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'
  const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"



