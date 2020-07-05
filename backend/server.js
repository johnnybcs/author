// Load Comment model
const Comment = require("./models/Comment");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Setup express app
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure Mongo
const db = process.env.MONGODB_URI;

// Connect to Mongo with Mongoose
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

// Specify the Port where the backend server can be accessed and start listening on that port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`));

app.post("*/comment", (req, res) => {

        const newComment = new Comment({
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment
        });

    // Create a new Comment
    Comment.create(newComment)
        .then(function(dbComment) {
            // View the added result in the console
            console.log(dbComment);
            res.json(dbComment);
        })
        .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
            res.json(err);
        });
});

