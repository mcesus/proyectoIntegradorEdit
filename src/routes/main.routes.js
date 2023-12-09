const express = require ('express');

// const path = require ('path');
const { home, contacto, faqs, about}= require ('../controllers/main.controller');

const router = express.Router();

router.get('/', home);
router.get('/home', home);
router.get('/contacto', contacto);
router.get ('/faqs', faqs);
router.get ('/about', about);



module.exports = router;

