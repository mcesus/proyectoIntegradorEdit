const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> res.send ('esta es la vista de Admin'));
router.get('/create', (req,res)=> res.send ('esta es la vista para Crear un nuevo item'));
router.post('/create', (req,res)=> res.send ('esta es la ruta para Agregar un nuevo item'));
router.get('/edit/:id', (req,res)=> res.send ('esta es la vista para Editar un item especifico'));
router.put('/edit/:id', (req,res)=> res.send ('esta es la vista para Impactar la modificacion '));
router.delete('/delete/:id', (req,res)=> res.send ('esta es la vista para Eliminar un item especifico'));

module.exports = router;
