//incorporates dependencies
const express = require('express');
const mongoose = require('mongoose');

//tells express which window to get access through
const PORT = process.env.PORT || 3000;

//starts the express app
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//tells express which database to use
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//turns on routes
app.use(require('./routes/api.js'));
app.use(require('./routes/html.js'));

//turns on connection
app.listen(PORT, () => {
    console.log(`App running on port ${ PORT }`);
});