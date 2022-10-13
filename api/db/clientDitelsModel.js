const mongoose = require('mongoose');
const Joi = require('joi');

const ClientDitelsSchema = mongoose.Schema({
    gender: String,
    name: String,
    parents_names: String,
    price: String,
});

const ClientDitelsModel = mongoose.model('ClientDitels', ClientDitelsSchema);
exports.ClientDitelsModel = ClientDitelsModel;


exports.validClientDitels = (data) => {
    const joi_ClientDitels = Joi.object({
        gender: Joi.string()
            .min(1)
            .max(50)
            .required(),
        name: Joi.string()
            .min(1)
            .max(50)
            .required(),
        parents_names: Joi.string()
            .min(1)
            .max(50)
            .required(),
        price: Joi.string()
            .min(1)
            .max(50)
            .required(),
    })
    return joi_ClientDitels.validate(data);
};