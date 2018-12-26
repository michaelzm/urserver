'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EvaluationSchema = new Schema({
    name: {
        type: String,
    },
    reviewCount: {
        type: Number
    },
    rating1: {
        type: Number,
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

module.exports = mongoose.model('Evaluation', EvaluationSchema);