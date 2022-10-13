const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ilanLevi:372819@cluster0.nl8tp.mongodb.net/tora-neshama');

mongoose.connection
    .once('open', () => { console.log('db tora-neshama conected!') })
    .on('error', () => console.log('db tora-neshama no conected!'));

module.exports = mongoose;
