const express = require ('express');

const path = require ('path');

const router = express.Router();

router.get('/', (req,res)=> res.sendFile(path.resolve(__dirname, '../../public_html/pages/shop/shop.html')));
router.get('/item/:id' , (req, res)=> res.send('esta es la vista del Item seleccionado'));
router.post('/item/:id/add', (req, res)=> res.send('esta es la ruta para agregar un nuevo item'));
router.get ('/cart', (req, res)=> res.send('esta es la vista del carrito'));
router.post ('/cart', (req, res)=> res.send('esta es la ruta para agregar un item al carrito'));

// router.get('/item/:id', (req,res)=> {

//     const { id } = req.params;
//     res.send(`Usted solicito el item : ${id}`);
// })
module.exports = router;