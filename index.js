const express = require('express')
const path = require('path')
const app = express()

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "dist")));
} else {
    require("dotenv").config();
}

app.get('/', async (req, res) => {
    try {
        res.json('Hello world')
    } catch (err) {
        console.log(err.message)
    }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})

