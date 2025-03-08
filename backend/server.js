const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/players', playerRoutes);

mongoose.connect('mongodb://localhost/spirit11', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error(err));
