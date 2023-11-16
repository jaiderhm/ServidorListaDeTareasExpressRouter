const {Router} = require("express")
const router = Router();



router.post("/crear-tarea",(req, res, next) => {
  if (req.method === 'POST') {
    // Verificar solicitudes POST
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud POST está vacío.' });
    } else {
      const { indicator, description } = req.body;
      if (!indicator || !description) {
        return res.status(400).json({ error: 'Faltan atributos para crear la tarea.' });
      }
    }
  } else if (req.method === 'PUT') {
    // Verificar solicitudes PUT
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud PUT está vacío.' });
    } else {
      const { indicator, description, completed } = req.body;
      if (!indicator || !description || completed === undefined) {
        return res.status(400).json({ error: 'Información no válida o atributos faltantes para actualizar la tarea.' });
      }
    }
  }

  // Continuar con la siguiente middleware/route handler si no hay errores
  next();
});

// Rutas y controladores para tu router list-edit-router
router.post('/crear-tarea', (req, res) => {
  res.send("Tarea añadida")
})

router.delete('/eliminar-tarea/:idTarea', (req, res) => {
  const id = req.params.idTarea
  res.send("La tarea eliminada es : " + id)
})

router.put('/actualizar-tarea/:idTarea', (req, res) => {
  const id = req.params.idTarea
  res.send("La tarea actualizada es : " + id)
})

// Middleware para manejar errores

  



module.exports = router;