const express = require('express');

const connectDB = require('./db');

const app = express();
app.use(express.json({ extended: false }));

connectDB();

app.use('/api/admin', require('./api/admin'));
app.use('/api/user', require('./api/user'));
app.use('/api/profile', require('./api/profile'));
app.use('/api/auth', require('./api/auth'));
app.use('/api/activity', require('./api/activity'));

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`app listening on ${PORT}`));
