const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviesApp')
    .then(() => {
        console.log("Connection Open!!!")
    })
    .catch(err => {
        console.log("Oh No Error!!!");
        console.log(err);
    });
