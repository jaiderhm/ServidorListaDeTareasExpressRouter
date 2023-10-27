const {Router} = require("express")
const router = Router();

router.post('/crear-tarea', (req, res) => {
    res.send("Tarea añadida")
})

router.delete('/eliminar-tarea', (req, res) => {
    res.send("Tarea eliminada")
})

router.put('/actualizar-tarea', (req, res) => {
    res.send("Tarea actualizada")
})

module.exports = router;