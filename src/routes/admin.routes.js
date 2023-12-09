const express = require('express');
const router = express.Router();
const {admin, createItem,createView,editItem, editView, deleteItem}= require('../controllers/admin.controller');

router.get('/',admin );
router.get('/create',createView );
router.post('/create', createItem);
router.get('/edit/:id',editView );
router.put('/edit/:id', editItem );
router.delete('/delete/:id', deleteItem );

module.exports = router;
