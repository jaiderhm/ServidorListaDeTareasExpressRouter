const express = require("express");
const app = express();
const PORT = 3000;
const editRouter = require('./list-edit-router')
const viewRouter = require('./list-view-router')

app.use(express.json());

app.get("/this-should-exists", (req, res)=>{
    res.status(404).send("Not found")
});



app.get('/', (req, res) => {
    res.json(taks);
});

app.use('/editar', editRouter, () =>{

    console.log("estan editando la lista de tareas")
});

app.use('/ver', viewRouter, () => {
    res.json(taks)
    console.log("estan viendo la lista de tareas")
})

app.listen(PORT, () => {
    console.log("servidor en funcionamiento")
});