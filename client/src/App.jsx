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
  ViewAttendance,
  AttendanceHistory,
  ViewProduction,
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
        {
          path: "/ViewAttendance",
          element: <ViewAttendance />,
        },
        {
          path: "/AttendanceHistory",
          element: <AttendanceHistory />,
        },
        {
          path: "/ViewProduction",
          element: <ViewProduction />,
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
