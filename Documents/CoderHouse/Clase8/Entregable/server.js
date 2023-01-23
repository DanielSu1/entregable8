import express from 'express'
const app = express();
const routerProducto = express.Router();

routerProducto.use(express.json());
routerProducto.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

const producto = []
routerProducto.get('/listar', (req, res)=>{
    res.json(producto)
})
routerProducto.post('/gurdar', (req, res)=>{
    producto.push(req.body)
    res.json(req.body)
})

const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor conectado al puerto ${server.address().port}`)
})
server.on(`error`, (error)=>console.error(`Error en el servidor ${error}`))