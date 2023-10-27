const {Router} = require("express")
const router = Router();

router.get('/tareas-completas', (req, res) => {
    res.send("Listas de tareas Completadas")
})

router.get('/tareas-incompletas', (req, res) => {
    res.send("Listas de tareas Incompletas")
})

module.exports = router;