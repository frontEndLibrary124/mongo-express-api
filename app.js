const express = require('express');
const cors = require('cors');
const app = express();
const userRoute = require('./routes/user.route');
require('./config/db');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/api/users', userRoute);

app.use((req, res, next) => {
    res.status(404).json({ message: 'route not found' });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: 'something broke' });
});

module.exports = app;