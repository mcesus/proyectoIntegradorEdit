module.exports = {
    home: (req, res) => {
        res.render ('index', {
            title:"Home"
        });
    },
    contacto: (req,res)=> res.send('Esta es la vista de contacto'),
    faqs: (req, res)=> res.send ('Esta es la vista de preguntas frecuentes'),
    about: (req, res) => res.send ('Esta es la vista de Nosotros')

};

