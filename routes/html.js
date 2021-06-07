const router = require('express').Router();
const path = require('path');

//html get request to render the stats page for clients to access
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

//html get request to render the exercise page for clients to access
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

//exports the routes for other modules to call upon
module.exports = router;