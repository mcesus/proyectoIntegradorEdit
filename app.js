const express = require ('express');
const app= express();
const path = require('path');
const methodOverride = require('method-override');

//Routes Imports

const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require ('./src/routes/shop.routes');
const authRoutes = require ('./src/routes/auth.routes');
const adminRoutes = require ('./src/routes/admin.routes');

const PORT= 5500;

//template engines
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, './src/views'));


// Middlewares de configuracion

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static ('public_html'));



//Rutas
app.use('/auth', authRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes)
app.use('/', mainRoutes);


app.listen(PORT , () => console.log(`Server running on http://localhost: ${PORT}`));
