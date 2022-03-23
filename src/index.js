const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://anil88:ghkHXqTEPEofBujh@cluster0.syc39.mongodb.net/group-77-database?retryWrites=true&w=majority", {useNewUrlParser: true , useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false})
    .then(() => console.log('ANIL TIWARY(DATABASE)'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});


 