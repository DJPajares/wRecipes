const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

// Initiating a connection to the database
mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

// Connecting to the database
const connect = mongoose.connection;

// DB Structure
let dbSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    ingredients: [{
        name: String,
        name_full: String,
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
// Add the 3rd parameter to force the naming of the model and avoid "pluralization"
const recipes = mongoose.model(process.env.COLLECTION, dbSchema, "recipes");

// Export
module.exports.connect = connect;
module.exports.recipes = recipes;