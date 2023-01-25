import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Layout from "./pages/Layout";
import { Children } from "react";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

const routerDefinitions = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/info" element={<Info />} />
  </Route>
);

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/info", element: <Info /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router2} />;
}

export default App;
