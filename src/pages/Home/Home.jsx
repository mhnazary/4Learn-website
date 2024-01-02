import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeInfo from "../../components/About/About";
import Navbar from "../../components/Navbar/Navbar";
import AboutNums from "../../components/About/AboutNums";
import HomeWhy from "../../components/HomeHeader/HomeWhy";

function Home() {
  return (
    <div>
  
      <Navbar />
    <div className="mt-1">
      <HomeHeader />
      <HomeInfo />
      <AboutNums />
      <HomeWhy />
      </div>
    </div>
  );
}

export default Home;
