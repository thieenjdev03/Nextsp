const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    nameCategory: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model('Category', categorySchema);
