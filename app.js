const express = require('express')
const app = express()
const twilio = require('twilio')
const port = process.env.PORT || 3000
require('dotenv').config()
const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

client.messages
  .create({ from: `${process.env.MY_TWILIO_CELL}`, body: 'Greetings! The current time is: XXXXXX 9K943Z2JA5H9KTX', to: `${process.env.TWILIO_QUEST_CELL}` })
  .then(message => console.log(message.sid))
  .done()

app.listen(port, () => console.log(`We out here on ${port}, also ${process.env.TESTING}`))
