const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    intro: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, {timestamps:true})


const Blog = mongoose.model('Blog', BlogSchema); //Model name must be Convention Singular, Capitalize

module.exports = Blog;