import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom'; 
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './pages/home';
import Education from './pages/education';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Skills from './pages/skills';
import References from './pages/references';
import './App.css'

const Root = () => {
return (
    <HelmetProvider>
      <div>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/references" element={<References />} />
        </Routes>
        <Footer />
      </div> 
    </HelmetProvider> 
  )
}

const router = createBrowserRouter(
  [{path:"*", element: <Root/>}]
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}