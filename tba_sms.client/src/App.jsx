import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import About from "./pages/about";
import Program from "./pages/program";
import GetInvolved from "./pages/getInvolved";
import ContactUs from "./pages/contactUs";
import Donation from "./pages/donation";
// import SIgnIn from "./pages/SIgnIn";
import Signup from "./pages/signup";
import SignIn from "./pages/SIgnIn";
import ForgetPassword from "./pages/ForgetPassword";
import ActivityCalendar from "./pages/ActivityCalendar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Classlist from "./pages/Classlist";
import Studentlist from "./pages/Studentlist";
import SponsorCart from "./pages/SponsorCart";
import Studentprofile from "./pages/Studentprofile";
import Monthwisecalendar from "./components/Monthwisecalendar";
import Datewisecalendar from "./components/Datewisecalendar";
import Events from "./pages/Events";
import Gallery from "./pages/gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />, 
      },
    ],
  },
  {
    path: "/about",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <About />,
      },
    ],
  },
  {
    path: "/program",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Program />,
      },
    ],
  },
  {
    path: "/get-involved",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <GetInvolved />,
      },
    ],
  },
  {
    path: "/contact-us",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/donation",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Donation />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <SignIn/>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/editprofile",
    element: <EditProfile />,
  },
  {
    path: "/classlist",
    element: <Classlist />,
  },
  {
    path: "/studentlist",
    element: <Studentlist />,
  },
  {
    path: "/sponsorcart",
    element: <SponsorCart />,
  },
  {
    path: "/studentprofile",
    element: <Studentprofile />,
  },
  {
    path: "/activitycalendar",
    element: <ActivityCalendar />,
  },
  {
    path: "/monthwisecalendar",
    element: <Monthwisecalendar />,
  },
  {
    path: "/datewisecalendar",
    element: <Datewisecalendar />,
  },
  {
    path: "/events",
    element: <Events/>
  },
  {
    path: "/gallery",
    element: <Gallery/>
  },
  {
    path: "/signup",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Signup />,
      },
    ],
  },
  {
    path: "/forgetpassword",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ForgetPassword />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
