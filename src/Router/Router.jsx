import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Main2 from "../Main/Main2";
import Main3 from "../Main/Main3";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import Home3 from "../Pages/Home3/Home3";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import ProjectDetails from "../Pages/InnerPage/ProjectDetails/ProjectDetails";

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
      {
        path: "/projectDetails",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main3 />,
    children: [
      {
        path: "/home3",
        element: <Home3 />,
      },
    ],
  },
]);

export default router;
