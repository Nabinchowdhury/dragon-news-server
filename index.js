const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categoreies = require("./data/categories.json")

app.get('/', (req, res) => {
    res.send("News API running")
});

app.get('/news-category', (req, res) => {
    res.send(categoreies)
})

app.listen(port, () => {
    console.log("dragon news server running on port ", port);
})