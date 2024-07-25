const mongoose = require('mongoose');

const promoCodeSchema = new mongoose.Schema({
    code: String,
    discount: Number,
});

const PromoCode = mongoose.model('PromoCode', promoCodeSchema);

module.exports = PromoCode;
