const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()

app.get('/', (req, res, next) => res.send('🤘🏿'))

app.listen(port, () => { console.log(`We out here on ${port}, also ${process.env.TESTING}`) })
