 const path= require('path');
 
 module.exports ={
    admin: (req, res)=> res.render (path.resolve(__dirname,'../views/admin/admin.ejs')),
    createView: (req,res)=> res.render (path.resolve(__dirname,'../views/admin/create.ejs')),
    createItem: (req,res)=> res.send ('esta es la ruta para Agregar un nuevo item'),
    editView: (req,res)=> res.render (path.resolve(__dirname,'../views/admin/edit.ejs')),
    editItem: (req,res)=> res.send ('esta es la vista para Impactar la modificacion '),
    deleteItem: (req,res)=> res.send ('esta es la vista para Eliminar un item especifico')

 };
