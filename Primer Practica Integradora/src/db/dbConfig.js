import mongoose from 'mongoose';

const URI = 'mongodb+srv://DanDiaz92:Chalai.2023@ecommerce.7odm63l.mongodb.net/?retryWrites=true&w=majority';

try {
  await mongoose.connect(URI);

  console.log('Conectado a la base de datos');
} catch (err) {
  console.log(err)
}