const router = require('express').Router();
const Workouts = require('../models/workouts');

//collects all workouts from database
router.get('/api/workouts', (req, res) => {
    Workouts.find({})
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
    Workouts.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
        console.log(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router;