const {Router} = require("express")
const router = Router();

router.post('/crear-tarea', (req, res) => {
    res.send("Tarea añadida")
})

router.delete('/eliminar-tarea/:idTarea', (req, res) => {
    const id = req.params.idTarea
    res.send("La tarea eliminada es : " + Id)
})

router.put('/actualizar-tarea/:idTarea', (req, res) => {
    const id = req.params.idTarea
    res.send("Tarea actualizada")
})

module.exports = router;