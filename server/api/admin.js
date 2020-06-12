const express = require('express');
const router = express.Router();

// route  api/admin
// desc   get admin

router.get('/', (req, res) => res.send('Admin route'));

module.exports = router;
