const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');

const router = express.Router();
const AddPost = require('./models/addPost');

let dbUrl = 'mongodb://localhost:5000/addPost';



mongoose.connect(dbUrl, function(err, res){
    if(err){
        console.log('db connection failed'); 
    } else {
        console.log('we have liftoff with the db', res);
    }
})

router.get('/', function(req, res, next){
    AddPost.find(null, function(err, posts){
        res.json({
            confirmation: 'success',
            results: 'posts'
        })
    })
})


module.exports = router;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//testing routing
// app.get('/hello', (req, res) => {
//     res.send('<h1>hello there</h1>');
//     console.log('listening on hello, lol');
// })



mongoose.connect(keys.mongoURI, function(error) {
    if (error) {
        throw error;
    }
    console.log("We are connected to the mlab database");
});

var InstructorSchema = {
    name: String,
    age: Number
}


var Instructor = mongoose.model('Instructors', InstructorSchema);

// AT A BASE LEVEL CREATING / INSERTING data into our collections for mongo
// var ryan = new Instructor({ name: 'Ryan', age: 24 });
// ryan.save();

// READING FROM OUR COLLECTIONS
// Instructor.find(function(err, instructors) {
//     if (err) return console.error(err);

//     console.log("These are all of our instructors", instructors);
// })
let TestUserSchema = {
    userName: String,
    email: String,
    comment: String
}
let TestUser = mongoose.model('TestUser', TestUserSchema);

let testWill = new TestUser({userName: 'testWill', email: 'testWIll@gmail.com', comment: 'hello everyoasdafasdfadsfa' });
testWill.save();

TestUser.find(function(err, TestUser){
    if(err) return console.error(err);

    console.log('these are all of the test users', TestUser);
});

app.listen(PORT);



