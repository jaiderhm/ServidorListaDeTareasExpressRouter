const {Router} = require("express")
const router = Router();


router.get("/this-should-exists", (req, res)=>{
    res.status(404).send("Not found")
});


router.get('/tareas-completas', (req, res) => {
    res.send("Listas de tareas Completadas")
})

router.get('/tareas-incompletas', (req, res) => {
    res.json(taks)
    res.send("Listas de tareas Incompletas")
})

module.exports = router;