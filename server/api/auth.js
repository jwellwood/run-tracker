const express = require('express');
const router = express.Router();

// route  api/auth
// desc   get auth

router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
