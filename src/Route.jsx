
import {About} from "./pages/About/About";
import { About } from "./pages/About/About";
import Contacts from "./pages/Contact/Contact";
import Courses from "./pages/Courses/Courses";
import Dropdown from "./pages/Dropdown/Dropdown";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Trainers from "./pages/Trainers/Trainers";

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
