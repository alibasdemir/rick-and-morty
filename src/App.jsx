import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import FooterContainer from "./containers/FooterContainer";
import SupportUs from "./pages/SupportUs/SupportUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/support-us" element={<SupportUs />} />
        </Routes>
        <FooterContainer />
      </Router>
    </>
  );
}

export default App;
