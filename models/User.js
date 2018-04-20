const mongoose = require('mongoose');
const { Schema } = mongoose;
const { objectid } = Schema.Types;

const userSchema = new Schema({
    name: String,
    _blogs: [{ type: objectId, ref: 'Blog'}]
})

userSchema.post('remove', function(doc){
    const Blog = mongoose.model('Blog');
    doc._blogs.forEach(blogId => { 
        Blog.findById(blogId).then(blog => blog.remove());
    })
})

mongoose.model('User', userSchema);