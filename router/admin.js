const router = require('express').Router();

router.get('/', (req, res) => {
	res.send('hell world');
})

module.exports = router;