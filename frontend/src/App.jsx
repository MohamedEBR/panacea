import { Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header'
import './App.css'
import { Home, About, Contact, Programs, Error } from './pages';
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
