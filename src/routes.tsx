import App from "./App";
import Shop from "./Shop";
import About from "./About";
import WhyPlants from "./WhyPlants";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "why-plants",
    element: <WhyPlants />,
  },
];

export default routes;
