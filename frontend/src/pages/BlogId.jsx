import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link, useNavigate, useParams } from 'react-router-dom'

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
      <Container className="text-justified my-5" style={{ maxWidth: '800px' }}>
        <h1>{blog.title}</h1>
        <div className="text-secondary mb-4">{formatDate(blog.createdAt)}</div>
        {blog.tags?.map((tag) => (
          <span>{tag}</span>
        ))}
        <div className="h4 mt-5">
          <img src={blog.image} alt="image" />
        </div>

        <div className="h4 mt-5">{blog.content}</div>
        <div className="text-secondary mb-5">- {blog.date}</div>
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
      </Container>
    </>
  )
}

export default BlogId