const mongoose = require("mongoose");

const calendarSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
        default: Date.now
    },
    infos: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('calendar', calendarSchema);