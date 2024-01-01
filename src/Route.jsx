import About from "./components/About/About";
import Contacts from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Dropdown from "./components/Dropdown/Dropdown";
import Events from "./components/Events/Events";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Trainers from "./components/Trainers/Trainers";

export let routing = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  {
    path: "/Courses",
    element: <Courses />,
  },
  { path: "/Trainers", element: <Trainers /> },
  { path: "/Events", element: <Events /> },
  { path: "/Pricing", element: <Pricing /> },
  { path: "/Dropdown", element: <Dropdown /> },
  { path: "/Contacts", element: <Contacts /> },
];
