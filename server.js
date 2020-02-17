const mongoose = require('mongoose');
const path = require('path');
const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

//MongoDB Config
const db = process.env.MONGO_URI || require('./config/ConnectionVars').mongoURI;

//MongoDB Connect
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

//Static folder set up.
app.use(express.static(path.join(__dirname, 'public')));

//Get api routes.
//app.use('/api/blog', require('./routes/api/blog'));

app.listen(port);