import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/info" element={<Info />} />
  </Route>
);

const router = createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
