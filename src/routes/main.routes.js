const express = require ('express');

// const path = require ('path');
const controller = require ('../controllers/main.controller');

const router = express.Router();

router.get('/', controller.home);
router.get('/home', controller.home);
router.get('/contacto', controller.contacto);
router.get ('/faqs', controller.faqs);
router.get ('/about', controller.about);



module.exports = router;

