import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Data from "./pages/Data";
import Faculty from "./pages/Faculty";
import Faqs from "./pages/Faqs";
import Food from "./pages/Food";
import Home from "./pages/Home";
import Hostel from "./pages/Hostel";
import Portals from "./pages/Portals";
import Resources from "./pages/Resources";
import Survival from "./pages/Survival";
import Tips from "./pages/Tips";

const rootRoute = createRootRoute({ component: Outlet });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const faqsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faqs",
  component: Faqs,
});
const academicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics",
  component: Academics,
});
const facultyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faculty",
  component: Faculty,
});
const hostelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hostel",
  component: Hostel,
});
const foodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/food",
  component: Food,
});
const survivalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/survival",
  component: Survival,
});
const portalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portals",
  component: Portals,
});
const dataRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/data",
  component: Data,
});
const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources",
  component: Resources,
});
const tipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tips",
  component: Tips,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  faqsRoute,
  academicsRoute,
  facultyRoute,
  hostelRoute,
  foodRoute,
  survivalRoute,
  portalsRoute,
  dataRoute,
  resourcesRoute,
  tipsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
