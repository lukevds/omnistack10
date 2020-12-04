const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type: { //esse primeiro "type" representa uma coluna
        type: String,
        enum: ['Point'],
        required: true

    },
    coordinates: {
        type: [Number],
        required: true,
    }
});

module.exports = PointSchema;