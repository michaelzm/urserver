'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    rating1: {
        type: number,
        required: 'rating1 missing'
    },
    rating2: {
        type: number,
    },
    rating3: {
        type: number,
    },
    rating4: {
        type: number,
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);