const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"]})
})

app.listen(5000, () => {
    console.log("Server starter on port 5000")
})