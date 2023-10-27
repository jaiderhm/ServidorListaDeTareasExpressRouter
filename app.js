const express = require("express");
const app = express();
const PORT = 3000;

const objeto = {
    "id":"123456",
    "isCompleted":false,
    "description":"Walk the dog",
}


app.get('/', (req, res) => {
    res.json(objeto);
});

app.listen(PORT, () => {
    console.log("servidor en funcionamiento")
});