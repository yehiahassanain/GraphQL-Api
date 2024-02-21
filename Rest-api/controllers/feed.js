exports.getPosts = (req,res,next)=>{
    res.json({
        posts:[{title:'first post',
    content:'this is the first post!'}]
    })
};

exports.createPost = (req,res,next)=>{
    const title = req.body.title;
    const content = req.body.content;
    res.json({
        message: 'post created sucessful!',
        post: {id: new Date().toISOString(),title:title,content:content}
    })
}