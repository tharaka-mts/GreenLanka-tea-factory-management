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
  UserProfilePage,
  AddUser,
  AddSalaryDetails,
  SalaryReport,
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
          path: "/salary",
          element: <SalaryReport />,
        },
        {
          path: "/UserProfilePage",
          element: <UserProfilePage />,
        },
        {
          path: "/AddUser",
          element: <AddUser />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/AddSalaryDetails",
      element: <AddSalaryDetails />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />

    </div>
  );
};

export default App;
