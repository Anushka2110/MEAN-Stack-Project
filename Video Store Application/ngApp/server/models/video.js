const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    id: Number,
    title: String,
    runtime: String,
    genre: String,
    rating: String,
    director: String,
    status: String
});

module.exports = mongoose.model('video', videoSchema, 'videos');//videos is name of collection in mlab; eg videos