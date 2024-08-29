import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/IntroSection/IntroSection";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <Card />
      <Footer />
    </>
  );
}

export default App;
