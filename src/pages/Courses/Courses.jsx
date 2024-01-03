import Navbar from "../../components/Navbar/Navbar";
import CoursesHeader from "../../components/Courses/CoursesHeader";
import CouresesCards from "../../components/Home/CoursesCards";
import Footer from "../../components/Footer/Footer";

function Courses() {
  return (
    <div>
      <Navbar />
      <div className="mt-16">
          <CoursesHeader />
        <div className="space-y-14 mt-40">
        <CouresesCards />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default Courses;
