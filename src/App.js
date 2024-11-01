import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Software_Licenses from "./Pages/Software_Licenses/Software_Licenses";
import Information_Technology from "./Pages/Information_Technology/Information_Technology";
import Engineering_Products from "./Pages/Engineering_Products/Engineering_Products";
import ScrollToTop from "./Components/ScrollToTop"; // Import the ScrollToTop component
import Printing_Solutions from "./Pages/Printing_Solutions/Printing_Solutions";

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Software-Licences-Solutions" element={<Software_Licenses />} />
        <Route
          path="/Information-Technology"
          element={<Information_Technology />}
        />
        <Route
          path="/Engineering-Products-and-Services-Solutions"
          element={<Engineering_Products />}
        />
        <Route path="/Imaging-and-Printing" element={<Printing_Solutions />} />
      </Routes>
    </Router>
  );
}

export default App;
