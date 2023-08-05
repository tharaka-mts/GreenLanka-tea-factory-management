import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import {
  Home,
  Reports,
  Production,
  Attendance,
  Manage,
  MyTeam,
  Settings,
  Login,
  GreenLankaReport,
  OutsideReport,
  FullReport,
} from "./pages";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/attendance",
          element: <Attendance />,
        },
        {
          path: "/production",
          element: <Production />,
        },
        {
          path: "/manage",
          element: <Manage />,
        },
        {
          path: "/myteam",
          element: <MyTeam />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/greenLankaReport",
          element: <GreenLankaReport />,
        },
        {
          path: "/outsideReport",
          element: <OutsideReport />,
        },
        {
          path: "/fullReport",
          element: <FullReport />,
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
