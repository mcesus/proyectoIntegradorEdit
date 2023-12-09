module.exports = {
    home: (req, res) => res.render ('index'),
    contacto: (req,res)=> res.send('Esta es la vista de contacto'),
    faqs: (req, res)=> res.send ('Esta es la vista de preguntas frecuentes'),
    item: (req, res) => res.render ('item')

};

