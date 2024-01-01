import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className=" flex justify-between fixed py-4 px-12 bg-white w-full text-center shadow-sm">
        <h1 className="text-3xl font-bold font-poppins text-green">
          4Learn-App
        </h1>
        <div className="navbar w-9/12 flex justify-between text-center">
          <div className="nav flex justify-evenly w-10/12 text-center text-base pt-2 text-navbar font-sans">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Courses">Courses</NavLink>
            <NavLink to="/Trainers">Trainers</NavLink>
            <NavLink to="/Events">Events</NavLink>
            <NavLink to="/Pricing">Pricing</NavLink>
            <NavLink to="/Dropdown">Dropdown</NavLink>
            <NavLink to="/Contacts">Contacts</NavLink>
          </div>
          <button className="start bg-green text-white px-5 rounded-3xl font-sans">
            {" "}
            Get started
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
