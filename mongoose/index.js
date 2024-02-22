const mongoose = require('mongoose');



     mongoose.connect('mongodb://127.0.0.1:27017/Ecomm'); //db connection

    const ProductSchema = new mongoose.Schema(
        {
            name: String,
            price: Number,
            brand: String,
            category: String,
        }); //schemas are defined in this syntax

const saveInDB= async()=>{
    const ProductModel = mongoose.model('products', ProductSchema); //connection with table schema
    let data = ProductModel(
        {
            name: 'm8',
            price: 2000,
            brand: 'samsung',
            category: 'mobile'
        });
    let result = await data.save();
    console.log(result);
}

const updateInDB = async () => {

    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        {name: "m8"},
        {
         $set: { name: "m8 pro" , price:4000}
        })
        console.log(data)
}

const deleteInDB= async()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne(
        {name: "m8 pro"}
    );
    console.log(data);
}
const findInDB= async()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({name: "nord"});
    console.log(data);
}

findInDB();