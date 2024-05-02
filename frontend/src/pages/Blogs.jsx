import { useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button'
import { Link, useNavigate, useParams } from 'react-router-dom';

import formatDate from '../lib/formatDate';
import http from '../lib/http';

const Blogs = () => {

    const {id:blogId} = useParams()
    const [blogs, setBlogs] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData(){
            const {data} = await http.get(`/api/blogs/${blogId}`)
            setBlogs(data.data.blogs)
        }
        fetchData()
    }, [blogId])

    // Delete Blog
    const deleteBlog = async () => {
        await http.delete(`/api/blogs/${blogId}`)
        navigate('/')
    }
    
    return (
        <>
        <Box
        sx={{
        my: 5,
        maxWidth: '800px'    
        }}>
            <h1>{post.title}</h1>
            <div>{formatDate(post.createdAt)}</div>
            {post.tags?.map((tag) => (
                <span>{tag}</span>
            ))}
            <div>{post.content}</div>
            <div>- {post.author}</div>
            <div>
                <Link variant="primary" to={`/blogs/${blogId}/edit`}>
                    Edit
                </Link>
                <Button onClick={deleteBlog}>
                    Delete
                </Button>
            </div>
            <Link to='/' style={{textDecoration: 'none'}}>
                &#8592; Back to Home
            </Link>
        </Box>
        </>
    )
}

export default Blogs