const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("====test");
    res.send('heello world');

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running On Port PORT`));     