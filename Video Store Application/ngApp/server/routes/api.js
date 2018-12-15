const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');


//Part of attempt
const app = express();

const db= "mongodb://college:college1@ds227664.mlab.com:27664/products"//db user=college; db password=college1;
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error!"+err);
    }
});


//try to make update work
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/api/videos');
    res.setHeader('Accesss-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Authorization');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  
    next();
  });
//*********************************/


router.get('/videos', function(req, res){
    console.log('*****Get request for all videos*****');
    Video.find({})
    .exec(function(err, movies){
        if(err){
            console.log("Error retrieving videos");
        }else{
            res.json(movies);
        }
    })
});

router.get('/videos/:id', function(req, res){
    console.log('Get request for one video');
    Video.findById(req.params.id)
    .exec(function(err, video){
        if(err){
            console.log("Error retrieving video");
        }else{
            res.json(video);
        }
    });
});

router.post('/video', function(req, res){
    console.log('Post a video');
    var newVideo = new Video();
    newVideo.id = req.body.id;
    newVideo.title = req.body.title;
    newVideo.runtime = req.body.runtime;
    newVideo.genre = req.body.genre;
    newVideo.rating = req.body.rating;
    newVideo.director = req.body.director;
    newVideo.status = req.body.status;
    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log('Errorsaving video');
        }else{
            res.json(insertedVideo);
        }
    });
});

router.put('/video/:id', function(req,res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
        {
            $set: {id:  req.body.id, title: req.body.title, runtime: req.body.runtime, genre: req.body.genre, rating: req.body.rating, director: req.body.director, status: req.body.status}
        },
        {
            new: true
        },
        function(err, updatedVideo){
            if(err){
                res.send("Error updating video");
            }else{
                res.json(updatedVideo);
            }
        });
});

router.delete('/videos/:id', function(req, res){
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            console.log("Error deleting video");
        }else{
            res.json(deletedVideo);
        }
    });
});

module.exports = router;