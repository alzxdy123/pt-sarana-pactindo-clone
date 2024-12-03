import Navbar from "./components/common/Navbar";
import Carousel from "./components/common/HeroCarousel";
import WhyPAC from "./components/WhyPAC";
import Product from "@/components/Product";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import EMoney from "./components/EMoney/EMoney";
import OurCustomer from "./components/OurCustomer/OurCustomer";
import Sass from "./components/SassPage/SAss";
import Iso from "./components/Iso";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <WhyPAC />
      <Product />
      <Ecosystem />
      <EMoney />
      <OurCustomer />
      <Sass />
      <Iso />
      <Footer />
    </>
  );
}

export default App;
