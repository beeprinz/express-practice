const mongoose = require('mongoose');
const { Schema } = mongoose;
const { objectid } = Schema.Types;

const blogSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    body: String,
    _user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    }
})

mongoose.model('Blog', blogSchema)