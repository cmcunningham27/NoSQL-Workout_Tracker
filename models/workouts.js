const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//data structure for the database 
const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                require: 'Enter a type of exercise'
            },
            name: {
                type: String,
                trim: true,
                require: 'Enter a name.'
            },
            duration: {
                type: Number,
                require: 'Enter a duration'
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

//turns it into a mongoose model
const Workouts = mongoose.model('Workouts', workoutsSchema);

//exports model for use in other modules
module.exports = Workouts;