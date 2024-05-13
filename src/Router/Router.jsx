import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Main2 from "../Main/Main2";
import Main3 from "../Main/Main3";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import Home3 from "../Pages/Home3/Home3";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import ProjectDetails from "../Pages/InnerPage/ProjectDetails/ProjectDetails";
import BlogDetails from "../Pages/InnerPage/BlogDetails/BlogDetails";
import ProjectInner from "../Pages/InnerPage/ProjectInner/ProjectInner";
import PricingInner from "../Pages/InnerPage/PricingInner/PricingInner";
import TeamInner from "../Pages/InnerPage/TeamInner/TeamInner";
import ServiceDetails from "../Pages/InnerPage/ServiceDetails/ServiceDetails";
import BlogList from "../Pages/InnerPage/BlogList/BlogList";
import AboutInner from "../Pages/InnerPage/AboutInner/AboutInner";
import ServiceInner from "../Pages/InnerPage/ServiceInner/ServiceInner";
import BlogGrid from "../Pages/InnerPage/BlogGrid/BlogGrid";
import TestimonialInner from "../Pages/InnerPage/TestimonialInner/TestimonialInner";
import AppiontmentInner from "../Pages/InnerPage/Appiontment/AppiontmentInner";
import ContactInner from "../Pages/InnerPage/ContactInner/ContactInner";

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
        path: "/project",
        element: <ProjectInner />,
      },
      {
        path: "/about",
        element: <AboutInner />,
      },
      {
        path: "/service",
        element: <ServiceInner />,
      },
      {
        path: "/serviceDetails",
        element: <ServiceDetails />,
      },
      {
        path: "/projectDetails",
        element: <ProjectDetails />,
      },
      {
        path: "/pricing",
        element: <PricingInner />,
      },
      {
        path: "/teamInner",
        element: <TeamInner />,
      },
      {
        path: "/testimonial",
        element: <TestimonialInner />,
      },
      {
        path: "/appiontment",
        element: <AppiontmentInner />,
      },
      {
        path: "/blogGrid",
        element: <BlogGrid />,
      },
      {
        path: "/blogList",
        element: <BlogList />,
      },
      {
        path: "/blogDetails",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <ContactInner />,
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
