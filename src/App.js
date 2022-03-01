import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";
import "babel-polyfill";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Developed By Jason</title>
        <meta
          name="description"
          content="Do You Want a Custom Device Friendly, Minmal/Modern and Professional Website or want to redesign your existing site, then you are at the right place. I Help Start-ups, Businesses and Agencies Achieve High Quality Websites and Exceptional User Experience."
        />
      </Helmet>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
