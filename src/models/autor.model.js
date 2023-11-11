//Mostrar todos los autores 
const selectAllAutor = () => {
    return db.query('select * from autores')
}

//consultar autor por id
const selectAutorById = (autorId) =>{
    return db.query('select * from  blog.autores where id = ?', [autorId])
}

 //insertar autores
const insertAutores = ({nombre,email,imagen}) => {
    return db.query('insert into autores(nombre,email,imagen) values (?,?,?)',
    [nombre, email, imagen])
}

module.exports = {selectAllAutor, insertAutores, selectAutorById};