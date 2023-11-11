/*Cada post recuperado debería ir acompañado de todos los datos del autor de este y no solo del identificador que lo define*/
const selectAllPost = () => {
    return db.query('select * from  blog.posts as p, blog.autores as a where p.autores_id = a.id');
};

/*Recuperar los diferentes posts escritos por un autor en concreto*/
const selectPostByAutor = (idAutor) => {
    return db.query('select * from posts  as p, blog.autores as a where p.autores_id = a.id and p.autores_id = ?', [idAutor])
};

//recuperar post por id
const selectPostById = (postId) => {
    return db.query('select * from  blog.posts where id = ?', [postId])
}

//insertar post
const insertPost = ({titulo,descripcion,fecha_creacion,categoria,autores_id}) => {
    return db.query('insert into posts(titulo,descripcion,fecha_creacion,categoria,autores_id) values (?,?,?,?,?)',
    [titulo, descripcion, fecha_creacion, categoria, autores_id])

}

module.exports = {selectAllPost, selectPostByAutor, insertPost, selectPostById};