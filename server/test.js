const mongo = require("./database.js");
// const config = require("database");

async function start() {
    // other app startup stuff...
    await mongo.init();
    // other app startup stuff...
    const client = mongo.client;
    const database = mongo.database;
    const collection = mongo.collection;

    await searchRecipe(collection, 'v');

    async function searchRecipe(collection, search) {
        const params = {
            'title': {
              '$regex': search,
              '$options': 'i',  // [?] case insensitive
            }
        };

        const query = collection.find(params).sort({"title": 1});

        while(await query.hasNext()) {
            const recipe = await query.next();
            console.log(recipe);
        }
    }
}

start();