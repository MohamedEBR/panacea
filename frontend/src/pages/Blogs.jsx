import { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {motion} from 'framer-motion'
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CustomBox } from "../components/shared/CustomBox";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import images from "../constants/images";

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
          alignItems: { xs: "center", sm: "center", md: "start", lg: "start" },
          textAlign: { xs: "center", sm: "center", md: "start", lg: "start" },
          py: 5,
          px: "7%",
        }}
      >
         <motion.div
      initial={{opacity: 0, x: -20}}
      whileInView={{opacity: 1, x: 0}}
      transition={{ease:'backInOut', duration:1}}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Saira Semi Condensed"',
            color: "#9d4f4b",
          }}
        >
          Blogs
        </Typography>
        </motion.div>
      </Box>
      <motion.div
      initial={{opacity: 0, x: -20}}
      whileInView={{opacity: 1, x: 0}}
      transition={{ease:'backInOut', duration:1}}>
      <CustomBox
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
          alignItems: { xs: "center", sm: "center", md: "start", lg: "start" },
          textAlign: { xs: "center", sm: "center", md: "start", lg: "start" },
          py: 10,
          px: "7%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Saira Semi Condensed"',
          }}
        >
          Celebrating the unwavering commitment and remarkable achievements of our karate family. Here, we honor the triumphs of our students and instructors, who consistently demonstrate excellence at the international, national, and provincial levels.
        </Typography>
      </CustomBox>
      </motion.div>

    </Box>
      <Box 
      component="div"
      sx={{
        flexDirection: "column",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        textAlign: { xs: "center", sm: "center", md: "center", lg: "start" },
        px: "7%",
        my: 5,
      }}>
         
        <List>
          {blogs.map((blog) => {
            // Map the blogs to JSX
            return (
              <>
              <ListItem key={blog._id}>
                <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "backInOut", duration: 1 }}
            >
               <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none'}}>
              <Typography 
              variant='h4'
              sx={{
                py:{xs:1,sm:2,md:3,lg:4},
                fontSize: {xs:20,sm: 30},
                fontFamily: '"Saira Semi Condensed"',

                color:"#9d4f4b",
                ":hover" : {
                  color:"#763C39",
                }
              }}
              >
                    {blog.title}
                 
                </Typography>
                </Link>
             
              <Box
        component="img"
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
          mb: 5,
          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          borderRadius: "2%"          
        }}
        alt="blog"
        src={`../../backend/${blog.file_path}`}      />
               
               
                <Typography>
                  {blog.date} - <span className="text-secondary">posted {formatDate(blog.createdAt)}</span>
                </Typography>
            </motion.div>
                
              </ListItem>
              <Divider variant="middle" component="li" />
</>
            )
          })}
        </List>
        </Box>
        {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <CustomBox
          sx={{
            p: "3% 7%",
            my: 10,
            boxShadow: 3,
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
            justifyContent: "center",
            alignItems: "center",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "start",
            },
          }}
        >
          <Box
            component="div"
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "65%" },
              mr: { lg: 8 },
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Saira Semi Condensed"',
                color: "#fff",
                my: 3,
              }}
            >
              Preparations
            </Typography>
            <Typography
              variant="h4"
              sx={{
                my: 3,
                width: "100%",
              }}
            >
              
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              width: { xs: "30%", sm: "30%", md: "20%", lg: "20%" },
              height: "auto",
              boxShadow: 5,
              borderRadius: "50%",
              mb: 2,
            }}
            alt="logo"
            src={images.logo_white}
          />
        </CustomBox>
        </motion.div> */}
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
   <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: "3% 7%",
            mb: 4,
            mt:10,

          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Saira Semi Condensed"',
              fontWeight: 500,
              mb: 3,
              textAlign: "center",
            }}
          >
            Start your journey today!
          </Typography>
          <Link to="/contact">
            <Button
              variant="contained"
              size="medium"
              sx={{
                my: 3,
                width: { sm: "150px", md: "200px" },
                height: { xs: "40px", sm: "50px", md: "60px" },
                borderRadius: 0,
                backgroundColor: "#9d4f4b",
                color: "#fff",
                ":hover": {
                  backgroundColor: "#fff",
                  color: "#9d4f4b",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Saira Semi Condensed"',
                  fontWeight: 500,
                }}
              >
                Join Now
              </Typography>
            </Button>
          </Link>
        </Box>
        </motion.div>
      
    </>
  )
}

export default Blogs