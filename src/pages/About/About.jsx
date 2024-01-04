import HomeInfo from "../../components/About/About";
import AboutNums from "../../components/About/AboutNums";
import Navbar from "../../components/Navbar/Navbar";
import MultipleItems from "../../components/About/Slider.jsx";

function About() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <AboutPart part="About Us" />
        <HomeInfo />
        <AboutNums />
        <MultipleItems />
      </div>
    </>
  );
}

function AboutPart({ part }) {
  return (
    <>
      <div className="px-4 lg:px-12 bg-green flex flex-col justify-center items-center py-8 text-white">
        <h1 className="text-[32px] font-raleway font-bold">{part}</h1>
        <p className="text-center md:text-center text-[14px] font-sans">
          Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
          id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
          aperiam consequatur laboriosam nemo harum praesentium.
        </p>
      </div>
    </>
  );
}

export { About, AboutPart };
