var path = require('path')
const dotenv = require('dotenv');
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const { getSentimentAnalysis } = require("./meaningCloudAPI")

dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    getSentimentAnalysis("I am fed up with this thing.", "en")
        .then(({ status, body }) => res.send({ status, body }))
        .catch(error => console.log('error', error));
})
