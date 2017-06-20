/**
 * Created by avipokhrel on 6/16/17.
 */
var express = require('express');
var router = express.Router();

var trailer = require('../models/Trailer.js');
var comment = require('../models/Comment.js');

/* GET /item listing. */
router.get('/', function (req, res, next) {
    console.log('retrieving all trailer..');
    trailer.find(function (err, trailers) {
        if (err) return next(err);
        res.json(trailers);
    }).populate('comment');
});


router.get('/:id', function (req, res, next) {
    console.log('the request param is ' + req.params.id);
    trailer.findById(req.params.id, function (err, trailerRes) {

        comment
            .find({trailer: trailerRes._id})
            .exec(function (err, comments) {
                if (err) return handleError(err);
                // returns all stories that have Bob's id as their author.
                trailerRes.comments = comments;
                res.json(trailerRes);
            });


    });
});


/* POST /items */
router.post('/', function (req, res) {
    var newTrailer = new trailer();
    newTrailer.title = req.body.title;
    newTrailer.author = req.body.author;
    newTrailer.url = req.body.url;
    newTrailer.description = req.body.description;

    // save the user and check for errors
    newTrailer.save(function (err) {
        if (err)
            res.send(err);

        res.json({message: 'New trailer was successfully added to the collection..'});
    });

});


module.exports = router;