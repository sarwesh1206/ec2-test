const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('heello world');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running On Port PORT`));     