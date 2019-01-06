'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RankingSchema = new Schema({
    user_lastName: {
        type: String,
    },
    user_counter: {
        type: Number
    },
    userLevel: {
        type: Number,
    },
    Created_date: {
        type: Date,
        default: Date.now
    }   
});

module.exports = mongoose.model('Ranking', RankingSchema);