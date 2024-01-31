const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
 
app.use(cors())

let countClicks = {
    count: 0
};

app.get('/', (req, res) => {
    res.json(countClicks);
});

app.get('/clicks', (req, res) => {
    countClicks.count += 1;
    res.json(countClicks);
});

app.listen(port, () => {
    console.log(`Приложение запущено и слушает порт ${port}`);
})