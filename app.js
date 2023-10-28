const express = require("express");
const app = express();
const PORT = 3000;
const editRouter = require('./list-edit-router')
const viewRouter = require('./list-view-router')

const objeto = {
    "id":"123456",
    "isCompleted":false,
    "description":"Walk the dog",
}


app.get('/', (req, res) => {
    res.json(objeto);
});

app.use('/editar', editRouter, () =>{
    console.log("estan editando la lista de tareas")
});

app.use('/ver', viewRouter, () => {
    console.log("estan viendo la lista de tareas")
})

app.listen(PORT, () => {
    console.log("servidor en funcionamiento")
});