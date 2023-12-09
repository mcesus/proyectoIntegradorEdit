const express = require('express');
const router = express.Router();

router.get('/login' , (req, res) => res.send('Esta es la vista de Login'));
router.post('/login' , (req, res) => res.send('Esta es la ruta que Valida los datos de Login'));
router.get('/register' , (req, res) => res.send('Esta es la vista de Register'));
router.post('/register' , (req, res) => res.send('Esta es la ruta que Crea un nuevo usuario'));
router.get('/logout', (req, res)=> res.send('Esta vista Desloguea o cierra la sesion del usuario'))




module.exports = router;
