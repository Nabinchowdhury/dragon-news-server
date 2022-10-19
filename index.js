const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categoreies = require("./data/categories.json")
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send("News API running")
});

app.get('/news-category', (req, res) => {
    res.send(categoreies)
})

app.get("/news/:id", (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

app.get('/category/:id', (req, res) => {
    const categoryId = req.params.id
    if (categoryId === "08") {
        res.send(news)
    }
    else {
        const selectedCategory = news.filter(n => n.category_id === categoryId)
        res.send(selectedCategory)
    }
})

app.listen(port, () => {
    console.log("dragon news server running on port ", port);
})