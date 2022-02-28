import './App.css';
import { Header } from './Components/Header';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { Footer } from './Components/Footer';
import { Intro } from './Components/Intro';
import { About } from './Components/Pages/About';
import { Resume } from './Components/Pages/Resume';
import { Contact } from './Components/Pages/Contact';
import { Blogs } from './Components/Pages/Blogs';
import { Projects } from './Components/Pages/Projects';
import { Certifications } from './Components/Pages/Certifications';
import { Playground } from './Components/Pages/Playground';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><Intro/><Footer /></>} />
          <Route path="/home" element={<><Header /><Intro/><Footer /></>} />
          <Route path="/projects" element={<><Header/><Projects/><Footer/></>} />
          <Route path="/about" element={<><Header/><About/><Footer/></>} />
          <Route path="/resume" element={<><Header/><Resume/><Footer/></>} />
          <Route path="/contact" element={<><Header/><Contact/><Footer/></>} />
          <Route path="/blogs" element={<><Header/><Blogs/><Footer/></>}/>
          <Route path="/playground" element={<><Header/><Playground/><Footer/></>}/>
          <Route path="/certifications" element={<><Header/><Certifications/><Footer/></>}>
            <Route path='hindi' element={<></>} />
            <Route path='marathi' element={<></>} />
          </Route>
          <Route path="*" element={<><Header/><h1 style={{ height: "100vh" }} className="p-5">Page Not Found!</h1><Footer /></>} />
        </Routes>
      </Router>
      {/* <Router>
      <Header searchBar={false}/>
      <Footer/>
      </Router> */}
    </div>
  );
}

export default App;
