import NavBar from "./Components/NavBar/NavBar";
import HomePageRoute from "./Components/Routes/HomePageRoute";
import { HashRouter as Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Medical from "./Components/Routes/Medical";
import Bookings from "./Components/Routes/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageRoute />,
  },
  {
    path: "/my-bookings",
    element: <Bookings />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
