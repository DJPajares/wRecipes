// const {MongoClient} = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// >> VARIABLES
const uname = "wonderBOi";
const passwd = "a12345678b";
const database = "wrecipe";
const collection = "recipes";
const url = `mongodb+srv://${uname}:${passwd}@wapp-sg.qbs2k.mongodb.net/wRecipes?retryWrites=true&w=majority`;
// const url = `mongodb+srv://wonderBOi:a12345678b@wapp-sg.qbs2k.mongodb.net/wRecipes?retryWrites=true&w=majority`;

// >> Post requests handler
app.use(express.json());

// >> API
    // ### [RECIPE] ### //
    app.get('/search', (req, res) => {
        // URL: "/search?val=<search_parameters>"

        // Variables
        var search = req.query.val;

        // Connect
        MongoClient.connect(url, function(err, db) {
            // Error Handler
            if(err) throw err;

            // Options
            var opts = {
                'title': {
                    '$regex': search,
                    '$options': 'i',  // [?] case insensitive
                }
            };

            // Query
            var dbo = db.db(database);
            var cursor = dbo.collection(collection).find(opts).sort({"title": 1});

            //Find all documents in the customers collection:
            cursor.toArray(function(err, result) {
                if (err) throw err;

                res.json(result);
                db.close();
            });
        });
    });

    // ### [RECIPE - ALL] ### //
    app.get('/recipe_all', (req, res) => {
        // Variables

        // Connect
        MongoClient.connect(url, function(err, db) {
            // Error Handler
            if(err) throw err;

            // Options
            var opts = {};

            // Query
            var dbo = db.db(database);
            var cursor = dbo.collection(collection).find(opts).sort({"title": 1});

            //Find all documents in the customers collection:
            cursor.toArray(function(err, result) {
                if (err) throw err;

                res.json(result);
                db.close();
            });
        });
    });

    // async function listRecipe(params) {
    //     // Connect
    //     MongoClient.connect(url, function(err, db) {
    //         // Error Handler
    //         if(err) throw err;

    //         // Options
    //         if(params) {
    //             var opts = {
    //                 'title': {
    //                     '$regex': search,
    //                     '$options': 'i',  // [?] case insensitive
    //                 }
    //             };
    //         } else {
    //             var opts = {};
    //         }

    //         // Query
    //         var dbo = db.db(database);
    //         var query = dbo.collection(collection).find(opts).sort({"title": 1});

    //         //Find all documents in the customers collection:
    //         query.toArray(function(err, result) {
    //             if (err) throw err;

    //             db.close();

    //             console.log(result)
    //             return result;
    //         });
    //     });
    // }

app.get('/asd', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        var search = 'saus';
        var params = {
            'title': {
                '$regex': search,
                '$options': 'i',  // [?] case insensitive
            }
        };

        if (err) throw err;
        var dbo = db.db(database);

        //Find all documents in the customers collection:
        dbo.collection(collection).find(params).toArray(function(err, result) {
            if (err) throw err;
            // console.log(result);
            res.json(result);
            db.close();
        });
    });
});

    //WORKS
    // app.get('/search', (req, res) => {
    //     var search = req.query.val;

    //     MongoClient.connect(url, function(err, db) {
    //         // var search = 'saus';
    //         var params = {
    //             'title': {
    //                 '$regex': search,
    //                 '$options': 'i',  // [?] case insensitive
    //             }
    //         };

    //         if (err) throw err;
    //         var dbo = db.db(database);
    //         dbo.collection(collection).findOne(params, 
    //         function(err, result) {
    //             if (err) throw err;
    //             res.json(result);
    //             db.close();
    //         });
    //     });
    // });

    app.get('/:val', (req, res) => {
        req.query.user_id
        var search = req.params.val;

        MongoClient.connect(url, function(err, db) {
            // var search = 'saus';
            var params = {
                'title': {
                    '$regex': search,
                    '$options': 'i',  // [?] case insensitive
                }
            };

            if (err) throw err;
            var dbo = db.db(database);
            dbo.collection(collection).findOne(params, 
            function(err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            });
        });
    });
    
    // app.get('/asd', (req, res) => {
    //     MongoClient.connect(url, function(err, db) {
    //         if (err) throw err;
    //         var dbo = db.db(database);
    //         dbo.collection(collection).findOne({
    //             title: "Vegetarian Biryani"
    //         }, 
    //         function(err, result) {
    //             if (err) throw err;
    //             res.json(result);
    //             db.close();
    //         });
    //     });
    // });

    // app.get('/asd', (req, res) => {
    //     MongoClient.connect(url, function(err, db) {
    //         if (err) throw err;

    //         var search = 'v';
    //         var params = {
    //             'title': {
    //                 '$regex': search,
    //                 '$options': 'i',  // [?] case insensitive
    //             }
    //         };
    //         var dbo = db.db(database);

    //         // dbo.collection.find(params).sort({"title": 1});
    //         dbo.collection(collection).find({}, 
    //         function(err, result) {
    //             if (err) throw err;
    //             res.json(result);
    //             db.close();
    //         });

    //         // dbo.collection(collection).findOne({
    //         //     name: req.params.name
    //         // }, 
    //         // function(err, result) {
    //         //     if (err) throw err;
    //         //     res.json(result);
    //         //     db.close();
    //         // });
    //     });
    // });

// >> Dynamic API
    app.get(`/:name`, (req, res) => {
        res.send(`Your name is ` + req.params.name + `\n`);
    });

// >> API
    app.get("/api", (req, res) => {
        res.json({message: "Hello from server!"});
    });

// >> LISTENER
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });