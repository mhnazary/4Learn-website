import HomeHeader from "../../components/Home/HomeHeader";
import HomeInfo from "../../components/About/About";
import Navbar from "../../components/Navbar/Navbar";
import AboutNums from "../../components/About/AboutNums";
import HomeWhy from "../../components/Home/HomeWhy";
import IconTitles from "../../components/Home/IconTitles";
import CourseTitle from "../../components/Home/CourseTitle";
import CouresesCards from "../../components/Home/CoursesCards";
import Trainers from "../../components/Home/Trainers";

function Home() {
  return (
    <div>
  
      <Navbar />
    <div className="mt-1">
      <HomeHeader />
      <HomeInfo />
      <AboutNums />
      <HomeWhy />
      <IconTitles />
      <CourseTitle />
      <CouresesCards />
      <Trainers />
      </div>
    </div>
  );
}

export default Home;
