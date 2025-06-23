import NavBar from "./Components/NavBar/NavBar";
import HomePageRoute from "./Components/Routes/HomePageRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Medical from "./Components/Routes/Medical";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageRoute />,
  },
  {
    path: "/Medical",
    element: <Medical />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
