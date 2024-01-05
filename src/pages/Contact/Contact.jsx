import ContactUs from "../../components/Contact/ContactUs";
import EmailUs from "../../components/Contact/EmailUs";
import map from "../../assets/images/map.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { AboutPart } from "../About/About";

function Contacts() {
  return (
    <>
      <Navbar />{" "}
      <div className="pt-16">
        <AboutPart part="Contact Us" />
        <div className="pt-10 w-full">
          <img className="w-full h-[600px]" src={map} alt="map" />
        </div>
        <div className="py-16 px-16 flex justify-center">
          <ContactUs />
          <EmailUs />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contacts;
