const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

// Variables
// const UNAME = "wonderBOi";
// const PASSWD = "a12345678b";
// const DATABASE = "wrecipe";
// const COLLECTION = "recipes";
// const MONGODB_ATLAS_CONNECTION_STRING = `mongodb+srv://${UNAME}:${PASSWD}@wapp-sg.qbs2k.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

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
const recipes = mongoose.model(process.env.COLLECTION, dbSchema);

// Export
module.exports.connect = connect;
module.exports.recipes = recipes;