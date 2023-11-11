const PostModel = require('../models/post.model');

//GET /api/posts 
const getAllPosts = async (req, res) => {
    try {
        const [result] = await PostModel.selectAllPost();

        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const getPostsAutor = async (req, res) => {
    try {
        const { idAutor } = req.params;
        const [result] = await PostModel.selectPostByAutor(idAutor);

        res.json(result);

    }catch(error){
        res.json({fatal: error.message});
    }

};

const createPost = async (req, res) =>{
    const [result] = await PostModel.insertPost(req.body);
    const [post] = await PostModel.selectPostById(result.insertId);
    res.json(post);
}

module.exports = { getAllPosts, getPostsAutor, createPost};