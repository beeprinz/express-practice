const router = require('express').Router();

router.get('/', (req, res) => {
 res.send('Get all blogs');
});

router.get('/:id', (req, res) => {
 res.send('Get blog with id' + req.param.id);
});

router.post('/', (req, res) => {
 res.json(req.body);
});

module.exports = router;