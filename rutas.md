GET /api/autores
-Recupera todos los autores del blog

POST /api/autores
--Recibe en el body los datos de un nuevo autor para insertarlo en la BD

PUT /api/autores/IDAUTOR
-Recibe en el body los datos a modificar del autor que coincida con el ID que recibimos en la URL

DELETE /api/autores/IDAUTOR
-Borra el autor que coincida con el ID recibido en la URL

GET /api/posts
-Recupera todos los post del blog

POST /api/posts
--Recibe en el body los datos de un nuevo post para insertarlo en la BD

PUT /api/post/IDPOST
-Recibe en el body los datos a modificar del post que coincida con el ID que recibimos en la URL

DELETE /api/autoresposts/IDPOST
-Borra el post que coincida con el ID recibido en la URL

GET /api/post/IDAUTOR
-Recupera todos los post de un autor