import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Aboutdetails from './components/Aboutdetails';
import Blogdetails from './components/Blogdetails';
import Tag from './components/Tag';
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/about-details" element={<Aboutdetails />}></Route>
            <Route exact path="/blog-details" element={<Blogdetails />}></Route>
            <Route exact path="/tag" element={<Tag />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
