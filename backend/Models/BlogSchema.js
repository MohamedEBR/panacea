const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Blog Schema
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image : {
        type: Buffer,
    },
    contentType : {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Sets the createdAt Parameter equal to the current time
BlogSchema.pre('save', (next) => {
    now = new Date();

    if(!this.createdAt) {
        this.createdAt = now;
    }

    next()
});


module.exports = mongoose.model('Blog', BlogSchema)