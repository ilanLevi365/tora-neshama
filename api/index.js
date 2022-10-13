const express = require('express');
const path = require("path");
const dotenv = require("dotenv");
const cors = require('cors');
const create_client = require(path.join(__dirname, '/db/creat_client.js'));
require(path.join(__dirname, '/db/creat_db.js'))

dotenv.config();
const app = express();
// const port = process.env.PORT || 5000;
app.listen(8800, () => {
    console.log('app listening on port!')
});
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use('/', create_client);

// Email

// const dotenv = require('dotenv');
// const mg = require('mailgun-js');

// dotenv.config();
// const mailgun = () => mg({
    // apiKey: process.env.MAILGUN_API_KEY,
    // domain: process.env.MAILGUN_DOMAIN,
// })

// app.post('/api/email', (req, res) => {
    // console.log(req)
    // const { email, subject, message } = req.body;
    // console.log(subject)
    // mailgun().messages().send({
        // from: 'Neshama <il36500000@gmail.com>',
        // to: `${email}`,
        // subject: `${subject}`,
        // html: `<p>${message}</p>`
    // }, (error, body) => {
        // if (error) {
            // console.log(error);
            // res.status(500).json({ message: 'Error sending Email.' });
        // } else {
            // console.log(body);
            // res.json({ message: 'Ok! sending Email.' });
        // }
    // })
    // res.send("yas!")
// });
// 


