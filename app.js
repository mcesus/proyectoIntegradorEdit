const express = require ('express');
const app= express();
const path = require('path');
const methodOverride = require('method-override');

const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require ('./src/routes/shop.routes');
const userRoutes = require ('./src/routes/user.routes');
const adminRoutes = require ('./src/routes/admin.routes');

const PORT= 5500;

//template engines
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, './src/views'));


// Middlewares de configuracion
app.use(express.static ('public_html'));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));


//Rutas
app.use('/auth', userRoutes);
app.use('/shop', shopRoutes);
app.use('/', mainRoutes);


app.listen(PORT , () => console.log(`Server running on http://localhost: ${PORT}`));
