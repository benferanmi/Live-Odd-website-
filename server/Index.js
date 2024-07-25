const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');
const app = express();

// 1) MIDDLEWARES
app.use(cors());
app.use(express.json());

// 2) ROUTE
app.use('/api/auth', authRouter);

// 3) MONGO DB CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/autentication')
    .then(() => console.log('Connected to Mongo DB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// 4) GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    console.error('Error:', err);

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// 5) SERVER
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
