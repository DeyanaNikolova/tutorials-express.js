const mongoose = require('mongoose');


const CONNECTECTION_STRING = 'mongodb://127.0.0.1:27017/tutorialDb';

module.exports = async (app) => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(CONNECTECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};