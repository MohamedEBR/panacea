import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import "./App.css";
import { Home, About, Contact, Programs, Error, Login, Signup, Blogs, CreateBlog, EditBlog, BlogId } from "./pages";
import Box from "@mui/material/Box";
function App() {
  return (
    <Box
      sx={{
        overflow: "hidden",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/blogs/" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogId />} />
        {/* <Route path="/blogs/new" element={<CreateBlog />} /> */}
        {/* <Route path="/blogs/:id/edit" element={<EditBlog />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
