import Navbar from "./components/common/Navbar";
import Carousel from "./components/common/HeroCarousel";
import WhyPAC from "./components/WhyPAC";
import Product from "@/components/Product";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import EMoney from "./components/EMoney/EMoney";
import OurCustomer from "./components/OurCustomer/OurCustomer";
import Sass from "./components/SassPage/Sass";
import Iso from "./components/Iso";
import Footer from "./components/Footer";

import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Navbar />
      <Element name="hero">
        <Carousel />
      </Element>
      <Element name="whypac">
        <WhyPAC />
      </Element>
      <Element name="product">
        <Product />
      </Element>
      <Element name="ecosystem">
        <Ecosystem />
      </Element>
      <Element name="emoney">
        <EMoney />
      </Element>
      <Element name="ourcustomer">
        <OurCustomer />
      </Element>
      <Element name="sass">
        <Sass />
      </Element>
      <Element name="iso">
        <Iso />
      </Element>

      <Footer />
    </>
  );
}

export default App;
