const express = require('express');
const router = express.Router();

// route  api/records
// desc   get records

router.get('/', (req, res) => res.send('Records route'));

module.exports = router;
