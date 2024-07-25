const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const createError = require('../utils/appError');
const bcrypt = require('bcryptjs');
const stripe = require('stripe')('sk_test_51LFGx8HRxabJIYD0NIPE9UKUEhZhH4GmG1Tl34UofeaxGFZhJLujrgc2zVkC6YlGUrvTtIIdRmnpYvqRBWMYL5p200rsRLonX5');
const PromoCode = require('../models/PromoCode.js');
const Payment = require('../models/PaymentModels.js');
const mongoose = require('mongoose');
const { Readable } = require('stream');

// MongoDB connection and GridFS setup
const mongoURI = 'mongodb://127.0.0.1:27017/autentication';

const conn = mongoose.createConnection(mongoURI);

let gridfsBucket;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads',
    });
    console.log('GridFSBucket initialized');
});

conn.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

const saveFileToGridFS = async (file) => {
    return new Promise((resolve, reject) => {
        const readableStream = new Readable();
        readableStream.push(file.buffer);
        readableStream.push(null);

        if (!gridfsBucket) {
            return reject(new Error('GridFSBucket is not initialized'));
        }

        const uploadStream = gridfsBucket.openUploadStream(file.originalname, {
            contentType: file.mimetype,
        });

        readableStream.pipe(uploadStream)
            .on('error', (error) => {
                reject(error);
            })
            .on('finish', () => {
                resolve(uploadStream.id);
            });
    });
};

// Register User
exports.signup = async (req, res, next) => {
    try {
        if (!req.files || !req.files.frontImage || !req.files.backImage) {
            return next(new createError('Images are required!', 400));
        }

        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return next(new createError('User already exists!', 400));
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const frontImageFile = req.files.frontImage[0];
        const backImageFile = req.files.backImage[0];

        const frontImageId = await saveFileToGridFS(frontImageFile);
        const backImageId = await saveFileToGridFS(backImageFile);

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
            frontImage: frontImageId,
            backImage: backImageId,
        });

        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET || 'secretkey123', {
            expiresIn: '90d',
        });

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token,
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                frontImage: newUser.frontImage,
                backImage: newUser.backImage,
            },
        });
    } catch (error) {
        next(error);
    }
};


// Register User
// exports.signup = async (req, res, next) => {
//     try {
//         const existingUser = await User.findOne({ email: req.body.email });
//         if (existingUser) {
//             return next(new createError('User already exists!', 400));
//         }

//         const hashedPassword = await bcrypt.hash(req.body.password, 12);
//         const newUser = await User.create({
//             ...req.body,
//             password: hashedPassword,
//         });

//         // JWT (assign JSON web token)
//         const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET || 'secretkey123', {
//             expiresIn: '90d',
//         });

//         res.status(201).json({
//             status: 'success',
//             message: 'User registered successfully',
//             token,
//             user: {
//                 _id: newUser._id,
//                 name: newUser.name,
//                 email: newUser.email,
//                 role: newUser.role,
//             },
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// Login User
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return next(new createError("User not found!", 404));
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return next(new createError("Incorrect email or password", 401));
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || 'secretkey123', {
            expiresIn: '90d',
        });

        res.status(200).json({
            status: 'success',
            token,
            message: 'Logged in successfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        next(error);
    }
};

exports.payment = async (req, res, next) => {
    const { amount, id, userId } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            description: 'Your Company Description',
            payment_method: id,
            confirm: true,
            return_url: 'http://localhost:5173/profile' // Replace with your actual return URL
        });

        // Store payment details in the database
        const payment = new Payment({
            userId,
            amount,
            paymentId: paymentIntent.id,
            status: 'Succeeded',
        });
        await payment.save();

        res.json({
            success: true,
            message: 'Payment Successful',
            payment,
        });
    } catch (error) {
        console.log('Error', error);

        // Store failed payment attempt
        const payment = new Payment({
            userId,
            amount,
            paymentId: id,
            status: 'Failed',
        });
        await payment.save();

        res.json({
            success: false,
            message: 'Payment Failed',
        });
    }
}

exports.promo = async (req, res, next) => {
    const { promoCode } = req.body;

    try {
        const promo = await PromoCode.findOne({ code: promoCode });

        if (promo) {
            res.json({
                success: true,
                discount: promo.discount,
            });
        } else {
            res.json({
                success: false,
                message: 'Invalid Promo Code',
            });
        }
    } catch (error) {
        console.log('Error', error);
        res.json({
            success: false,
            message: 'Error in Applying Promo Code',
        });
    }
}
