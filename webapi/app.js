const {
    default: axios
} = require('axios')
const express = require('express')
const cors = require('cors');
const epic = require('./Services/epic')

require("dotenv").config()
const app = express()
const port = 3000

app.get('/epic',cors(), async (req, res) => {
    const response = await epic.fetchResults();
    console.log(response)
    res.json(response)
});

app.use(cors({
    origin: '*'
}));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})