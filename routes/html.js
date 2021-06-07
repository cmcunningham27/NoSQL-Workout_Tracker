const router = require('express').Router();
const path = require('path');

//retrieves and sends client-side html for Dashboard page
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

//retrieves and sends client-side html for exercise page
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

//exports the routes for other modules to call upon
module.exports = router;