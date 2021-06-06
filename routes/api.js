const router = require('express').Router();
const Workouts = require('../models/workouts');

//collects all workouts from database
router.get('/api/workouts', (req, res) => {
    Workouts.aggregate([{ $addFields: {totalDuration: { $sum: '$exercises.duration' }}}])
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post('/api/workouts', ({body}, res) => {
    Workouts.create(body)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

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

// 
//.slice('day', -7)
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


module.exports = router;