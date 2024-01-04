import Footer from "../../components/Footer/Footer";
import Trainerss from "../../components/Home/Trainers";
import Navbar from "../../components/Navbar/Navbar";
import {AboutPart} from '../About/About';


function Trainers() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <AboutPart part='Trainers' />
        <Trainerss />
        <Footer />
      </div>
    </>
  );
}

export default Trainers;
