const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/autentication');

let gridfsBucket;

conn.once('open', () => {
  gridfsBucket = new GridFSBucket(conn.db, {
    bucketName: 'uploads',
  });
  console.log('GridFSBucket initialized');
});

conn.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

const getGridFSBucket = () => {
  if (!gridfsBucket) {
    throw new Error('GridFSBucket is not initialized');
  }
  return gridfsBucket;
};

module.exports = { getGridFSBucket, conn };