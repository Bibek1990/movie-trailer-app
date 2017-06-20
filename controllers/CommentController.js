/**
 * Created by avipokhrel on 6/20/17.
 */
var express = require('express');
var router = express.Router();

var comment = require('../models/Comment.js');
var trailer = require('../models/Trailer.js');

/* GET /item listing. */
router.get('/', function(req, res, next) {
    console.log('calling comment all service..');
    comment.find(function (err, comments) {
        if (err) return next(err);
        res.json(comments);
    });
});


router.get('/:id', function(req, res, next) {
    console.log('the request param is ' + req.params.id);
    comment.findById(req.params.id , function (err, doc){
        res.json(doc);
    }).populate('trailer');
});


/* POST /items */
router.post('/', function(req, res) {
    var newComment = new comment();
    newComment.title = req.body.title;
    newComment.user = req.body.user;
    newComment.rating = req.body.rating;
    newComment.comments = req.body.comments;
    newComment.trailer = req.body.trailer;

    // save the user and check for errors
    newComment.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'New comment was successfully added to the comment collection..' });
    });

});



module.exports = router;