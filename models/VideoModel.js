

const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema(
    {
        name: {type: String,
        required: true},

        video: [{type: String,}]
    },
    {
        timeStamps: true
    }
);

module.exports = mongoose.model("media", MediaSchema)