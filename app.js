const express = require("express");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const app = express();
const PORT = process.env.PORT
const editRouter = require('./list-edit-router')
const viewRouter = require('./list-view-router')
const taks = require("./list-edit-router.js")
const key = process.env.SECRET_KEY
dotenv.config()

app.use(express.json());


const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Encuentra al usuario en el array
    const user = users.find(u => u.username === username && u.password === password);
  
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  
    // Firmar un token JWT con información de usuario
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.SECRET_KEY, { algorithm: 'HS256' });
    res.json({ token });
});

// Ruta protegida
app.get('/protected', (req, res) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Token not provided' });
    }
  
    // verificar token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
  
      // El token es válido, puede usarlo decodificado para obtener información del usuario
      res.json({ message: 'Access granted', user: decoded });
    });
});




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