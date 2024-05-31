const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


//require the post model
const Blog = require('../Models/BlogSchema')


const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, './files');
      },
      filename(req, file, cb) {
        cb(null, `${new Date().getTime()}_${file.originalname}`);
      }
    }),
    limits: {
      fileSize: 1000000 // max file size 1MB = 1000000 bytes
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpeg|jpg|JPG|png|pdf|doc|docx|xlsx|xls)$/)) {
        return cb(
          new Error(
            'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
          )
        );
      }
      cb(undefined, true); // continue with upload
    }
  });


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

router.get('/:id', async ( req, res) => {

    try {
        const blog = await Blog.findById(req.params.id);
    return res.status(200).json({
        statusCode: 200,
        message: 'Fetched post',
        data: {
            blog: blog || {},
        }
    }) 
    } catch (error) {
        res.status(400).send('Error. Try again later.');
      }
  
})

/* POST post */
router.post(
  '/',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, date, content } = req.body;
      const { path, mimetype } = req.file;
      const blog = new Blog({
        title,
        date,
        content,
        file_path: path,
        file_mimetype: mimetype
      });
      await blog.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      
      res.status(400).send(`Error while uploading file. Try again later. ${error}`);
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);


/* Put post */
router.put('/:id', async ( req, res) => {
    const { title, date, content,  image } = req.body;

    const blog = await Blog.findByIdAndUpdate(
        req.params.id,
        {title, date, content}
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