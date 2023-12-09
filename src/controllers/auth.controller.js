
const path= require('path');

module.exports={

    login: (req, res) => res.render(path.resolve (__dirname, '../views/auth/login.ejs')),
    doLogin: (req, res) => res.send('Esta es la ruta que Valida los datos de Login'),
    register: (req, res) => res.render(path.resolve (__dirname, '../views/auth/register.ejs')),
    doRegister: (req, res) => res.send('Esta es la ruta que Crea un nuevo usuario'),
    logout: (req, res)=> res.send('Esta vista Desloguea o cierra la sesion del usuario')

};
