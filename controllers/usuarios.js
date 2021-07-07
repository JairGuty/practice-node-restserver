const { response } = require('express');


const usuariosGet = (req, res = response) => {
    
    const { q, nombre = 'No Name', apikey, page=1, limit } = req.query;

    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;

    res.json({
        msg: "post API - usuarioPost",
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {
    
    const { id } = req.params;
    
    res.json({
        msg: "put API - usuariosPut",
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API - usuariosPatch"
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - usuariosDelete"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}