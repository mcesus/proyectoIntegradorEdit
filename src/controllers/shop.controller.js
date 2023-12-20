const path= require ('path');
const {getAll, getOne}= require('../models/product.model');
const json= [
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/multimedia/pokemon/pikachu-1.webp",
    img_back: "/multimedia/pokemon/pikachu-box.webp"
    },
    {
    product_id: 2,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 3,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 4,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },

    {
    product_id: 5,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/multimedia/pidgeotto-box.webp"
    },
    {
    product_id: 6,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 7,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 8,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 9,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    }

    ];
module.exports = {
    shop: async(req, res) =>{
        
        const data = await getAll();
        console.log(data);
        res.render(path.resolve (__dirname, '../views/shop/shop.ejs'),{
            title: "Tienda",
            data
        });
    },

    item: async(req, res)=> {
        const itemId =req.params.id;
        const [item]= await getOne(itemId);
        
        res.render(path.resolve (__dirname, '../views/shop/item.ejs'),{
            title: "Item",
            item
        })
    },

    addItem: (req, res)=> {
        res.send('esta es la ruta para agregar un nuevo item')
    },
    cart: (req, res)=> {
        res.send('esta es la vista del carrito');
    },
    addToCart: (req, res)=> {
        res.send('esta es la ruta para agregar un item al carrito')
    }
};
