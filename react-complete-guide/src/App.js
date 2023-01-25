import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/info", element: <Info /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
