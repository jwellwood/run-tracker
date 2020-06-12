const express = require('express');

const connectDB = require('./db');

const app = express();

connectDB();

app.use('api/admin', require('./api/admin'));
app.use('api/user', require('./api/user'));
app.use('api/profile', require('./api/profile'));
app.use('api/auth', require('./api/auth'));
app.use('api/records', require('./api/records'));

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`app listening on ${PORT}`));
