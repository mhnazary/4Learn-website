import Navbar from "../../components/Navbar/Navbar";
import Events from "../../components/Events/EventsHeader";
import EventsCards from "../../components/Events/EventsCards";
import Footer from "../../components/Footer/Footer";

function Courses() {
  return (
    <div>
      <Navbar />
      <div className="mt-16">
          <Events />
        <div className="space-y-14 mt-40">
        <EventsCards />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default Courses;
