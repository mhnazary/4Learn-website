import ContactUs from "../../components/Contact/ContactUs";
import EmailUs from "../../components/Contact/EmailUs";
import AddMap from "../../components/Contact/Map";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { AboutPart } from "../About/About";

function Contacts() {
  return (
    <>
      <Navbar />{" "}
      <div className="pt-16">
        <AboutPart part="Contact Us" />
        <div className="py-10 w-full">
          <AddMap />
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
