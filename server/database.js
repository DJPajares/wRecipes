const {MongoClient} = require('mongodb');

const uname = "wonderboi";
const passwd = "a12345678b";
const database = "wrecipe";
const collection = "recipes";
const opts = { useNewUrlParser: true, useUnifiedTopology: true };

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

class MongoBot {
    constructor() {
        // const url = `mongodb://${conf.hosts.join(',')}`;
        // const url = `mongodb+srv://${uname}:${passwd}@wapp-sg.qbs2k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
        // const url = `mongodb+srv://${uname}:${passwd}@wapp-sg.qbs2k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
        const url = `mongodb+srv://wonderBOi:a12345678b@wapp-sg.qbs2k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

        this.client = new MongoClient(url, opts);
    }
    async init() {
        await this.client.connect();
        // console.log('connected');

        this.db = this.client.db(database);
        this.collection = this.db.collection(collection);
        // this.Users = new Users(this.db);
    }
}

module.exports = new MongoBot();

// async function main() {
//     // const uri = `mongodb+srv://${username}:${passwd}@wapp-sg.qbs2k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
//     const uri = `mongodb+srv://wonderBOi:a12345678b@wapp-sg.qbs2k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await client.connect();
//         // await listDatabases(client);
//         await searchRecipe(client, 'v');
//     } catch(e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// };

// main().catch(console.error);

// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     // databasesList.databases.array.forEach(db => {
//     //     console.log(` - ${db.name}`);
//     // });
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// async function searchRecipe(client, search) {
//     const cursor = client.db(database).collection(collection);

//     const params = {
//         'title': {
//           '$regex': search,
//           '$options': 'i',  // [?] case insensitive
//         }
//     };

//     const query = cursor.find(params).sort({"title": 1});

//     while(await query.hasNext()) {
//         const recipe = await query.next();
//         console.log(recipe);
//     }
// }