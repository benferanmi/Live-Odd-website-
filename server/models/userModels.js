const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    username: {
        type: String,
        required: [true, 'Please Input your Username'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false,
    },
    frontImage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'uploads.files',
    },
    backImage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'uploads.files',
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
