/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Blog Schema
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    date : {
        type: String,
        required: true,
        trim: true
        
    },
    content: {
        type: String,
        required: true,
        trim: true

    },
    file_path : {
        type: String,
      required: true
    },
    file_mimetype: {
        type: String,
        required: true
      },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Sets the createdAt Parameter equal to the current time
BlogSchema.pre('save', (next) => {
    const now = new Date();

    if(!this.createdAt) {
        this.createdAt = now;
    }

    next()
});


module.exports = mongoose.model('Blog', BlogSchema)