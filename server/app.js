const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

// [IMPORT DATABASE]
const { connect } = require('./db');
// [IMPORT MODEL/COLLECTION]
const { recipes } = require('./db'); 

// [HANDLING THE DATABASE ERRORS]
connect.on('error', console.error.bind(console, 'connection error:'));
connect.once('open', () => {
	console.log('Database connection successful');     
});

// [MIDDLEWARES]
app.use(bodyParser.urlencoded({
    limit: '15mb',
    extended: true,
    parameterLimit: true
}));
app.use(bodyParser.json({limit: '15mb', extended: true}));

// [POST REQUESTS HANDLER]
// *** IMPORTANT: Put after bodyParser, otherwise, it would set the global limit to 1mb
app.use(express.json());

// [API - MONGOOSE]
    // >> POST
        // > Recipes
        app.post('/upload', (req, res) => {
            const recipe = new recipes(
                {
                    title: req.body.title,
                    description: req.body.description,
                    image: req.body.image,
                    ingredients: req.body.ingredients,
                    directions: req.body.directions,
                    duration: req.body.duration,
                    servings: req.body.servings
                }
            );

            recipe.save(function (err, results) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('New recipe successfully added...');
                    console.log(results._id);
                    res.send('id: ' + results._id);
                }
            });     
        });

        // app.post('/upload',(req, res) => {
        //     const recipe = new recipes(
        //         {
        //             title: req.body.title,
        //             description: req.body.description,
        //             ingredients: req.body.ingredients,
        //             directions: req.body.directions,
        //             duration: req.body.duration,
        //             servings: req.body.servings
        //         }
        //     );
            
        //     recipe.save(function (err, results) {
        //         if(err) {
        //             console.log(err);
        //         } else {
        //             console.log('New recipe successfully added...');
        //             console.log(results._id);
        //         }
        //     });      
        //     // recipe.save((err, recipes) => {
        //     //     if(err) {
        //     //         console.log(err);
        //     //     } else {
        //     //         console.log('New recipe successfully added...');
        //     //     }
        //     // });
        // });

    // >> GET
        // > Recipes - All
        app.get('/api/recipes', (req, res) => {
            // URL: "../api/recipes"
            // Query
            recipes.find({}, (err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    res.json(data);
                    console.log('Recipes successfully found.'); 
                }  
            });
        });

        // > Recipes - Search
        app.get('/api/search', (req, res) => {
            // URL: "../api/search?q=<search_parameters>"

            // Variables
            var search = req.query['q'];
            // Options
            var opts = {
                'title': {
                    '$regex': search,
                    '$options': 'i',  // [?] case insensitive
                }
            };
            // Query
            recipes.find(opts, (err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    res.json(data);
                    console.log('Recipes successfully found.'); 
                }  
            }).sort({"title": 1});
        });

// [LISTENER]
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });