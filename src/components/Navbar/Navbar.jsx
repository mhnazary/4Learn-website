function Navbar() {
  return (
    <>
      <header className=" flex justify-between fixed py-4 px-12 bg-white w-full text-center shadow-sm">
        <h1 className="text-3xl font-bold">4Learn-App</h1>
        <div className="navbar w-9/12 flex justify-between text-center">
          <div className="nav flex justify-evenly w-10/12 text-center text-lg pt-1">
            <navLink>Home</navLink>
            <navLink>About</navLink>
            <navLink>Courses</navLink>
            <navLink>Trainers</navLink>
            <navLink>Events</navLink>
            <navLink>Pricing</navLink>
            <navLink>Dropdown</navLink>
            <navLink>Contacts</navLink>
          </div>
          <button className="start bg-green-400 text-white px-5 rounded-3xl">
            {" "}
            Get started
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
