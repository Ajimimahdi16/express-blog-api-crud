
const posts = require('../dataPost/post');

function index (req, res) {
    res.json(posts);
}


function show (req, res) {
    const id = req.params.id;
    const post = posts.find(p => p.id === parseInt(id));
    if (!post) 
    return res.status(404).send('Post not found');
    res.json(post);
}


function store (req, res) {
    res.send('Create a new post');
}


function update (req, res) {
    res.send('Update a post');
}



function modify (req, res) {
    res.send('Modify a post');
}



function destroy (req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    
    if (!post){
        res.status(404);
       
        return res.json({
        status: 404,
        error: 'Post not found',
        message: 'Post not found'
    });
    } 
    const index = posts.indexOf(post);
    posts.splice(index, 1);
    res.json({
        status: 200,
        message: 'Post deleted successfully'
    });
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
    

}
