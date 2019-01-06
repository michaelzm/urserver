'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RankingSchema = new Schema({
    name: {
        type: String,
    },
    reviewCount: {
        type: Number
    },
    level: {
        type: Number,
    }   
});

module.exports = mongoose.model('Ranking', RankingSchema);