const express = require("express");

const cors = require("cors");

const mongoClient = require("mongodb").MongoClient;



const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());



const connectioString = "mongodb://127.0.0.1:27017";



app.get('/admin', (req, res) => {



    mongoClient.connect(connectioString)

        .then(clientObject => {

            var database = clientObject.db("youtubedb");

            database.collection('admin').find({}).toArray().then(documents => {

                res.send(documents);

                res.end();

            })

        })



})

app.get('/users', (req, res) => {



    mongoClient.connect(connectioString)

        .then(clientObject => {

            var database = clientObject.db("youtubedb");

            database.collection('users').find({}).toArray().then(documents => {

                res.send(documents);

                res.end();

            })

        })



})

app.get('/categories', (req, res) => {



    mongoClient.connect(connectioString)

        .then(clientObject => {

            var database = clientObject.db("youtubedb");

            database.collection('categories').find({}).toArray().then(documents => {

                res.send(documents);

                res.end();

            })

        })



})

app.get('/videos', (req, res) => {



    mongoClient.connect(connectioString)

        .then(clientObject => {

            var database = clientObject.db("youtubedb");

            database.collection('videos').find({}).toArray().then(documents => {

                res.send(documents);

                res.end();

            })

        })



})

app.get('/video/:id', (req, res) => {



    mongoClient.connect(connectioString).then(clientObject => {

        var database = clientObject.db("youtubedb");

        database.collection('videos').findOne({ video_id: parseInt(req.params.id) }).then(document => {

            res.send(document);

            res.end();

        })

    })



})

app.post('/register-user', (req, res) => {



})

app.post('/add-video', (req, res) => {



})

app.put('/edit-video/:id', (req, res) => {



})

app.delete('/delete-video/:id', (req, res) => {



})

app.listen(4040);

console.log(`API Started http://127.0.0.1:4040`);