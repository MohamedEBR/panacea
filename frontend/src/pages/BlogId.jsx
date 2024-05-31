import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import formatDate from '../lib/formatDate'
import http from '../lib/http'

const BlogId = () => {
  const { id: blogId } = useParams()
  const [blog, setBlog] = useState({})
  const navigate = useNavigate()
  // Fetch the single blog blog
  useEffect(() => {
    async function fetchData() {
      const { data } = await http.get(`/blogs/${blogId}`)
      setBlog(data.data.blog)
    }
    fetchData()
  }, [blogId])
  // Delete the blog and redirect the user to the homepage
  const deleteBlog = async () => {
    await http.delete(`/blogs/${blogId}`)
    navigate('/blogs')
  }

  return (
    <>
      <Box
      component="div"
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: "3%",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
          },
          alignItems: { xs: "center", sm: "center", md: "center", lg: "center" },
          textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
          py: 5,
          px: "7%",
        }}
      >
        <Typography variant='h3'
        sx={{
          fontFamily: '"Saira Semi Condensed"',
          py:{xs:1,sm:2,md:3,lg:4},
          fontSize: {xs:20,sm: 30, md: 40, lg: 50},
            color: "#9d4f4b",

        }}>{blog.title}</Typography>
        <div className="text-secondary mb-4">posted {formatDate(blog.createdAt)}</div>
        {blog.tags?.map((tag) => (
          <span>{tag}</span>
        ))}
        <Box
        component="img"
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "80%" },
          maxHeight: "1000px",
          borderRadius: "2%",
          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",          mb: 5,
        }}
        alt="blog"
        src={`../../backend/${blog.file_path}`}      />

        <Typography 
        variant="subtitle1"
        sx={{
          fontFamily: '"Saira Semi Condensed"',
          py: 3,
          fontSize: {xs:15,sm: 20, md: 25, lg: 30},
          // width: "100%",

        }}>
          {blog.content}
          </Typography>
        <Typography className="text-secondary mb-5">- {blog.date}</Typography>
        <div className="mb-5">
          <Link variant="primary" className=" btn btn-primary m-2" to={`/blogs/${blogId}/edit`}>
            Edit
          </Link>
          <Button variant="danger" onClick={deleteBlog}>
            Delete
          </Button>
        </div>
        <Link to="/blogs" style={{ textDecoration: 'none' }}>
          &#8592; Back to Home
        </Link>
      </Box>
    </Box>
     
    </>
  )
}

export default BlogId