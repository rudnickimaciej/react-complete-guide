import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Producs from "./pages/Products";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";

const routerDefinitions = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Producs />} />
  </Route>
);

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Producs /> },
      { path: "products/:id", element: <Product /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router2} />;
}

export default App;
