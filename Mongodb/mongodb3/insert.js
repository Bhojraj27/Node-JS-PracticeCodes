const dbConnection = require('./mongodb');

async function insert() {
  try {
    const db = await dbConnection();
    const collection = db.collection('products');
    const result = await collection.insertMany([
      {
        name: 'note 9',
        brand: 'Redmi',
        price: 30000,
        category: 'mobile'
      },
      {
        name: 'Vivo v15',
        brand: 'Vivo',
        price: 19000,
        category: 'mobile'
      },
      {
        name: 'iQOO 9',
        brand: 'iQOO',
        price: 30000,
        category: 'mobile'
      }
    ]);
    console.log(result);
  } catch (error) {
    console.error('Error inserting documents:', error);
  }
}

insert();
