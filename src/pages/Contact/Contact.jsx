import Navbar from "../../components/Navbar/Navbar";
import {AboutPart} from "../About/About";

function Contacts() {
  return (
    <>
      <Navbar />{" "}
      <div className="pt-16">
        <AboutPart part="Contact Us" />
      </div>
    </>
  );
}

export default Contacts;
