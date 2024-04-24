import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Main2 from "../Main/Main2";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main2 />,
    children: [
      {
        path: "/home2",
        element: <Home2 />,
      },
    ],
  },
]);

export default router;
