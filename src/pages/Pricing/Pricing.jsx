import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Pricing/Cards";
import { AboutPart } from "../About/About";

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <AboutPart part="Pricing" />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default Pricing;
