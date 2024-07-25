const mongoose = require('mongoose');
const PromoCode = require('./models/PromoCode');

mongoose.connect('mongodb://127.0.0.1:27017/autentication')
    .then(() => {
        console.log('Connected to MongoDB');
        return PromoCode.insertMany([
            { code: 'DISCOUNT10', discount: 10 },
            { code: 'DISCOUNT20', discount: 20 },
        ]);
    })
    .then(() => {
        console.log('Promo Codes added');
        mongoose.disconnect();
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB or add promo codes', err);
    });
