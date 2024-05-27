import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'

import http from '../lib/http'

const EditBlog = () => {
  const { id: blogId } = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()
  // we call the API to fetch the blog blog current data
  useEffect(() => {
    async function fetchData() {
      const { data } = await http.get(`/blogs/${blogId}`)
      // by calling "reset", we fill the form fields with the data from the database
      reset(data.data.blog)
    }
    fetchData()
  }, [blogId, reset])

  const onSubmit = async ({ title, date, image, contentType, content }) => {
    const payload = {
      title,
      date,
      content,
      image,
      contentType,
    }
    await http.put(`/blogs/${blogId}`, { data: payload })
    navigate(`/blogs/${blogId}`)
  }

  return (
    <Container className="my-5" style={{ maxWidth: '800px' }}>
      <h1>Edit your blog</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" {...register('title')} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" placeholder="Enter date" {...register('date')} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control as="textarea"  placeholder="Your image..." {...register('image')} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content Type</Form.Label>
          <Form.Control as="textarea" placeholder="image/png" {...register('contentType')} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your content..." {...register('content')} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
      <Link to="/blogs" style={{ textDecoration: 'none' }}>
        &#8592; Back to Home
      </Link>
    </Container>
  )
}

export default EditBlog