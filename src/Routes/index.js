import UiLayout from "../Layouts/UiLayout";
import Doctors from "../pages/Doctors/Doctors.js";
import Home from "../pages/Home/Home";
import ContactPage from "./../pages/Contact/ContactPage";
import About from "./../pages/About/About";
import Services from "./../pages/Services/Services";

const RootRoutes = [
  {
    path: "/",
    element: <UiLayout />,
    errorElement: <p>error</p>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
];

export default RootRoutes;
