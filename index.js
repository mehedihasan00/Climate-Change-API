const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json('Welcome to my Climate Change News API')
})

app.get('/news', (req, res) => {
    axios.get('https://www.theguardian.com/uk/environment')
        .then((response) => {
            const html = response.data
            console.log(html)
        })
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
