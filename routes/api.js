const router = require('express').Router();
const Workouts = require('../models/workouts');

//collects all workouts from database and totalDuration of exercises
router.get('/api/workouts', (req, res) => {
    Workouts.aggregate([{ $addFields: {totalDuration: { $sum: '$exercises.duration' }}}])
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//creates a new workout in the database
router.post('/api/workouts', ({body}, res) => {
    Workouts.create(body)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//adds exercises to a specific workout based on its id
router.put('/api/workouts/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    Workouts.findOneAndUpdate({ _id: req.params.id }, {$push: {exercises: { type: req.body.type, name: req.body.name, duration: req.body.duration, weight: req.body.weight, reps: req.body.reps, sets: req.body.sets, distance: req.body.distance}}})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
        console.log(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//retrieves workouts and totalDuration from the last 7 workouts, renders the weekdays backwards
router.get('/api/workouts/range', (req, res) => {
    Workouts.aggregate([{ $addFields: {totalDuration: { $sum: '$exercises.duration' }}}]).sort({ day: -1 }).limit(7)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
        console.log('dbWorkouts', dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//exports route requests for other modules to utilize
module.exports = router;