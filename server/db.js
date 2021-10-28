const mongoose = require("mongoose");

// Variables
const uname = "wonderBOi";
const passwd = "a12345678b";
const database = "wrecipe";
const collection = "recipes";
const opts = { useNewUrlParser: true, useUnifiedTopology: true };
const url = `mongodb+srv://${uname}:${passwd}@wapp-sg.qbs2k.mongodb.net/${database}?retryWrites=true&w=majority`;

// Initiating a connection to the database
mongoose.connect(url, opts);

// Connecting to the database
const connect = mongoose.connection;

// DB Structure
let dbSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    ingredients: [{
        name: String,
        amount: {
            quantity: Number,
            unit: String
        }
    }],
    directions: [String],
    duration: Number,
    servings: Number
});

// Collection
const recipes = mongoose.model(collection, dbSchema);

// Export
module.exports.connect = connect;
module.exports.recipes = recipes;