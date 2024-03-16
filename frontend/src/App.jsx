import { Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header'
import Footer from './components/shared/Footer';
import './App.css'
import { Home, About, Contact, Programs, Error } from './pages';
import { Fragment } from 'react';
function App() {

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App
