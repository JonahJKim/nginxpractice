const express = require('express');
const path = require('path');

// constants
const app = express();
const PORT = process.env.PORT || 3000

// app uses
app.use('/static', express.static(path.join(__dirname, 'public')));

// app routes
app.get('/api', (req, res) => {
    res.status(200).send('Hello!');
})

// app listen
app.listen(PORT, () => {
    console.log("App is up on port " + PORT);
})