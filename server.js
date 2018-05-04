const express = require('express')
const app = express()

app.get('/supersecretlaunchcodes', (req, res) => {
    res.send("h0td4wg")
})

app.listen(4000);