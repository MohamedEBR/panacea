const express = require('express');
const router = express.Router();

//require the post model
const Blog = require('../Models/BlogSchema')


/* Get posts */

router.get('/', async ( req, res, next ) => {

    //sort from the latest to the earliest
    const blogs = await Blog.find().sort({ createdAt: 'desc'});
    return res.status(200).json({
        statusCode: 200,
        message: 'Fetched all posts',
        data: {blogs},
    });
});

router.get('/:id', async ( req, res, next) => {

    const blog = await Blog.findById(req.params.id);
    return res.status(200).json({
        statusCode: 200,
        message: 'Fetched post',
        data: {
            blog: blog || {},
        }
    })
})

/* POST post */
router.post('/', async (req, res, next) => {
    const { title, date, content,  image, contentType } = req.body;

    // Create a new Post
    const blog = new Blog({
        title,
        date,
        content,
        image,
        contentType
        
    })

    //Save the post into the DB
    await blog.save();
    return res.status(201).json({
        statusCode: 201,
        message: 'Created Blog',
        data: {blog},
    });
});


/* Put post */
router.put('/:id', async ( req, res, next) => {
    const { title, date, content,  image, contentType } = req.body;

    const blog = await Blog.findByIdAndUpdate(
        req.param.id,
        {title, author, content, tags}
    );

    return res.status(200).json({
        statusCode: 200,
        message: 'Updated blog',
        data: {blog},
    });
});


/* DELETE post */
router.delete('/:id', async(req, res, next) => {
    const result = await Blog.deleteOne({_id: req.params.id});
    return res.status(200).json({
        statusCode: 200,
        message: `Deleted ${result.deletedCount} blog(s)`,
        data: {},
    })
})


module.exports = router