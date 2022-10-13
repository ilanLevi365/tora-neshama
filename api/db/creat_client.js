const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require("path");
const { validClientDitels, ClientDitelsModel } = require(path.join(__dirname, 'clientDitelsModel.js'))


router.get('/', async (req, res) => {
    res.send('yes!');
});
router.post('/', async (req, res) => {
    console.log(req.body)
    if (mongoose.connection.readyState === 0) { res.json({ conect: 0, creating_user: 0 }); }
    else {
        try {
            let valid_ClientDitels = validClientDitels(req.body);
            if (valid_ClientDitels.error) { res.status(400).json({ conect: 1, creating_user: 0, error: valid_ClientDitels.error.details }) }
            else {
                let newClientDitels = new ClientDitelsModel(req.body);
                newClientDitels.save();
                let data = await ClientDitelsModel.find({});
                res.json({ conect: 1, creating_user: 1, clientDitels: data });
            }
        } catch (e) {
            res.json({ conect: 1, creating_user: 0 });
        }
    }
});

module.exports = router;