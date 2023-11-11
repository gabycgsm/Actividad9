const AutorModel = require('../models/autor.model');

//GET /api/autores
const getAllAutores = async (req, res) => {
    try {
        const [result] = await AutorModel.selectAllAutor();

        res.json(result);

    } catch(error){
        res.json({fatal: error.message});
    }
    

}

const createAutor = async (req, res) => {
    const [result] = await AutorModel.insertAutores(req.body);
    const [autor] = await AutorModel.selectAutorById(result.insertId);
    res.json(autor);
    
}


module.exports = { getAllAutores, createAutor };