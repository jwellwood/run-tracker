const express = require('express');
const router = express.Router();

// route  api/user
// desc   get users

router.get('/', (req, res) => res.send('User route'));

module.exports = router;
