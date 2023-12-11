 const path= require('path');
 
 module.exports ={
    admin: (req, res)=> res.render (path.resolve(__dirname,'../views/admin/admin.ejs'),  {
      title: "Admin"
    }),
    createView: (req,res)=> res.render (path.resolve(__dirname,'../views/admin/create.ejs'), {
      title: "Crear Item",
    }),
    createItem: (req,res)=> res.send ('esta es la ruta para Agregar un nuevo item'),
    editView: (req,res)=> res.render (path.resolve(__dirname,'../views/admin/edit.ejs'), {
      title: "Editar Item"
    }),
    editItem: (req,res)=> res.send ('esta es la vista para Impactar la modificacion '),
    deleteItem: (req,res)=> res.send ('esta es la vista para Eliminar un item especifico')

 };
