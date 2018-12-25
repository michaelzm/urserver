'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    rating1: {
        type: Number,
        required: 'rating1 missing'
    },
    rating2: {
        type: Number,
    },
    rating3: {
        type: Number,
    },
    rating4: {
        type: Number,
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);