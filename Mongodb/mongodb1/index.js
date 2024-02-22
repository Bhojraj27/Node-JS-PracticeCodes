const { application } = require("express");
const express = require("express");
require("./config/config");
const mongoose = require('mongoose');


const model = require("./config/schmod");
const app = express();
app.use(express.json());


app.post("/create", async (req, res) => {
  try {
    // Create a new user document based on the request body
    const newUser = new model({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
      tc: req.body.tc
    });

    // Save the new user document to the database
    const savedUser = await newUser.save();

    console.log("User created successfully:", savedUser);
    res.status(201).json(savedUser); // Respond with the created user document
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/list", async (req, res) => {
  let data = await model.find();
  res.send(data);
  console.log(data);
});
app.delete("/delete/:_id", async (req, res) => {
  let data = await model.deleteOne(req.params);
  res.send(data)
  console.log(data);
});
app.put("/update/:_id", async (req, res) => {
    let data = await model.updateOne(req.params, {$set: req.body});
    res.send(data)
    console.log(data);
  });
 
  // API endpoint for pagination
app.get('/items', async (req, res) => {
  try {
    // Get query parameters
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.per_page) || 10;

    // Calculate skip count for pagination
    const skipCount = (page - 1) * perPage;

    // Query items and calculate total count
    const [items, totalCount] = await Promise.all([
      user.find().skip(skipCount).limit(perPage),
      user.countDocuments(),
    ]);

    // Calculate total pages
    const totalPages = Math.ceil(totalCount / perPage);

    // Prepare response
    const response = {
      items,
      total_pages: totalPages,
    };

    res.json(response);
  } catch (error) {
    console.error('Error retrieving items', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(4000);
