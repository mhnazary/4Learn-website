import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <header className=" flex justify-between fixed py-4 px-12 bg-white w-full text-center shadow-sm">
        <h1 className="text-3xl font-bold font-poppins text-green">
          4Learn-App
        </h1>
        <div className=" lg:w-9/12 flex justify-between text-center">
          <div className="nav hidden lg:flex justify-evenly w-10/12 text-center text-base pt-2 text-navbar font-sans">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Courses">Courses</NavLink>
            <NavLink to="/Trainers">Trainers</NavLink>
            <NavLink to="/Events">Events</NavLink>
            <NavLink to="/Pricing">Pricing</NavLink>
            <NavLink to="/Dropdown">Dropdown</NavLink>
            <NavLink to="/Contacts">Contacts</NavLink>
          </div>
          <div className='flex justify-between items-center '>
            <button className="start bg-green text-white px-5 py-2 rounded-3xl font-sans">
              {" "}
              Get started
            </button>
            <div className='ml-5 cursor-pointer text-2xl lg:hidden'>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
