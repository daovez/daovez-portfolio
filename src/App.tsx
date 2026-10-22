
import { Routes, Route } from 'react-router'

import { Layout } from './components/layout/Layout'

import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
