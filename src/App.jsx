import Navigationbar from "./Components/Navigationbar";
import Banner from "./Components/Banner";
import Brand from "./Components/Brand";
import ActivitiesSection from "./Components/ActivitiesSection";
import Mainfeatures from "./Components/Mainfeatures";
import QualityAssurance from "./Components/QualityAssurance";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Projects from "./Components/Projects";
import About from "./Components/About";

function HomePage() {
  return (
    <>
    
      <Banner />
      <Brand />
      <ActivitiesSection />
      <Mainfeatures />
      <QualityAssurance />
    
    </>
  );
}

function App() {
  return (
    <Router>
     <Navigationbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Project" element={<Projects/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
