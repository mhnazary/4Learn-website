import HomeHeader from "../../components/Home/HomeHeader";
import HomeInfo from "../../components/About/About";
import Navbar from "../../components/Navbar/Navbar";
import AboutNums from "../../components/About/AboutNums";
import HomeWhy from "../../components/Home/HomeWhy";
import IconTitles from "../../components/Home/IconTitles";

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
      </div>
    </div>
  );
}

export default Home;
