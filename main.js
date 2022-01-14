const Vonage = require('@vonage/server-sdk')
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;


app.get('/', function(req, res) {
    const vonage = new Vonage({
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
        applicationId: process.env.APPLICATION_ID,
        privateKey: process.env.PRIVATE_KEY
    })
    vonage.channel.send(
        { "type": "mms", "number": req.query.msisdn},
        { "type": "mms", "number": process.env.FROM_NUMBER},
        {
          "content": {
            "type": "image",
            "image": { "url": 'https://media.sproutsocial.com/uploads/meme-example.jpg' }
          }
        },
        (err, data) => {
            if (err) {
                console.error(err);
            } else {
                console.log(data.message_uuid);
            }
        }
    );
    res.status(200).end();
});

app.listen(port, function() {
});