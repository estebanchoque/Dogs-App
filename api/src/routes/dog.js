const router = require('express').Router();
const { addDog } = require('./controllers/dog');

router.post('/', addDog);

module.exports = router;