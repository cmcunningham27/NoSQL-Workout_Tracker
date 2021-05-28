const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

        }
    ]
});

const Workouts = mongoose.model('Workouts', workoutsSchema);