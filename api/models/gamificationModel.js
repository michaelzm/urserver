'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GamificationSchema = new Schema({

    name: {
        type: String,
    },
    age: {
        type: String,
    },
    gender: {
        type: String,
    },
    reviewCount: {
        type: Number
    },
    userLevel: {
        type: Number,
    },
    userRanking:{
        type: Number
    },
    partA1: {
        type: Number,
    },
    partA2: {
        type: Number,
    },
    partB1: {
        type: Number,
    },
    partB2: {
        type: Number,
    },
    partB3: {
        type: Number,
    },
    partB4: {
        type: Number,
    },
    partB5: {
        type: Number,
    },
    partB6: {
        type: Number,
    },    
    Created_date: {
        type: Date,
        default: Date.now
    }   
});

module.exports = mongoose.model('Gamification', GamificationSchema);