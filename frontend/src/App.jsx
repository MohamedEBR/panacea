import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import "./App.css";
import { Home, About, Contact, Programs, Error } from "./pages";
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
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
