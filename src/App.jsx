import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PageError from "./pages/PageError";

function App() {
  return (
    <>
      <BrowerRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<PageError />} />
        </Routes>
        <Footer />
      </BrowerRouter>
      <h1>react</h1>
    </>
  );
}

export default App;
