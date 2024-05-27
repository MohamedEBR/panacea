import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
// Link component allow users to navigate to the blog blog component page
import { Link } from 'react-router-dom'

// utility function to format the creation date
import formatDate from '../lib/formatDate'
import http from '../lib/http'

const Blogs = () => {
  // useState allows us to make use of the component state to store the blogs
  const [blogs, setBlogs] = useState([])
  
  useEffect(() => {
    // Call the server to fetch the blogs and store them into the state
    async function fetchData() {
      const { data } = await http.get('/blogs')
      setBlogs(data.data.blogs)
    }
    fetchData()
  }, [])

  return (
    <>
      <Container className="my-5" style={{ maxWidth: '800px' }}>
        <Image
          src="avatar.jpeg"
          width="150"
          style={{ borderRadius: '50%' }}
          className="d-block img-fluid mx-auto"
        />
        <h2 className="text-center">Welcome to the Digital Marketing blog</h2>
      </Container>
      <Container style={{ maxWidth: '800px' }}>
        <ListGroup variant="flush" as="ol">
          {blogs.map((blog) => {
            // Map the blogs to JSX
            return (
              <ListGroup.Item key={blog._id}>
                <div className="fw-bold h3">
                  <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
                    {blog.title}
                  </Link>
                </div>
                <div>
                  <img src={`../../backend/${blog.file_path}`} alt="blog" />
                </div>
                <div>
                  {blog.date} - <span className="text-secondary">{formatDate(blog.createdAt)}</span>
                </div>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Container>
    </>
  )
}

export default Blogs