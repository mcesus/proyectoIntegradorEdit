const express = require ('express');

// const path = require ('path');
const  {home, contacto, faqs} = require ('../controllers/main.controller');

const router = express.Router();

router.get('/home', home);
router.get('/contacto', contacto);
router.get ('/faqs', faqs);


module.exports = router;

