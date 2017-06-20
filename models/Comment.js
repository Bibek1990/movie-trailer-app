/**
 * Created by avipokhrel on 6/20/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create the TrailerSchema.
var CommentSchema = new Schema({
    user: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    publishedOn: {
        type: Date,
        'default': Date.now
    },
    comments: {
        type: String,
        required: false
    },
    trailer: {type: Schema.Types.ObjectId, ref: 'trailer', required: true},

});

// Export the model.
module.exports = mongoose.model('comment', CommentSchema);