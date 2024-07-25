const express = require('express');
const authController = require('../controllers/authControllers');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/signup', upload.fields([
    { name: 'frontImage', maxCount: 1 }, 
    { name: 'backImage', maxCount: 1 }
]), authController.signup);
router.post('/login', authController.login);
router.post('/payment', authController.payment);
router.post('/promo', authController.promo);

module.exports = router;
