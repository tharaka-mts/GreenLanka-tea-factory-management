import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import Layout from "./Layout";
import Login from "./pages/Login";
import Area from "./pages/Charts/Area";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Area />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
